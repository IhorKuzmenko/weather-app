import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const weatherApi = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

async function fetchWeather(endpoint, params, signal) {
  if (!API_KEY) {
    throw new Error('OpenWeather API key is missing');
  }

  const response = await weatherApi.get(endpoint, {
    params: {
      ...params,
      appid: API_KEY,
      units: 'metric',
    },
    signal,
  });

  return response.data;
}

export function getWeatherData(city, signal) {
  return fetchWeather('/weather', { q: city }, signal);
}

export function getWeatherByCoords(lat, lon, signal) {
  return fetchWeather('/weather', { lat, lon }, signal);
}

export function getForecastFiveDays(city, signal) {
  return fetchWeather('/forecast', { q: city }, signal);
}

export function getForecastFiveDaysByCoords(lat, lon, signal) {
  return fetchWeather('/forecast', { lat, lon }, signal);
}
