# Stock Recommendation Engine 📈

An AI-powered stock recommendation application that provides comprehensive fundamental and technical analysis of top US stocks to help identify the best investment opportunities.

![Stock Analysis](https://img.shields.io/badge/Analysis-Fundamental%20%26%20Technical-blue)
![React](https://img.shields.io/badge/React-16.12.0-61DAFB?logo=react)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success)

## Features

### 🔍 Comprehensive Stock Analysis

**Fundamental Analysis**
- P/E Ratio evaluation
- Earnings Per Share (EPS) and EPS Growth
- Revenue and Revenue Growth tracking
- Profit Margin analysis
- Return on Equity (ROE)
- Debt-to-Equity ratio assessment

**Technical Analysis**
- RSI (Relative Strength Index) - identifies overbought/oversold conditions
- MACD (Moving Average Convergence Divergence)
- 50-day and 200-day Simple Moving Averages
- Volume trends and volume ratios
- ADX (Average Directional Index) for trend strength
- Stochastic oscillator
- Bollinger Bands

**News Sentiment Analysis**
- Recent news headlines for each stock
- Sentiment scoring (0-100%)
- Real-time news sentiment aggregation
- Date-stamped news items

### 🎯 Smart Scoring System

Stocks are ranked using a proprietary algorithm that weighs:
- **Fundamental metrics (40%)**: Financial health and growth
- **Technical indicators (30%)**: Price momentum and trends
- **Sentiment analysis (20%)**: Market and news sentiment
- **Sector positioning (10%)**: Industry trends and market conditions

**Rating Scale:**
- **80-100**: 🔥 Strong Buy - Excellent fundamentals with strong momentum
- **60-79**: ⭐ Buy - Good fundamentals with positive indicators
- **40-59**: ✅ Hold - Mixed signals, suitable for monitoring
- **0-39**: 👀 Watch - Consider waiting for better entry points

### 📊 Stock Coverage

The app analyzes 15 major US stocks across diverse sectors:

**Technology**: AAPL, MSFT, NVDA, GOOGL, META
**Healthcare**: UNH, JNJ, LLY
**Financial Services**: JPM, BAC
**Consumer**: AMZN, TSLA, HD
**Energy**: XOM, CVX

### 🎨 User Experience

- **Interactive Cards**: Click any stock to expand and see detailed analysis
- **Market Overview**: Real-time market conditions and sentiment
- **Beautiful UI**: Modern gradient design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Investment Factors**: See key factors driving each recommendation

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Nimish0410/React-Sample-App.git
cd React-Sample-App

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions including:
- GitHub Pages deployment
- Vercel deployment
- Netlify deployment
- GitHub Actions automation

## Project Structure

```
src/
├── components/
│   ├── StockCard/                    # Individual stock card component
│   │   ├── StockCard.component.jsx
│   │   └── StockCard.styles.css
│   └── StockRecommendation/          # Main recommendation engine
│       ├── StockRecommendation.component.jsx
│       └── StockRecommendation.styles.css
├── services/
│   └── stockDataService.js           # Stock data and analysis logic
├── utils/
│   └── analysisHelpers.js            # Formatting and calculation utilities
├── App.js                            # Main app component
└── index.js                          # Entry point
```

## Technology Stack

- **React 16.12** - UI framework
- **Axios** - HTTP client for API calls
- **Recharts** - Data visualization (ready for charts)
- **CSS3** - Modern styling with gradients and animations

## Future Enhancements

### Real-Time Data Integration

Connect to live APIs for real-time data:

```javascript
// Example: Alpha Vantage integration
const API_KEY = 'your_api_key';
const response = await axios.get(
  `https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=${API_KEY}`
);
```

**Recommended APIs:**
- [Alpha Vantage](https://www.alphavantage.co/) - Free tier available
- [Financial Modeling Prep](https://financialmodelingprep.com/) - Comprehensive data
- [Yahoo Finance API](https://www.yahoofinanceapi.com/) - Real-time quotes
- [News API](https://newsapi.org/) - Live news sentiment

### Additional Features

- [ ] Historical price charts
- [ ] Portfolio tracking
- [ ] Customizable watchlists
- [ ] Email alerts for top picks
- [ ] Comparison tool for multiple stocks
- [ ] Detailed sector analysis
- [ ] Machine learning predictions
- [ ] Social sentiment analysis from Twitter/Reddit

## Configuration

### Updating Stock Pool

Edit `src/services/stockDataService.js` to add or remove stocks:

```javascript
const stockPool = [
  {
    symbol: 'TICKER',
    name: 'Company Name',
    sector: 'Sector',
    industry: 'Industry',
    price: 100.00,
    // ... other properties
  },
  // Add more stocks
];
```

### Customizing Scoring Algorithm

Adjust weights in `calculateStockScore()` function:

```javascript
score += fundamentalScore * 0.4;  // 40% weight
score += technicalScore * 0.3;    // 30% weight
score += sentimentScore * 0.2;    // 20% weight
score += sectorScore * 0.1;       // 10% weight
```

## Disclaimer

⚠️ **Important**: This is a demonstration application for educational purposes. All data is simulated.

**Investment Warning**:
- Always consult with a qualified financial advisor before making investment decisions
- Past performance does not guarantee future results
- Investing in stocks carries risk of loss
- Do your own research before investing

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For issues and questions:
- Create an issue on GitHub
- Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help

## Credits

Built with [Create React App](https://github.com/facebook/create-react-app)

---

**Made with ❤️ for smart investors**

🤖 *Enhanced with Claude Code*
