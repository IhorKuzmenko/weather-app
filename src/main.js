import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  getWeatherData,
  getWeatherByCoords,
  getForecastFiveDays,
} from './js/weather-api';

import {
  createWeatherCard,
  clearWeatherCard,
  clearDateInfoCard,
  createForecastFiveDaysCards,
  clearForecastFiveDaysCards,
  setForecastCity,
  renderForecastHours,
  clearForecastHours,
  renderForecastChart,
} from './js/render-function';

import { initScroll, resetHourlyScroll } from './js/scroll-function';

/* =========================================
   DOM ELEMENTS
========================================= */

const input = document.querySelector('.header-input');

const isTodayPage = Boolean(document.querySelector('.home'));
const isFiveDaysPage = Boolean(document.querySelector('.five-days'));

const buttonShowChart = document.querySelector('.button-show-chart');

const buttonHideChart = document.querySelector('.button-hide-chart');

const buttonShowChartContainer = document.querySelector(
  '.chart-button-show-container'
);

const forecastChartContainer = document.querySelector(
  '.forecast-chart-container'
);

/* =========================================
   APPLICATION STATE
========================================= */

const DEFAULT_CITY = 'Kyiv';
const STORAGE_KEY = 'currentCity';

let lastForecastData = null;
let activeForecastButton = null;

let currentController = null;
let requestVersion = 0;

let chartsRenderedForData = null;
let chartsRenderingForData = null;

/* =========================================
   NOTIFICATIONS
========================================= */

function showMessage(message) {
  iziToast.show({
    message,
    position: 'topRight',
    timeout: 5000,
  });
}

function isRequestCanceled(error) {
  return (
    error?.code === 'ERR_CANCELED' ||
    error?.name === 'AbortError' ||
    error?.name === 'CanceledError'
  );
}

function getErrorMessage(error) {
  if (error?.response?.status === 404) {
    return 'City not found. Please check the name.';
  }

  if (error?.response?.status === 401) {
    return 'Weather API authorization error.';
  }

  if (error?.response?.status === 429) {
    return 'Too many requests. Please try again later.';
  }

  if (error?.code === 'ECONNABORTED' || error?.code === 'ETIMEDOUT') {
    return 'Request timed out. Please try again.';
  }

  return 'Unable to load weather. Check your connection.';
}

/* =========================================
   DATE AND TIME
========================================= */

function getOrdinalSuffix(day) {
  if (day > 3 && day < 21) return 'th';

  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

function getDateInfo(timezone = 0) {
  const now = new Date(Date.now() + timezone * 1000);

  const day = now.getUTCDate();

  const weekday = now.toLocaleDateString('en-US', {
    weekday: 'short',
    timeZone: 'UTC',
  });

  const month = now.toLocaleDateString('en-US', {
    month: 'long',
    timeZone: 'UTC',
  });

  const time = now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'UTC',
  });

  return {
    day: `${day}${getOrdinalSuffix(day)}`,
    weekday,
    month,
    time,
  };
}

function formatSunTime(unix, timezone) {
  const date = new Date((unix + timezone) * 1000);

  return date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'UTC',
  });
}

/* =========================================
   RESET FORECAST UI
========================================= */

function resetForecastDetails() {
  if (!isFiveDaysPage) return;

  if (activeForecastButton) {
    activeForecastButton.classList.remove('active');
    activeForecastButton = null;
  }

  clearForecastHours();
  resetHourlyScroll();

  const inner = document.querySelector('.forecast-container-inner');

  const scrollbar = document.querySelector('.scroll-bar-wrapper');

  if (inner) inner.style.display = 'none';
  if (scrollbar) scrollbar.style.display = 'none';
}

function resetChartVisibility() {
  if (!isFiveDaysPage) return;

  if (forecastChartContainer) {
    forecastChartContainer.style.display = 'none';
  }

  if (buttonShowChartContainer) {
    buttonShowChartContainer.style.display = 'flex';
  }
}

/* =========================================
   UPDATE WEATHER
========================================= */

async function updateWeather(cityOrCoords, saveToSession = false) {
  if (!isTodayPage && !isFiveDaysPage) return false;

  currentController?.abort();

  const controller = new AbortController();
  currentController = controller;

  const currentRequest = ++requestVersion;

  try {
    let currentData;
    let forecastData = null;

    if (typeof cityOrCoords === 'string') {
      currentData = await getWeatherData(cityOrCoords, controller.signal);
    } else {
      currentData = await getWeatherByCoords(
        cityOrCoords.lat,
        cityOrCoords.lon,
        controller.signal
      );
    }

    if (isFiveDaysPage) {
      forecastData = await getForecastFiveDays(
        currentData.name,
        controller.signal
      );
    }

    if (controller.signal.aborted || currentRequest !== requestVersion) {
      return false;
    }

    /* TODAY PAGE */

    if (isTodayPage) {
      clearWeatherCard();
      clearDateInfoCard();

      const dateInfo = getDateInfo(currentData.timezone);

      createWeatherCard({
        city: currentData.name,
        country: currentData.sys.country,

        temp: Math.round(currentData.main.temp),
        tempMin: Math.round(currentData.main.temp_min),
        tempMax: Math.round(currentData.main.temp_max),

        icon: currentData.weather[0].icon,

        day: dateInfo.day,
        weekday: dateInfo.weekday,
        month: dateInfo.month,
        time: dateInfo.time,

        sunrise: formatSunTime(currentData.sys.sunrise, currentData.timezone),

        sunset: formatSunTime(currentData.sys.sunset, currentData.timezone),
      });
    }

    /* FIVE DAYS PAGE */

    if (isFiveDaysPage && forecastData) {
      resetForecastDetails();
      resetChartVisibility();

      lastForecastData = forecastData;

      chartsRenderedForData = null;
      chartsRenderingForData = null;

      clearForecastFiveDaysCards();

      setForecastCity(forecastData.city.name, forecastData.city.country);

      createForecastFiveDaysCards(forecastData);

      initScroll();
    }

    if (saveToSession) {
      try {
        sessionStorage.setItem(STORAGE_KEY, currentData.name);
      } catch {
        // Weather display works without storage.
      }
    }

    return true;
  } catch (error) {
    if (
      isRequestCanceled(error) ||
      controller.signal.aborted ||
      currentRequest !== requestVersion
    ) {
      return false;
    }

    console.error('Weather request failed:', error);
    showMessage(getErrorMessage(error));

    return false;
  } finally {
    if (currentController === controller) {
      currentController = null;
    }
  }
}

/* =========================================
   INITIAL LOAD
========================================= */

function initializeWeather() {
  let savedCity = null;

  try {
    savedCity = sessionStorage.getItem(STORAGE_KEY);
  } catch {
    savedCity = null;
  }

  updateWeather(savedCity || DEFAULT_CITY);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeWeather, {
    once: true,
  });
} else {
  initializeWeather();
}

/* =========================================
   CITY SEARCH
========================================= */

input?.addEventListener('keydown', async event => {
  if (event.key !== 'Enter') return;

  event.preventDefault();

  const city = input.value.trim();

  if (!city) {
    showMessage('Please enter a city name.');
    return;
  }

  const success = await updateWeather(city, true);

  if (success) {
    input.value = '';
  }
});

/* =========================================
   STORAGE EVENT
========================================= */

window.addEventListener('storage', event => {
  if (event.key !== STORAGE_KEY) return;

  const city = event.newValue || DEFAULT_CITY;

  updateWeather(city);
});

/* =========================================
   FIVE-DAY DETAILS
========================================= */

if (isFiveDaysPage) {
  document.addEventListener('click', event => {
    const button = event.target.closest('.forecast-button');

    if (!button || !lastForecastData) return;

    const date = button.dataset.date;

    if (!date) return;

    if (activeForecastButton === button) {
      resetForecastDetails();
      return;
    }

    if (activeForecastButton) {
      activeForecastButton.classList.remove('active');
    }

    const hoursData = lastForecastData.list.filter(item =>
      item.dt_txt.startsWith(date)
    );

    clearForecastHours();
    renderForecastHours(hoursData);
    resetHourlyScroll();

    button.classList.add('active');
    activeForecastButton = button;
  });
}

/* =========================================
   CHART VISIBILITY
========================================= */

async function showCharts() {
  if (
    !lastForecastData ||
    !forecastChartContainer ||
    !buttonShowChartContainer
  ) {
    return;
  }

  buttonShowChartContainer.style.display = 'none';
  forecastChartContainer.style.display = 'flex';

  await new Promise(resolve => {
    requestAnimationFrame(resolve);
  });

  const forecastData = lastForecastData;

  if (chartsRenderedForData === forecastData) {
    return;
  }

  if (chartsRenderingForData === forecastData) {
    return;
  }

  chartsRenderingForData = forecastData;

  try {
    await renderForecastChart(forecastData);

    if (lastForecastData === forecastData) {
      chartsRenderedForData = forecastData;
    }
  } catch (error) {
    console.error('Chart rendering failed:', error);

    showMessage('Unable to display weather charts.');
    resetChartVisibility();
  } finally {
    if (chartsRenderingForData === forecastData) {
      chartsRenderingForData = null;
    }
  }
}

function hideCharts() {
  resetChartVisibility();
}

/* =========================================
   CHART TOGGLE EVENTS
========================================= */

function addChartIconHandler(icon, button, callback, label) {
  if (!icon || button?.contains(icon)) return;

  icon.style.cursor = 'pointer';
  icon.setAttribute('role', 'button');
  icon.setAttribute('tabindex', '0');
  icon.setAttribute('aria-label', label);

  icon.addEventListener('click', callback);

  icon.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
    }
  });
}

if (isFiveDaysPage) {
  buttonShowChart?.addEventListener('click', showCharts);
  buttonHideChart?.addEventListener('click', hideCharts);

  const showIcon = buttonShowChartContainer?.querySelector('.icon-container');

  const hideIcon =
    forecastChartContainer?.querySelector('.icon-container') ||
    document.querySelector('.chart-button-hide-container .icon-container');

  addChartIconHandler(
    showIcon,
    buttonShowChart,
    showCharts,
    'Show weather charts'
  );

  addChartIconHandler(
    hideIcon,
    buttonHideChart,
    hideCharts,
    'Hide weather charts'
  );
}
