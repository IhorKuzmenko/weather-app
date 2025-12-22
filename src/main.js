import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getWeatherData, getWeatherByCoords } from './js/weather-api';
import {
  createWeatherCard,
  clearWeatherCard,
  clearDateInfoCard,
} from './js/render-function';

const input = document.querySelector('.header-input');

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

async function showWeatherByCoords(lat, lon, city = null, country = null) {
  try {
    const data = await getWeatherByCoords(lat, lon);
    const dateInfo = getDateInfo();

    createWeatherCard({
      city: data.name,
      country: data.sys.country,
      temp: Math.round(data.main.temp),
      tempMin: Math.round(data.main.temp_min),
      tempMax: Math.round(data.main.temp_max),
      icon: data.weather[0].icon,

      day: dateInfo.day,
      weekday: dateInfo.weekday,
      month: dateInfo.month,
      time: dateInfo.time,
      sunrise: formatSunTime(data.sys.sunrise, data.timezone),
      sunset: formatSunTime(data.sys.sunset, data.timezone),
    });
  } catch (err) {
    iziToast.show({
      message: 'Cannot get local weather',
      position: 'topRight',
      timeout: 5000,
    });
  }
}

window.addEventListener('load', () => {
  const fallbackCity = {
    lat: 50.4501,
    lon: 30.5234,
    city: 'Kyiv',
    country: 'UA',
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        showWeatherByCoords(latitude, longitude);
      },
      () => {
        iziToast.show({
          message: 'Geolocation denied, enter city manually',
          position: 'topRight',
          timeout: 5000,
        });

        showWeatherByCoords(
          fallbackCity.lat,
          fallbackCity.lon,
          fallbackCity.city,
          fallbackCity.country
        );
      }
    );
  } else {
    iziToast.show({
      message: 'Geolocation not supported',
      position: 'topRight',
      timeout: 5000,
    });

    showWeatherByCoords(
      fallbackCity.lat,
      fallbackCity.lon,
      fallbackCity.city,
      fallbackCity.country
    );
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

    clearWeatherCard();
    clearDateInfoCard();

    try {
      const data = await getWeatherData(city);
      const dateInfo = getDateInfo();

      createWeatherCard({
        city: data.name,
        country: data.sys.country,
        temp: Math.round(data.main.temp),
        tempMin: Math.round(data.main.temp_min),
        tempMax: Math.round(data.main.temp_max),
        icon: data.weather[0].icon,

        day: dateInfo.day,
        weekday: dateInfo.weekday,
        month: dateInfo.month,
        time: dateInfo.time,
        sunrise: formatSunTime(data.sys.sunrise, data.timezone),
        sunset: formatSunTime(data.sys.sunset, data.timezone),
      });
    } catch (err) {
      iziToast.show({
        message: 'City not found',
        position: 'topRight',
        timeout: 5000,
      });
    }
  }
});
