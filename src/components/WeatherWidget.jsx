import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../services/weatherService';
import './WeatherWidget.css';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [usingGeolocation, setUsingGeolocation] = useState(false);

  const loadWeather = async (loc) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeather(loc);
      setWeather(data);
    } catch (err) {
      setError(err.message || 'Weather data is currently unavailable');
    } finally {
      setLoading(false);
    }
  };

  const getUserLocation = () => {
    setLoading(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          };
          setLocation(coords);
          setUsingGeolocation(true);
        },
        (err) => {
          console.error('Geolocation error:', err);
          const defaultLoc = import.meta.env.VITE_DEFAULT_LOCATION || 'New York';
          setLocation(defaultLoc);
          setUsingGeolocation(false);
        }
      );
    } else {
      const defaultLoc = import.meta.env.VITE_DEFAULT_LOCATION || 'New York';
      setLocation(defaultLoc);
      setUsingGeolocation(false);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (location) {
      loadWeather(location);
    }
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setLocation(searchInput.trim());
      setUsingGeolocation(false);
    }
  };

  const handleUseMyLocation = () => {
    getUserLocation();
  };

  return (
    <div className="widget weather-widget">
      <div className="widget-header">
        <h2>🌤️ Weather</h2>
      </div>
      
      <form onSubmit={handleSearch} className="weather-search">
        <input
          type="text"
          placeholder="Enter city name..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="weather-input"
        />
        <button type="submit" className="weather-search-btn">Search</button>
        <button 
          type="button" 
          onClick={handleUseMyLocation} 
          className="weather-location-btn"
          title="Use my location"
        >
          📍
        </button>
      </form>

      <div className="widget-content">
        {loading && <div className="loading">Loading weather data...</div>}
        
        {error && (
          <div className="error">
            <p>⚠️ {error}</p>
          </div>
        )}
        
        {!loading && !error && weather && (
          <div className="weather-data">
            <div className="weather-location">{weather.location}</div>
            <div className="weather-main">
              {weather.icon && (
                <img
                  src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                  alt={weather.condition}
                  className="weather-icon"
                />
              )}
              <div className="weather-temp">{weather.currentTemperature}°F</div>
            </div>
            <div className="weather-condition">{weather.condition}</div>
            <div className="weather-description">{weather.description}</div>
            <div className="weather-details">
              <div className="weather-detail">
                <span className="detail-label">Humidity:</span>
                <span className="detail-value">{weather.humidity}%</span>
              </div>
              <div className="weather-detail">
                <span className="detail-label">Wind:</span>
                <span className="detail-value">{weather.windSpeed} mph</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherWidget;
