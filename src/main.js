import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getWeatherData, getWeatherByCoords } from './js/weather-api';
import { createWeatherCard, clearWeatherCard } from './js/render-function';

const input = document.querySelector('.header-input');

async function showWeatherByCoords(lat, lon) {
  try {
    const data = await getWeatherByCoords(lat, lon);
    createWeatherCard({
      city: data.name,
      country: data.sys.country,
      temp: Math.round(data.main.temp),
      tempMin: Math.round(data.main.temp_min),
      tempMax: Math.round(data.main.temp_max),
      icon: data.weather[0].icon,
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
      }
    );
  } else {
    iziToast.show({
      message: 'Geolocation not supported',
      position: 'topRight',
      timeout: 5000,
    });
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

    try {
      const data = await getWeatherData(city);
      createWeatherCard({
        city: data.name,
        country: data.sys.country,
        temp: Math.round(data.main.temp),
        tempMin: Math.round(data.main.temp_min),
        tempMax: Math.round(data.main.temp_max),
        icon: data.weather[0].icon,
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
