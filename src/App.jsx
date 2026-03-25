import React from 'react';
import WeatherWidget from './components/WeatherWidget';
import StockWidget from './components/StockWidget';
import NewsWidget from './components/NewsWidget';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🌐 Unified Information Portal</h1>
        <p>Your real-time dashboard for weather, stocks, and tech news</p>
      </header>

      <main className="dashboard">
        <WeatherWidget />
        <StockWidget />
        <NewsWidget />
      </main>

      <footer className="app-footer">
        <p>Data sources: OpenWeatherMap • Alpha Vantage • Reddit</p>
      </footer>
    </div>
  );
}

export default App;
