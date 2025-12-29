import sprite from '../img/icons.svg?url';
import { initCustomScrollbar } from './scroll-function';
const weatherCard = document.querySelector('.weather-card');
const dateInfo = document.querySelector('.datetime-card');

const iconMap = {
  '01d': 'icon-sun',
  '01n': 'icon-sun',
  '02d': 'icon-cloudy_and_sun',
  '02n': 'icon-cloudy_and_sun',
  '03d': 'icon-cloudy',
  '03n': 'icon-cloudy',
  '04d': 'icon-cloudy',
  '04n': 'icon-cloudy',
  '09d': 'icon-weather',
  '09n': 'icon-weather',
  '10d': 'icon-weather',
  '10n': 'icon-weather',
  '11d': 'icon-weather',
  '11n': 'icon-weather',
  '13d': 'icon-snow',
  '13n': 'icon-snow',
  '50d': 'icon-cloudy',
  '50n': 'icon-cloudy',
};

export function createWeatherCard(data) {
  if (!weatherCard || !dateInfo) return;

  const {
    city,
    country,
    temp,
    tempMin,
    tempMax,
    icon,
    day,
    weekday,
    month,
    time,
    sunrise,
    sunset,
  } = data;

  const iconClass = iconMap[icon] || 'icon-sun';

  const weatherMarkup = `
                <svg class="weather-icon">
                    <use href="${sprite}#${iconClass}"></use>
                </svg>
                <p class="weather-location">${city}, ${country}</p>
                <div class="weather-temp-wrapper">
                  <p class="weather-temp">${temp}&deg;</p>
                  <ul class="temp-box">
                    <li class="temp-item">
                      <p class="temp-name">min</p>
                      <p class="temp-value">${tempMin}&deg;</p>
                    </li>
                    <li class="temp-item">
                      <p class="temp-name">max</p>
                      <p class="temp-value">${tempMax}&deg;</p>
                    </li>
                  </ul>
                </div>
    `;

  const dateMarkup = `
            <ul class="datetime-wrapper">
              <li class="datetime-day">${day}</li>
              <li class="datetime-weekday">${weekday}</li>
            </ul>
            <div class="datetime-container">
            <ul class="datetime-wrapper">
              <li class="datetime-month">${month}</li>
              <li class="datetime-time">${time}</li>
            </ul>
              <ul class="datetime-wrapper">
              <li>
                <svg class="datetime-icon">
                  <use href="${sprite}#icon-sunrise"></use>
                </svg>
                <p class="datetime-sunrise">${sunrise}</p>
              </li>
              <li>
                <svg class="datetime-icon">
                  <use href="${sprite}#icon-sunset"></use>
                </svg>
                <p class="datetime-sunset">${sunset}</p>
              </li>
            </ul>
            </div>
  `;

  weatherCard.innerHTML = weatherMarkup;
  weatherCard.style.display = 'block';

  dateInfo.innerHTML = dateMarkup;
  dateInfo.style.display = 'block';
}

export function clearWeatherCard() {
  weatherCard.innerHTML = '';
}

export function clearDateInfoCard() {
  dateInfo.innerHTML = '';
}

//FIVE DAYS

const forecastContainer = document.querySelector('.forecast-container');
const forecastCity = forecastContainer
  ? forecastContainer.querySelector('.forecast-city')
  : null;
const forecastFiveDays = document.querySelector('.forecast-5days');

export function setForecastCity(cityName, countryCode) {
  if (!forecastCity) return;
  forecastCity.textContent = `${cityName}, ${countryCode}`;
}

export function createForecastFiveDaysCards(data) {
  if (!forecastFiveDays || !forecastContainer) return;
  const daysMap = new Map();

  data.list.forEach(item => {
    const date = item.dt_txt.split(' ')[0];

    if (!daysMap.has(date)) {
      daysMap.set(date, []);
    }

    daysMap.get(date).push(item);
  });

  const firstFiveDays = Array.from(daysMap.entries()).slice(0, 5);

  const forecastMarkup = [];

  firstFiveDays.forEach(([date, dayDataArray]) => {
    const firstItem = dayDataArray[0];
    const { dt_txt, main, weather } = firstItem;

    const dateObj = new Date(dt_txt);
    const day = dateObj.getDate();
    const weekday = dateObj.toLocaleDateString('en-US', {
      weekday: 'long',
    });
    const month = dateObj.toLocaleDateString('en-US', { month: 'short' });

    const tempMin = Math.round(
      Math.min(...dayDataArray.map(i => i.main.temp_min))
    );
    const tempMax = Math.round(
      Math.max(...dayDataArray.map(i => i.main.temp_max))
    );

    const iconClass = iconMap[weather[0].icon] || 'icon-sun';

    forecastMarkup.push(`
          <li class="forecast-item">
            <p class="forecast-weekday">${weekday}</p>
            <p class="forecast-date">${day} ${month}</p>
            <svg class="forecast-icon">
              <use href="${sprite}#${iconClass}"></use>
            </svg>
            <ul class="forecast-temp">
              <li>
                <p class="forecast-temp-title">min</p>
                <p class="forecast-temp-value">${tempMin}&deg</p>
              </li>
              <li>
                <p class="forecast-temp-title">max</p>
                <p class="forecast-temp-value">${tempMax}&deg</p>
              </li>
            </ul>
            <button type="button" class="forecast-button" data-date="${date}">more info</button>
            </li>
  `);
  });

  forecastFiveDays.innerHTML = forecastMarkup.join('');
  forecastContainer.style.display = 'block';
}

export function clearForecastFiveDaysCards() {
  if (!forecastCity || !forecastFiveDays) return;
  forecastCity.textContent = '';
  forecastFiveDays.innerHTML = '';
}

const forecastHours = document.querySelector('.forecast-hours');

export function renderForecastHours(data) {
  if (!forecastHours) return;

  const hoursMarkup = data.map(item => {
    const dateObj = new Date(item.dt_txt);
    const time = dateObj.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const temp = Math.round(item.main.temp);
    const pressure = item.main.pressure;
    const humidity = item.main.humidity;
    const windSpeed = item.wind.speed;
    const icon = item.weather[0].icon;

    const iconClass = iconMap[icon] || 'icon-sun';

    return `
           <li class="forecast-hours-item">
                <ul>
                  <li class="forecast-hours-time">${time}</li>
                  <li>
                    <svg class="forecast-hours-icon">
                      <use href="${sprite}#${iconClass}"></use>
                    </svg>
                  </li>
                  <li class="forecast-hours-temp">${temp}&deg</li>
                  <div class="forecast-hours-container">
                  <li class="forecast-hours-wrap">
                    <svg class="forecast-hours-img">
                      <use href="${sprite}#icon-atmosphere"></use>
                    </svg>
                    <p class="forecast-hours-value">${pressure} mm</p>
                  </li>
                  <li class="forecast-hours-wrap">
                    <svg class="forecast-hours-img">
                      <use href="${sprite}#icon-humidity"></use>
                    </svg>
                    <p class="forecast-hours-value">${humidity}%</p>
                  </li>
                    <li class="forecast-hours-wrap">
                    <svg class="forecast-hours-img">
                      <use href="${sprite}#icon-wind"></use>
                    </svg>
                    <p class="forecast-hours-value">${windSpeed} m/s</p>
                  </li>
                  </div>
                </ul>
              </li>
    `;
  });

  forecastHours.innerHTML = hoursMarkup.join('');
  forecastHours.style.display = 'flex';

  initCustomScrollbar();
}

export function clearForecastHours() {
  if (!forecastHours) return;

  forecastHours.innerHTML = '';
  forecastHours.style.display = 'none';

  const scrollBar = document.querySelector('.scroll-bar');
  if (scrollBar) scrollBar.style.opacity = '0';

  initCustomScrollbar();
}
