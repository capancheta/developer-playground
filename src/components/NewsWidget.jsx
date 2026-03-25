import React, { useEffect, useState } from 'react';
import { fetchRedditNews } from '../services/newsService';
import './NewsWidget.css';

const NewsWidget = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchRedditNews(10);
      setNews(data);
    } catch (err) {
      setError(err.message || 'News data is currently unavailable');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNews();
    
    // Refresh every 10 minutes
    const interval = setInterval(loadNews, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="widget news-widget">
      <div className="widget-header">
        <h2>📰 Tech News from Reddit</h2>
        {!loading && !error && (
          <button onClick={loadNews} className="refresh-btn" title="Refresh">
            🔄
          </button>
        )}
      </div>

      <div className="widget-content">
        {loading && <div className="loading">Loading tech news...</div>}
        
        {error && (
          <div className="error">
            <p>⚠️ {error}</p>
            <button onClick={loadNews} className="retry-btn">
              Try Again
            </button>
          </div>
        )}
        
        {!loading && !error && news.length > 0 && (
          <div className="news-list">
            {news.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-item"
              >
                <div className="news-content">
                  <h3 className="news-title">{item.title}</h3>
                  <div className="news-meta">
                    <span className="news-score">👍 {item.score}</span>
                    <span className="news-comments">💬 {item.numComments}</span>
                    <span className="news-date">📅 {item.created}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {!loading && !error && news.length === 0 && (
          <div className="no-data">No news available at the moment</div>
        )}
      </div>
    </div>
  );
};

export default NewsWidget;
