const STOCK_API_KEY = import.meta.env.VITE_STOCK_API_KEY;
const SYMBOL = 'ACN';

/**
 * Fetches ACN stock data
 * @returns {Promise<Object>} Stock data in standardized format
 */
export const fetchStockData = async () => {
  try {
    // Using Alpha Vantage API for real-time stock data
    const response = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${SYMBOL}&apikey=${STOCK_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Stock service error: ${response.status}`);
    }

    const data = await response.json();

    // Check for API error responses
    if (data['Error Message']) {
      throw new Error('Invalid stock symbol or API error');
    }

    if (data['Note']) {
      // API rate limit hit
      throw new Error('API rate limit exceeded. Please try again in a minute.');
    }

    const quote = data['Global Quote'];

    if (!quote || Object.keys(quote).length === 0) {
      throw new Error('No stock data available. Please check your API key.');
    }

    // Transform to standardized format
    const currentPrice = parseFloat(quote['05. price']);
    const change = parseFloat(quote['09. change']);
    const changePercent = parseFloat(quote['10. change percent'].replace('%', ''));

    return {
      ticker: SYMBOL,
      currentPrice: currentPrice.toFixed(2),
      priceChange: change.toFixed(2),
      changePercent: changePercent.toFixed(2),
      volume: parseInt(quote['06. volume']).toLocaleString(),
      lastUpdated: quote['07. latest trading day']
    };
  } catch (error) {
    console.error('Stock API Error:', error);
    throw error;
  }
};
