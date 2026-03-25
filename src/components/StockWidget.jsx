import React, { useEffect, useState } from 'react';
import { fetchStockData } from '../services/stockService';
import './StockWidget.css';

const StockWidget = () => {
  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadStockData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchStockData();
      setStock(data);
    } catch (err) {
      setError(err.message || 'Stock data is currently unavailable');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Add a small delay to avoid rate limiting when all widgets load simultaneously
    const timer = setTimeout(() => {
      loadStockData();
    }, 500);
    
    // Refresh every 5 minutes
    const interval = setInterval(loadStockData, 5 * 60 * 1000);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const isPositive = stock && parseFloat(stock.priceChange) >= 0;

  return (
    <div className="widget stock-widget">
      <div className="widget-header">
        <h2>📈 ACN Stock</h2>
        {!loading && !error && (
          <button onClick={loadStockData} className="refresh-btn" title="Refresh">
            🔄
          </button>
        )}
      </div>

      <div className="widget-content">
        {loading && <div className="loading">Loading stock data...</div>}
        
        {error && (
          <div className="error">
            <p>⚠️ {error}</p>
            <button onClick={loadStockData} className="retry-btn">
              Try Again
            </button>
          </div>
        )}
        
        {!loading && !error && stock && (
          <div className="stock-data">
            <div className="stock-ticker">{stock.ticker}</div>
            <div className="stock-price">${stock.currentPrice}</div>
            <div className={`stock-change ${isPositive ? 'positive' : 'negative'}`}>
              <span className="change-icon">{isPositive ? '▲' : '▼'}</span>
              <span className="change-value">
                ${Math.abs(stock.priceChange)} ({isPositive ? '+' : ''}{stock.changePercent}%)
              </span>
            </div>
            <div className="stock-details">
              <div className="stock-detail">
                <span className="detail-label">Volume:</span>
                <span className="detail-value">{stock.volume}</span>
              </div>
              <div className="stock-detail">
                <span className="detail-label">Last Updated:</span>
                <span className="detail-value">{stock.lastUpdated}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StockWidget;
