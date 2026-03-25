const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const DEFAULT_LOCATION = import.meta.env.VITE_DEFAULT_LOCATION || 'New York';

/**
 * Fetches current weather data for a given location
 * @param {string|Object} location - City name or {lat, lon} coordinates
 * @returns {Promise<Object>} Weather data in standardized format
 */
export const fetchWeather = async (location = DEFAULT_LOCATION) => {
  try {
    let url;
    // Check if location is coordinates object or city name
    if (typeof location === 'object' && location.lat && location.lon) {
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=imperial&appid=${WEATHER_API_KEY}`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&units=imperial&appid=${WEATHER_API_KEY}`;
    }
    
    // Using OpenWeatherMap API
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Invalid API key. Please check your weather API configuration.');
      }
      if (response.status === 404) {
        throw new Error('Location not found. Please try a different city.');
      }
      throw new Error(`Weather service error: ${response.status}`);
    }

    const data = await response.json();

    // Transform to standardized format
    return {
      currentTemperature: Math.round(data.main.temp),
      condition: data.weather[0].main,
      description: data.weather[0].description,
      location: data.name,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed)
    };
  } catch (error) {
    console.error('Weather API Error:', error);
    throw error;
  }
};
