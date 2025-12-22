import sprite from '../img/icons.svg?url';

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
