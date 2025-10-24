import React, { Component } from 'react';
import './StockRecommendation.styles.css';
import StockCard from '../StockCard/StockCard.component';
import { getTopStockRecommendations } from '../../services/stockDataService';

class StockRecommendation extends Component {
  constructor() {
    super();
    this.state = {
      recommendations: [],
      loading: true,
      error: null,
      analysisDate: null,
      marketConditions: null,
    };
  }

  componentDidMount() {
    this.fetchRecommendations();
  }

  fetchRecommendations = async () => {
    try {
      this.setState({ loading: true, error: null });
      const data = await getTopStockRecommendations();
      this.setState({
        recommendations: data.recommendations,
        analysisDate: data.analysisDate,
        marketConditions: data.marketConditions,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error: 'Failed to fetch stock recommendations. Please try again.',
        loading: false,
      });
    }
  };

  render() {
    const { recommendations, loading, error, marketConditions } = this.state;

    if (loading) {
      return (
        <div className="stock-recommendation-container">
          <div className="loading-container">
            <div className="loader"></div>
            <h2>Analyzing Top US Stocks...</h2>
            <p>Running fundamental and technical analysis</p>
            <div className="loading-steps">
              <div className="loading-step">Evaluating financial metrics</div>
              <div className="loading-step">Analyzing technical indicators</div>
              <div className="loading-step">Processing news sentiment</div>
              <div className="loading-step">Calculating investment scores</div>
            </div>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="stock-recommendation-container">
          <div className="error-container">
            <h2>Error</h2>
            <p>{error}</p>
            <button onClick={this.fetchRecommendations} className="refresh-button">
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="stock-recommendation-container">
        <header className="app-header">
          <h1>📈 Stock Recommendation Engine</h1>
          <p className="app-subtitle">
            AI-Powered Fundamental & Technical Analysis for Top US Stocks
          </p>
        </header>

        {marketConditions && (
          <div className="market-overview">
            <h2>Market Overview</h2>
            <div className="market-stats">
              <div className="market-stat">
                <span className="stat-label">Market Trend</span>
                <span className={`stat-value ${marketConditions.trend.toLowerCase()}`}>
                  {marketConditions.trend}
                </span>
              </div>
              <div className="market-stat">
                <span className="stat-label">Volatility</span>
                <span className="stat-value">{marketConditions.volatility}</span>
              </div>
              <div className="market-stat">
                <span className="stat-label">Overall Sentiment</span>
                <span className={`stat-value ${marketConditions.sentiment.toLowerCase()}`}>
                  {marketConditions.sentiment}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="recommendations-section">
          <div className="section-header">
            <h2>Top 5 Stock Picks</h2>
            <button onClick={this.fetchRecommendations} className="refresh-button">
              Refresh Analysis
            </button>
          </div>

          <div className="analysis-info">
            <div className="info-card">
              <h3>📊 Our Analysis Includes:</h3>
              <ul>
                <li>
                  <strong>Fundamental Analysis:</strong> P/E ratio, EPS growth, revenue growth,
                  profit margins, ROE, and debt levels
                </li>
                <li>
                  <strong>Technical Analysis:</strong> RSI, MACD, moving averages, volume trends,
                  and momentum indicators
                </li>
                <li>
                  <strong>News Sentiment:</strong> Recent news analysis and market sentiment scoring
                </li>
                <li>
                  <strong>Sector Analysis:</strong> Industry positioning and growth sector
                  evaluation
                </li>
              </ul>
            </div>

            <div className="info-card">
              <h3>🎯 How We Score:</h3>
              <ul>
                <li>
                  <strong>80-100:</strong> Strong Buy - Excellent fundamentals with strong technical
                  momentum
                </li>
                <li>
                  <strong>60-79:</strong> Buy - Good fundamentals with positive indicators
                </li>
                <li>
                  <strong>40-59:</strong> Hold - Mixed signals, suitable for monitoring
                </li>
                <li>
                  <strong>0-39:</strong> Watch - Consider waiting for better entry points
                </li>
              </ul>
            </div>
          </div>

          <div className="recommendations-list">
            {recommendations.map((stock, index) => (
              <StockCard key={stock.symbol} stock={stock} rank={index + 1} />
            ))}
          </div>
        </div>

        <footer className="app-footer">
          <p>
            <strong>Disclaimer:</strong> This is a demonstration application for educational
            purposes. All data is simulated. Always consult with a qualified financial advisor
            before making investment decisions. Past performance does not guarantee future results.
          </p>
          <p className="footer-note">
            For real-time data integration, connect to APIs like Alpha Vantage, Financial Modeling
            Prep, or Yahoo Finance.
          </p>
        </footer>
      </div>
    );
  }
}

export default StockRecommendation;
