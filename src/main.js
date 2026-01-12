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

import { initScroll } from './js/scroll-function';

const input = document.querySelector('.header-input');

/**isTodayPage and isFiveDaysPage are flags to know which page we are on (current weather or 5-day forecast). */

const isTodayPage = document.querySelector('.home') !== null;
const isFiveDaysPage = document.querySelector('.five-days') !== null;

/**getDateInfo() - Returns an object with the current date and time,
 * formatting the day, month, day of the week, and time. */

function getDateInfo() {
  const now = new Date();

  const day = now.getDate();
  const weekday = now.toLocaleDateString('en-US', { weekday: 'short' });
  const month = now.toLocaleDateString('en-US', { month: 'long' });
  const time = now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return {
    day: `${day}<sup>${getOrdinalSuffix(day)}</sup>`,
    weekday,
    month,
    time,
  };
}

/**Adds an English suffix to the day (st, nd, rd, th) to display the date beautifully. */

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

/**Converts sunrise/sunset times from UNIX + timezone to convenient HH:MM format */

function formatSunTime(unix, timezone) {
  return new Date((unix + timezone) * 1000).toUTCString().slice(17, 22);
}

let lastForecastData = null;

async function updateWeather(cityOrCoords, saveToSession = false) {
  let currentData, forecastData;

  try {
    if (typeof cityOrCoords === 'string') {
      currentData = await getWeatherData(cityOrCoords);
    } else {
      currentData = await getWeatherByCoords(
        cityOrCoords.lat,
        cityOrCoords.lon
      );
    }
    forecastData = await getForecastFiveDays(currentData.name);
    lastForecastData = forecastData;

    if (saveToSession) {
      sessionStorage.setItem('currentCity', currentData.name);
    }
  } catch (err) {
    iziToast.show({
      message: 'City not found or network error',
      position: 'topRight',
      timeout: 5000,
    });
    return;
  }

  if (isTodayPage) {
    clearWeatherCard();
    clearDateInfoCard();
  }
  if (isFiveDaysPage) {
    clearForecastFiveDaysCards();
  }

  if (isTodayPage) {
    const dateInfo = getDateInfo();

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

  if (isFiveDaysPage) {
    setForecastCity(forecastData.city.name, forecastData.city.country);
    createForecastFiveDaysCards(forecastData);
    initScroll();
  }
}

/**Page loading - autostart */

window.addEventListener('load', () => {
  const cityFromSession = sessionStorage.getItem('currentCity');

  if (cityFromSession) {
    updateWeather(cityFromSession);
    return;
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        updateWeather({ lat: latitude, lon: longitude });
      },
      () => {
        iziToast.show({
          message: 'Geolocation denied, enter city manually',
          position: 'topRight',
          timeout: 5000,
        });

        updateWeather({ lat: 50.4333, lon: 30.5167 });
      }
    );
  } else {
    iziToast.show({
      message: 'Geolocation not supported',
      position: 'topRight',
      timeout: 5000,
    });

    updateWeather({ lat: 50.4333, lon: 30.5167 });
  }
});

/**City input field */

input.addEventListener('keydown', async e => {
  if (e.key === 'Enter') {
    const city = input.value.trim();

    if (!city) {
      iziToast.show({
        message: 'Enter the city',
        position: 'topRight',
        timeout: 5000,
      });

      return;
    }
    await updateWeather(city, true);

    input.value = '';
  }
});

/**Storage event */

window.addEventListener('storage', e => {
  if (e.key === 'currentCity') {
    input.value = e.newValue;
    updateWeather(e.newValue);
  }
});

let activeForecastButton = null; //Stores the currently active "more info" button in the 5-day forecast.

//Processing clicks on the "more info" buttons in the 5-day forecast

document.addEventListener('click', e => {
  const forecastHours = document.querySelector('.forecast-hours');
  const button = e.target.closest('.forecast-button'); //We check whether the click was on the "more info" button or inside it.

  if (!button || !forecastHours || !lastForecastData) return;

  const date = button.dataset.date; //The date to which the button is linked.

  if (!date) return;

  /**Closing the active button */

  if (activeForecastButton === button) {
    clearForecastHours();
    button.classList.remove('active');
    activeForecastButton = null;
    return;
  }

  /**Switch to another button */

  if (activeForecastButton) {
    activeForecastButton.classList.remove('active');
  }

  /**Filtering data by a selected date */
  const hoursData = lastForecastData.list.filter(item => {
    const itemDate = item.dt_txt.split(' ')[0];
    return itemDate === date;
  });

  clearForecastHours();
  renderForecastHours(hoursData);

  button.classList.add('active');
  activeForecastButton = button;
});

const buttonShowChart = document.querySelector('.button-show-chart');
const buttonShowChartContainer = document.querySelector(
  '.chart-button-show-container'
);
const buttonHideChart = document.querySelector('.button-hide-chart');
const forecastChartContainer = document.querySelector(
  '.forecast-chart-container'
);

if (buttonShowChart && forecastChartContainer && buttonShowChartContainer) {
  buttonShowChart.addEventListener('click', () => {
    if (!buttonShowChart || !forecastChartContainer) return;
    buttonShowChartContainer.style.display = 'none';
    forecastChartContainer.style.display = 'flex';

    requestAnimationFrame(() => {
      if (lastForecastData) {
        renderForecastChart(lastForecastData);
      }
    });
  });

  buttonHideChart.addEventListener('click', () => {
    if (!buttonHideChart || !forecastChartContainer) return;
    buttonShowChartContainer.style.display = 'flex';
    forecastChartContainer.style.display = 'none';
  });
}
