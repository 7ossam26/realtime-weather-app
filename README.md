# Weather App

A modern weather application built with React that displays current weather information for Cairo. The app supports both English and Arabic languages with proper RTL support.

## Features

- Current temperature display
- Min/Max temperature information
- Weather condition description and icon
- Date and time display
- Language toggle (English/Arabic) with RTL support
- Responsive design with Material UI components
- Environment variables for API configuration

## Project Structure

```
src/
├── components/       # Reusable UI components
├── store/            # Redux store configuration
│   └── slices/       # Redux slices for state management
├── styles/           # CSS and styling files
├── utils/            # Utility functions and configurations
└── assets/           # Static assets like images
```

## Technologies Used

- React 18
- Redux Toolkit for state management
- Material-UI for components and styling
- i18next for internationalization
- Moment.js for date formatting
- Axios for API requests
- Vite for build tooling
- Environment variables for configuration

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your OpenWeatherMap API key
   ```
   VITE_APP_WEATHER_API_KEY=your_api_key_here
   VITE_APP_WEATHER_BASE_URL=https://api.openweathermap.org/data/2.5
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

## Building for Production

```bash
npm run build
```

This will create a `dist` folder with the production-ready files.
