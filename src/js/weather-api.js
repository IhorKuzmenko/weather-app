import axios from 'axios';

const apiKey = '324d82384f0b6b757e9697b6aa6e9ef8';

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

export async function getWeatherByCoords(lan, lot) {
  const searchParam = new URLSearchParams({
    lan,
    lot,
    appid: apiKey,
    units: 'metric',
  });

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?${searchParam}`
  );

  return response.data;
}
