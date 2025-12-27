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
} from './js/render-function';

import initScroll from './js/scroll-function';

const input = document.querySelector('.header-input');

const isTodayPage = document.querySelector('.home') !== null;
const isFiveDaysPage = document.querySelector('.five-days') !== null;

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

function formatSunTime(unix, timezone) {
  return new Date((unix + timezone) * 1000).toUTCString().slice(17, 22);
}

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

window.addEventListener('storage', e => {
  if (e.key === 'currentCity') {
    input.value = e.newValue;
    updateWeather(e.newValue);
  }
});
