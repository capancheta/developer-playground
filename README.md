# 🌐 Unified Information Portal

A real-time dashboard aggregating weather data, ACN stock information, and trending tech news from Reddit. Built with React and Vite for optimal performance.

## 📋 Features

- **Real-time Weather Data**: Get current weather conditions for any city worldwide
- **ACN Stock Information**: View live stock prices, changes, and trading volume
- **Tech News from Reddit**: Stay updated with trending technology news from r/technology
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Auto-refresh**: Data automatically refreshes at regular intervals
- **Error Handling**: Graceful error handling with user-friendly messages

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- API keys for:
  - OpenWeatherMap (free tier available)
  - Alpha Vantage (free tier available)

### Installation

1. **Clone or navigate to the project directory**

```bash
cd "Confluence design"
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

4. **Configure your API keys**

Edit the `.env` file and add your API keys:

```env
# Weather API (OpenWeatherMap)
# Get your free API key at: https://openweathermap.org/api
VITE_WEATHER_API_KEY=your_actual_api_key_here

# Stock API (Alpha Vantage)
# Get your free API key at: https://www.alphavantage.co/support/#api-key
VITE_STOCK_API_KEY=your_actual_api_key_here

# Default location for weather
VITE_DEFAULT_LOCATION=New York
```

5. **Start the development server**

```bash
npm run dev
```

The app will open in your browser at `http://localhost:3000`

## 🔑 Getting API Keys

### OpenWeatherMap (Weather Data)

1. Go to https://openweathermap.org/api
2. Sign up for a free account
3. Navigate to API keys section
4. Copy your API key
5. Add it to your `.env` file as `VITE_WEATHER_API_KEY`

### Alpha Vantage (Stock Data)

1. Go to https://www.alphavantage.co/support/#api-key
2. Enter your email and claim your free API key
3. Copy the API key from the confirmation page
4. Add it to your `.env` file as `VITE_STOCK_API_KEY`

### Reddit (Tech News)

- No API key required! The app uses Reddit's public JSON API

## 📦 Project Structure

```
Confluence design/
├── src/
│   ├── components/           # React components
│   │   ├── WeatherWidget.jsx
│   │   ├── WeatherWidget.css
│   │   ├── StockWidget.jsx
│   │   ├── StockWidget.css
│   │   ├── NewsWidget.jsx
│   │   └── NewsWidget.css
│   ├── services/            # API integration services
│   │   ├── weatherService.js
│   │   ├── stockService.js
│   │   └── newsService.js
│   ├── App.jsx              # Main application component
│   ├── App.css              # Application styles
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── package.json             # Project dependencies
├── .env.example             # Environment variables template
└── README.md                # This file
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Features in Detail

### Weather Widget
- Search for any city worldwide
- Displays current temperature, conditions, humidity, and wind speed
- Beautiful weather icons from OpenWeatherMap
- Default location configurable via environment variables

### Stock Widget
- Real-time ACN stock price
- Price change indicators (positive/negative)
- Trading volume information
- Manual refresh button
- Auto-refreshes every 5 minutes

### News Widget
- Top 10 trending posts from r/technology
- Shows post score, comments, and date
- Clickable links to full articles
- Auto-refreshes every 10 minutes
- Scrollable list with custom scrollbar

## ⚙️ Technical Details

### Technologies Used
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradients and animations
- **OpenWeatherMap API** - Weather data
- **Alpha Vantage API** - Stock market data
- **Reddit JSON API** - Tech news

### Performance Considerations
- Components use React hooks for optimal performance
- Data caching with automatic refresh intervals
- Lazy loading and code splitting via Vite
- Optimized CSS with modern properties
- Error boundaries for graceful failures

## 🔒 Security

- API keys are stored in environment variables (never committed to git)
- All external links open in new tabs with security attributes
- Input validation for user-provided location data
- Error messages don't expose sensitive information

## 📱 Responsive Design

The dashboard automatically adapts to different screen sizes:
- **Desktop (1200px+)**: 2-column grid layout
- **Tablet (768px-1199px)**: Adaptive columns
- **Mobile (<768px)**: Single column stack

## 🐛 Troubleshooting

### Weather data not loading
- Verify your OpenWeatherMap API key is correct
- Check if you've activated your API key (can take a few minutes)
- Ensure the city name is spelled correctly

### Stock data not loading
- Verify your Alpha Vantage API key is correct
- Check if you've exceeded the free tier rate limit (5 API calls per minute, 500 per day)
- Wait a minute and try again if rate limited

### News not loading
- Reddit API requires no authentication but may have rate limits
- Check your internet connection
- Try refreshing after a few moments

## 📄 License

This project is created for demonstration purposes.

## 🤝 Contributing

This is a demo project based on specific requirements. Feel free to fork and modify for your own use!

## 📞 Support

For issues with the APIs:
- OpenWeatherMap: https://openweathermap.org/faq
- Alpha Vantage: https://www.alphavantage.co/support/
- Reddit API: https://www.reddit.com/dev/api/

---

Built with ❤️ using React and Vite
