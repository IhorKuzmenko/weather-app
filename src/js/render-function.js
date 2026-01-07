import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
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

  const forecastContainerInner = document.querySelector(
    '.forecast-container-inner'
  );
  const scrollBarWrapper = document.querySelector('.scroll-bar-wrapper');
  if (forecastContainerInner) forecastContainerInner.style.display = 'block';
  if (scrollBarWrapper) scrollBarWrapper.style.display = 'block';

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

const forecastChart = document.querySelector('.forecast-chart');

export function renderForecastChart(forecastData) {
  if (!forecastChart || !forecastData) return;

  const daysMap = new Map();

  forecastData.list.forEach(item => {
    const date = item.dt_txt.split(' ')[0];
    if (!daysMap.has(date)) daysMap.set(date, []);
    daysMap.get(date).push(item);
  });

  const firstFiveDays = Array.from(daysMap.entries()).slice(0, 5);

  const labels = firstFiveDays.map(([date]) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { weekday: 'short' });
  });

  const avgTemps = firstFiveDays.map(([_, dayData]) => {
    const temps = dayData.map(i => i.main.temp);
    return Math.round(temps.reduce((a, b) => a + b) / temps.length);
  });

  const avgHumidity = firstFiveDays.map(([_, dayData]) => {
    const hum = dayData.map(i => i.main.humidity);
    return Math.round(hum.reduce((a, b) => a + b) / hum.length);
  });

  const avgWindSpeed = firstFiveDays.map(([_, dayData]) => {
    const winds = dayData.map(i => i.wind.speed);
    return (winds.reduce((a, b) => a + b) / winds.length).toFixed(1);
  });

  const avgPressure = firstFiveDays.map(([_, dayData]) => {
    const press = dayData.map(i => i.main.pressure);
    return Math.round(press.reduce((a, b) => a + b) / press.length);
  });

  if (forecastChart.chartInstance) {
    forecastChart.chartInstance.destroy();
  }

  forecastChart.chartInstance = new Chart(forecastChart, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Temperature, C°',
          data: avgTemps,
          borderColor: '#ff6b09',
          backgroundColor: 'rgba(255, 107, 9, 0.1)',
          borderWidth: 3,
          pointBackgroundColor: '#ff6b09',
          pointRadius: 5,
          tension: 0.4,
          yAxisID: 'y-temp',
        },
        {
          label: 'Humidity, %',
          data: avgHumidity,
          borderColor: '#007bff',
          backgroundColor: 'rgba(0, 123, 255, 0.1)',
          borderWidth: 3,
          pointBackgroundColor: '#007bff',
          pointRadius: 5,
          tension: 0.4,
          yAxisID: 'y-percent',
        },
        {
          label: 'Wind Speed, m/s',
          data: avgWindSpeed,
          borderColor: '#00e396',
          backgroundColor: 'rgba(0, 227, 150, 0.1)',
          borderWidth: 3,
          pointBackgroundColor: '#00e396',
          pointRadius: 5,
          tension: 0.4,
          yAxisID: 'y-speed',
        },
        {
          label: 'Atmosphere Pressure, mm',
          data: avgPressure,
          borderColor: '#feb019',
          backgroundColor: 'rgba(254, 176, 25, 0.1)',
          borderWidth: 3,
          pointBackgroundColor: '#feb019',
          pointRadius: 5,
          tension: 0.4,
          yAxisID: 'y-pressure',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          align: 'start',
          labels: {
            color: '#ffffff',
            font: { size: 14, family: 'Lato' },
            padding: 20,
            usePointStyle: true,
            pointStyle: 'line',
          },
        },
        tooltip: {
          backgroundColor: 'rgba(16, 33, 54, 0.95)',
          titleColor: '#ff6b09',
          bodyColor: '#ffffff',
          cornerRadius: 12,
        },
      },
      scales: {
        x: {
          ticks: { color: '#ffffff', font: { size: 14 } },
          grid: { display: false },
          border: { display: false },
        },
        'y-temp': {
          type: 'linear',
          position: 'left',
          title: { display: false },
          ticks: {
            color: '#ff6b09',
            callback: value => value + '°',
          },
          grid: { display: false },
        },
        'y-percent': {
          type: 'linear',
          position: 'right',
          min: 0,
          max: 100,
          ticks: {
            color: '#007bff',
            callback: value => value + '%',
          },
          grid: { display: false },
        },
        'y-speed': {
          type: 'linear',
          position: 'right',
          display: false,
        },
        'y-pressure': {
          type: 'linear',
          position: 'right',
          display: false,
        },
      },
    },
  });
}
