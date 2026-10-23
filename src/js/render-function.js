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

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return entities[char];
  });
}

function getForecastDate(date) {
  return new Date(`${date}T12:00:00`);
}

/* =========================================
   TODAY PAGE
========================================= */

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

  weatherCard.innerHTML = `
    <svg class="weather-icon" aria-hidden="true">
      <use href="${sprite}#${iconClass}"></use>
    </svg>

    <p class="weather-location">
      ${escapeHTML(city)}, ${escapeHTML(country)}
    </p>

    <div class="weather-temp-wrapper">
      <p class="weather-temp">${escapeHTML(temp)}&deg;</p>

      <ul class="temp-box">
        <li class="temp-item">
          <p class="temp-name">min</p>
          <p class="temp-value">${escapeHTML(tempMin)}&deg;</p>
        </li>

        <li class="temp-item">
          <p class="temp-name">max</p>
          <p class="temp-value">${escapeHTML(tempMax)}&deg;</p>
        </li>
      </ul>
    </div>
  `;

  // The day value is generated internally as a date with a suffix.
  const safeDay = String(day ?? '').replace(
    /^(\d{1,2})<sup>(st|nd|rd|th)<\/sup>$/,
    (_, number, suffix) => `${number}<sup>${suffix}</sup>`
  );

  dateInfo.innerHTML = `
    <ul class="datetime-wrapper">
      <li class="datetime-day">${safeDay}</li>
      <li class="datetime-weekday">${escapeHTML(weekday)}</li>
    </ul>

    <div class="datetime-container">
      <ul class="datetime-wrapper">
        <li class="datetime-month">${escapeHTML(month)}</li>
        <li class="datetime-time">${escapeHTML(time)}</li>
      </ul>

      <ul class="datetime-wrapper">
        <li>
          <svg class="datetime-icon" aria-hidden="true">
            <use href="${sprite}#icon-sunrise"></use>
          </svg>
          <p class="datetime-sunrise">${escapeHTML(sunrise)}</p>
        </li>

        <li>
          <svg class="datetime-icon" aria-hidden="true">
            <use href="${sprite}#icon-sunset"></use>
          </svg>
          <p class="datetime-sunset">${escapeHTML(sunset)}</p>
        </li>
      </ul>
    </div>
  `;

  // Keep the elements in the layout at all times.
  weatherCard.classList.add('is-loaded');
  dateInfo.classList.add('is-loaded');
}

export function clearWeatherCard() {
  if (weatherCard) weatherCard.innerHTML = '';
}

export function clearDateInfoCard() {
  if (dateInfo) dateInfo.innerHTML = '';
}

/* =========================================
   FIVE-DAY FORECAST
========================================= */

const forecastContainer = document.querySelector('.forecast-container');
const forecastCity = forecastContainer?.querySelector('.forecast-city');
const forecastFiveDays = document.querySelector('.forecast-5days');

export function setForecastCity(cityName, countryCode) {
  if (!forecastCity) return;
  forecastCity.textContent = `${cityName}, ${countryCode}`;
}

function groupForecastByDay(data) {
  const daysMap = new Map();

  for (const item of data?.list || []) {
    const date = item.dt_txt.split(' ')[0];

    if (!daysMap.has(date)) {
      daysMap.set(date, []);
    }

    daysMap.get(date).push(item);
  }

  return Array.from(daysMap.entries()).slice(0, 5);
}

export function createForecastFiveDaysCards(data) {
  if (!forecastFiveDays || !forecastContainer) return;

  const markup = groupForecastByDay(data).map(([date, items]) => {
    const firstItem = items[0];
    const dateObj = getForecastDate(date);

    const weekday = dateObj.toLocaleDateString('en-US', {
      weekday: 'long',
    });

    const month = dateObj.toLocaleDateString('en-US', {
      month: 'short',
    });

    const day = dateObj.getDate();

    const tempMin = Math.round(
      Math.min(...items.map(item => item.main.temp_min))
    );

    const tempMax = Math.round(
      Math.max(...items.map(item => item.main.temp_max))
    );

    const iconClass = iconMap[firstItem.weather[0].icon] || 'icon-sun';

    return `
      <li class="forecast-item">
        <p class="forecast-weekday">${weekday}</p>
        <p class="forecast-date">${day} ${month}</p>

        <svg class="forecast-icon" aria-hidden="true">
          <use href="${sprite}#${iconClass}"></use>
        </svg>

        <ul class="forecast-temp">
          <li>
            <p class="forecast-temp-title">min</p>
            <p class="forecast-temp-value">${tempMin}&deg;</p>
          </li>

          <li>
            <p class="forecast-temp-title">max</p>
            <p class="forecast-temp-value">${tempMax}&deg;</p>
          </li>
        </ul>

        <button
          type="button"
          class="forecast-button"
          data-date="${date}"
        >
          more info
        </button>
      </li>
    `;
  });

  forecastFiveDays.innerHTML = markup.join('');
  forecastContainer.style.display = 'block';
}

export function clearForecastFiveDaysCards() {
  if (forecastCity) forecastCity.textContent = '';
  if (forecastFiveDays) forecastFiveDays.innerHTML = '';
}

/* =========================================
   HOURLY FORECAST
========================================= */

const forecastHours = document.querySelector('.forecast-hours');

export function renderForecastHours(data) {
  if (!forecastHours) return;

  const markup = data.map(item => {
    const time = item.dt_txt.slice(11, 16);
    const temp = Math.round(item.main.temp);
    const pressure = item.main.pressure;
    const humidity = item.main.humidity;
    const windSpeed = item.wind.speed;

    const iconClass = iconMap[item.weather[0].icon] || 'icon-sun';

    return `
      <li class="forecast-hours-item">
        <ul>
          <li class="forecast-hours-time">${time}</li>

          <li>
            <svg class="forecast-hours-icon" aria-hidden="true">
              <use href="${sprite}#${iconClass}"></use>
            </svg>
          </li>

          <li class="forecast-hours-temp">${temp}&deg;</li>

          <li class="forecast-hours-container">
            <ul>
              <li class="forecast-hours-wrap">
                <svg class="forecast-hours-img" aria-hidden="true">
                  <use href="${sprite}#icon-atmosphere"></use>
                </svg>
                <p class="forecast-hours-value">
                  ${pressure} hPa
                </p>
              </li>

              <li class="forecast-hours-wrap">
                <svg class="forecast-hours-img" aria-hidden="true">
                  <use href="${sprite}#icon-humidity"></use>
                </svg>
                <p class="forecast-hours-value">
                  ${humidity}%
                </p>
              </li>

              <li class="forecast-hours-wrap">
                <svg class="forecast-hours-img" aria-hidden="true">
                  <use href="${sprite}#icon-wind"></use>
                </svg>
                <p class="forecast-hours-value">
                  ${windSpeed} m/s
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    `;
  });

  forecastHours.innerHTML = markup.join('');
  forecastHours.style.display = 'flex';

  const inner = document.querySelector('.forecast-container-inner');
  const scrollbar = document.querySelector('.scroll-bar-wrapper');

  if (inner) inner.style.display = 'block';
  if (scrollbar) scrollbar.style.display = 'block';

  initCustomScrollbar();
}

export function clearForecastHours() {
  if (!forecastHours) return;

  forecastHours.innerHTML = '';
  forecastHours.style.display = 'none';

  const scrollbar = document.querySelector('.scroll-bar');

  if (scrollbar) scrollbar.style.opacity = '0';

  initCustomScrollbar();
}

/* =========================================
   CHART.JS — LAZY LOADING
========================================= */

let chartModulePromise = null;
let chartRenderVersion = 0;

const chartInstances = new Map();

async function getChartModule() {
  if (!chartModulePromise) {
    chartModulePromise = import('chart.js/auto')
      .then(module => module.default)
      .catch(error => {
        chartModulePromise = null;
        throw error;
      });
  }

  return chartModulePromise;
}

/* =========================================
   CHART DATA
========================================= */

function getDailyAverages(forecastData) {
  const entries = groupForecastByDay(forecastData);

  function average(items, getValue) {
    return (
      items.reduce((total, item) => total + getValue(item), 0) / items.length
    );
  }

  return {
    labels: entries.map(([date]) =>
      getForecastDate(date).toLocaleDateString('en-US', {
        weekday: 'short',
      })
    ),

    temperature: entries.map(([, items]) =>
      Number(average(items, item => item.main.temp).toFixed(1))
    ),

    humidity: entries.map(([, items]) =>
      Math.round(average(items, item => item.main.humidity))
    ),

    wind: entries.map(([, items]) =>
      Number(average(items, item => item.wind.speed).toFixed(1))
    ),

    pressure: entries.map(([, items]) =>
      Math.round(average(items, item => item.main.pressure))
    ),
  };
}

/* =========================================
   CHART SETTINGS
========================================= */

const chartDefinitions = [
  {
    id: 'chart-temp',
    label: 'Temperature, °C',
    key: 'temperature',
    color: '#ff6b09',
  },
  {
    id: 'chart-humidity',
    label: 'Humidity, %',
    key: 'humidity',
    color: '#6585ff',
  },
  {
    id: 'chart-wind',
    label: 'Wind speed, m/s',
    key: 'wind',
    color: '#ffbc42',
  },
  {
    id: 'chart-pressure',
    label: 'Pressure, hPa',
    key: 'pressure',
    color: '#42c77a',
  },
];

function createChartOptions() {
  return {
    responsive: true,
    maintainAspectRatio: false,
    resizeDelay: 100,
    animation: false,

    layout: {
      padding: {
        top: 8,
        right: 8,
        bottom: 8,
        left: 4,
      },
    },

    interaction: {
      intersect: false,
      mode: 'index',
    },

    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'start',
        labels: {
          color: '#f1f5f9',
          font: {
            size: 12,
            weight: '500',
          },
          boxWidth: 10,
          boxHeight: 10,
          padding: 12,
        },
      },

      tooltip: {
        enabled: true,
      },
    },

    scales: {
      x: {
        ticks: {
          color: '#e2e8f0',
          font: { size: 11 },
          maxRotation: 0,
          minRotation: 0,
          autoSkip: true,
        },

        grid: {
          color: 'rgba(255, 255, 255, 0.12)',
        },

        border: {
          display: false,
        },
      },

      y: {
        ticks: {
          color: '#e2e8f0',
          font: { size: 11 },
          maxTicksLimit: 5,
          padding: 4,
        },

        grid: {
          color: 'rgba(255, 255, 255, 0.12)',
        },

        border: {
          display: false,
        },
      },
    },
  };
}

/* =========================================
   CHART WRAPPERS
========================================= */

function ensureChartWrappers() {
  const canvases = chartDefinitions.map(({ id }) =>
    document.getElementById(id)
  );

  if (canvases.some(canvas => !canvas)) {
    return null;
  }

  for (const canvas of canvases) {
    if (canvas.parentElement?.classList.contains('chart-wrapper')) {
      continue;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'chart-wrapper';

    canvas.parentNode.insertBefore(wrapper, canvas);
    wrapper.appendChild(canvas);

    canvas.removeAttribute('width');
    canvas.removeAttribute('height');
  }

  return canvases;
}

/* =========================================
   RENDER CHARTS
========================================= */

export async function renderForecastChart(forecastData) {
  if (!Array.isArray(forecastData?.list) || !forecastData.list.length) {
    return;
  }

  const canvases = ensureChartWrappers();

  if (!canvases) return;

  const version = ++chartRenderVersion;
  const Chart = await getChartModule();

  if (version !== chartRenderVersion) return;

  const daily = getDailyAverages(forecastData);

  chartDefinitions.forEach(({ id, label, key, color }, index) => {
    const canvas = canvases[index];

    chartInstances.get(id)?.destroy();

    const chart = new Chart(canvas, {
      type: 'line',

      data: {
        labels: daily.labels,

        datasets: [
          {
            label,
            data: daily[key],
            borderColor: color,
            backgroundColor: color,
            borderWidth: 2.5,
            pointRadius: 3,
            pointHoverRadius: 5,
            tension: 0.35,
            fill: false,
          },
        ],
      },

      options: createChartOptions(),
    });

    chartInstances.set(id, chart);
  });
}
