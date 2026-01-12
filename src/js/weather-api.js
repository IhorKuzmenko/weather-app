import axios from 'axios';

const apiKey = '324d82384f0b6b757e9697b6aa6e9ef8';

/** Gets the current weather data for the specified city */

export async function getWeatherData(city) {
  const searchParam = new URLSearchParams({
    q: city,
    appid: apiKey,
    units: 'metric',
  });

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?${searchParam}`
  );

  return response.data;
}

/** Gets the current weather data by geographic coordinates */

export async function getWeatherByCoords(lat, lon) {
  const searchParam = new URLSearchParams({
    lat,
    lon,
    appid: apiKey,
    units: 'metric',
  });

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?${searchParam}`
  );

  return response.data;
}

/** Gets the 5-day weather forecast for the specified city */

export async function getForecastFiveDays(city) {
  const searchParam = new URLSearchParams({
    q: city,
    appid: apiKey,
    units: 'metric',
  });

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?${searchParam}`
  );

  return response.data;
}
