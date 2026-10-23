# Weather App ☀️

A responsive weather forecast application built with **HTML, CSS, and
JavaScript**. The app provides current weather conditions, a detailed 5-day
forecast, hourly weather information, and interactive charts using real-time
data from the OpenWeather API.

## 🔗 Live Demo

- **Live Website:**
  [Weather App](https://ihorkuzmenko.github.io/weather-app/index.html)
- **GitHub Repository:**
  [Weather App on GitHub](https://github.com/IhorKuzmenko/weather-app)

## 🚀 Features

- **Current Weather:** Displays current temperature, minimum and maximum
  temperatures, weather conditions, and location.
- **5-Day Forecast:** Shows daily weather forecasts with temperature ranges and
  weather icons.
- **Hourly Forecast:** Provides detailed weather information, including
  temperature, humidity, atmospheric pressure, and wind speed.
- **Interactive Charts:** Visualizes temperature, humidity, wind speed, and
  atmospheric pressure using Chart.js.
- **City Search:** Allows users to search for weather information by city name.
- **Local Time:** Displays the current date, local time, sunrise, and sunset
  times for the selected location.
- **Responsive Design:** Optimized for mobile, tablet, and desktop devices.
- **Weather Icons:** Displays icons corresponding to different weather
  conditions.
- **Error Handling:** Provides notifications when a city cannot be found or
  weather data cannot be loaded.
- **Performance Optimization:** Includes optimized background images,
  lazy-loaded charts, and layout shift prevention.

## 🛠️ Technologies Used

| Technology        | Purpose                                    |
| ----------------- | ------------------------------------------ |
| HTML5             | Semantic page structure                    |
| CSS3              | Styling, responsive layout, and animations |
| JavaScript (ES6+) | Application logic and DOM manipulation     |
| Vite              | Development server and production bundling |
| Axios             | HTTP requests                              |
| OpenWeather API   | Weather and forecast data                  |
| Chart.js          | Interactive weather charts                 |
| iziToast          | User notifications                         |
| Git & GitHub      | Version control                            |
| GitHub Pages      | Application deployment                     |

## 📱 Responsive Design

The application is designed to work across different screen sizes:

- **Mobile:** 320px and above
- **Tablet:** 768px and above
- **Desktop:** 1280px and above

The interface adapts to different devices while maintaining usability and visual
consistency.

## 📊 Weather Charts

The application includes four interactive charts:

1. Temperature (°C)
2. Humidity (%)
3. Wind speed (m/s)
4. Atmospheric pressure (hPa)

Charts are loaded only when requested to reduce the initial JavaScript bundle
size and improve performance.

## ⚙️ Installation and Setup

### Prerequisites

- Node.js
- npm
- OpenWeather API key

### 1. Clone the repository

```bash
git clone https://github.com/IhorKuzmenko/weather-app.git
```

### 2. Navigate to the project directory

```bash
cd weather-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the project root:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

You can obtain an API key from [OpenWeather](https://openweathermap.org/api).

**Important:** Environment files containing API keys should not be committed to
Git.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL displayed in the terminal.

### 6. Build for production

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

## 📂 Project Structure

```text
weather-app/
├── .github/
│   └── workflows/
├── src/
│   ├── css/
│   │   ├── base.css
│   │   ├── reset.css
│   │   ├── header.css
│   │   ├── home.css
│   │   ├── five-days.css
│   │   └── styles.css
│   ├── img/
│   ├── js/
│   │   ├── weather-api.js
│   │   ├── render-function.js
│   │   └── scroll-function.js
│   ├── index.html
│   ├── five-days.html
│   └── main.js
├── .env.local
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## 🌐 API

This project uses the [OpenWeather API](https://openweathermap.org/api) to
retrieve weather data.

API endpoints:

- `/weather` — Current weather conditions
- `/forecast` — 5-day weather forecast with 3-hour intervals

Weather data is requested in metric units.

**Note:** Vite exposes variables prefixed with `VITE_` to client-side
JavaScript. The API key is therefore included in the built application and
should not be treated as a server-side secret.

## 👨‍💻 Author

**Ihor Kuzmenko**

- GitHub: [IhorKuzmenko](https://github.com/IhorKuzmenko)
- Portfolio projects:
  [GitHub Repositories](https://github.com/IhorKuzmenko?tab=repositories)

## 📄 License

This project is intended for educational and portfolio purposes.
