import React, { useState } from 'react';
import './StockCard.styles.css';
import {
  formatCurrency,
  formatPercent,
  getScoreColor,
  getScoreLabel,
  getRSISignal,
  getTrendFromMA,
  getSentimentColor,
  getRecommendationBadge,
} from '../../utils/analysisHelpers';

const StockCard = ({ stock, rank }) => {
  const [expanded, setExpanded] = useState(false);

  const rsiSignal = getRSISignal(stock.technicals.rsi);
  const trendSignal = getTrendFromMA(
    stock.price,
    stock.technicals.sma50,
    stock.technicals.sma200
  );

  return (
    <div className="stock-card" onClick={() => setExpanded(!expanded)}>
      <div className="stock-card-header">
        <div className="stock-rank">#{rank}</div>
        <div className="stock-main-info">
          <div className="stock-title">
            <h2>{stock.symbol}</h2>
            <span className="stock-name">{stock.name}</span>
          </div>
          <div className="stock-price-info">
            <div className="stock-price">{formatCurrency(stock.price)}</div>
            <div
              className={`stock-change ${stock.priceChangePercent >= 0 ? 'positive' : 'negative'}`}
            >
              {formatPercent(stock.priceChangePercent)}
            </div>
          </div>
        </div>
        <div className="stock-score-container">
          <div
            className="stock-score"
            style={{ backgroundColor: getScoreColor(stock.scoring.totalScore) }}
          >
            {stock.scoring.totalScore}
          </div>
          <div className="score-label">{getScoreLabel(stock.scoring.totalScore)}</div>
          <div className="recommendation-badge">{getRecommendationBadge(stock.scoring.totalScore)}</div>
        </div>
      </div>

      <div className="stock-card-summary">
        <div className="sector-info">
          <span className="sector-badge">{stock.sector}</span>
          <span className="industry-text">{stock.industry}</span>
        </div>
        <div className="quick-metrics">
          <div className="metric">
            <span className="metric-label">Market Cap:</span>
            <span className="metric-value">{stock.marketCap}</span>
          </div>
          <div className="metric">
            <span className="metric-label">P/E Ratio:</span>
            <span className="metric-value">{stock.fundamentals.pe}</span>
          </div>
          <div className="metric">
            <span className="metric-label">EPS Growth:</span>
            <span className="metric-value positive">{stock.fundamentals.epsGrowth}%</span>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="stock-card-details">
          <div className="details-section">
            <h3>🏢 Business Model</h3>
            <p>{stock.businessModel}</p>
          </div>

          <div className="details-section">
            <h3>📊 Fundamental Analysis</h3>
            <div className="analysis-grid">
              <div className="analysis-item">
                <span className="analysis-label">P/E Ratio</span>
                <span className="analysis-value">{stock.fundamentals.pe}</span>
              </div>
              <div className="analysis-item">
                <span className="analysis-label">EPS</span>
                <span className="analysis-value">{formatCurrency(stock.fundamentals.eps)}</span>
              </div>
              <div className="analysis-item">
                <span className="analysis-label">EPS Growth</span>
                <span className="analysis-value positive">{stock.fundamentals.epsGrowth}%</span>
              </div>
              <div className="analysis-item">
                <span className="analysis-label">Revenue</span>
                <span className="analysis-value">{stock.fundamentals.revenue}</span>
              </div>
              <div className="analysis-item">
                <span className="analysis-label">Revenue Growth</span>
                <span className="analysis-value positive">{stock.fundamentals.revenueGrowth}%</span>
              </div>
              <div className="analysis-item">
                <span className="analysis-label">Profit Margin</span>
                <span className="analysis-value">{stock.fundamentals.profitMargin}%</span>
              </div>
              <div className="analysis-item">
                <span className="analysis-label">ROE</span>
                <span className="analysis-value">{stock.fundamentals.roe}%</span>
              </div>
              <div className="analysis-item">
                <span className="analysis-label">Debt/Equity</span>
                <span className="analysis-value">{stock.fundamentals.debt}</span>
              </div>
            </div>
            <div className="score-breakdown">
              <span>Fundamental Score:</span>
              <span className="score-value" style={{ color: getScoreColor(stock.scoring.fundamentalScore) }}>
                {stock.scoring.fundamentalScore}/100
              </span>
            </div>
          </div>

          <div className="details-section">
            <h3>📈 Technical Analysis</h3>
            <div className="analysis-grid">
              <div className="analysis-item">
                <span className="analysis-label">RSI (14)</span>
                <span className="analysis-value" style={{ color: rsiSignal.color }}>
                  {stock.technicals.rsi.toFixed(2)} - {rsiSignal.signal}
                </span>
              </div>
              <div className="analysis-item">
                <span className="analysis-label">MACD</span>
                <span className={`analysis-value ${stock.technicals.macd >= 0 ? 'positive' : 'negative'}`}>
                  {stock.technicals.macd.toFixed(2)}
                </span>
              </div>
              <div className="analysis-item">
                <span className="analysis-label">50-Day SMA</span>
                <span className="analysis-value">{formatCurrency(stock.technicals.sma50)}</span>
              </div>
              <div className="analysis-item">
                <span className="analysis-label">200-Day SMA</span>
                <span className="analysis-value">{formatCurrency(stock.technicals.sma200)}</span>
              </div>
              <div className="analysis-item">
                <span className="analysis-label">Trend</span>
                <span className="analysis-value" style={{ color: trendSignal.color }}>
                  {trendSignal.trend}
                </span>
              </div>
              <div className="analysis-item">
                <span className="analysis-label">Volume Ratio</span>
                <span className={`analysis-value ${stock.technicals.volumeRatio >= 1 ? 'positive' : 'negative'}`}>
                  {stock.technicals.volumeRatio.toFixed(2)}x
                </span>
              </div>
              <div className="analysis-item">
                <span className="analysis-label">ADX</span>
                <span className="analysis-value">{stock.technicals.adx.toFixed(2)}</span>
              </div>
              <div className="analysis-item">
                <span className="analysis-label">Stochastic</span>
                <span className="analysis-value">{stock.technicals.stochastic.toFixed(2)}</span>
              </div>
            </div>
            <div className="score-breakdown">
              <span>Technical Score:</span>
              <span className="score-value" style={{ color: getScoreColor(stock.scoring.technicalScore) }}>
                {stock.scoring.technicalScore}/100
              </span>
            </div>
          </div>

          <div className="details-section">
            <h3>📰 News & Sentiment</h3>
            <div className="sentiment-overview">
              <span>Overall Sentiment:</span>
              <span
                className="sentiment-score"
                style={{ color: getSentimentColor(stock.sentiment.avgSentiment) }}
              >
                {(stock.sentiment.avgSentiment * 100).toFixed(0)}%
              </span>
            </div>
            <div className="news-list">
              {stock.sentiment.news.map((item, index) => (
                <div key={index} className="news-item">
                  <div className="news-headline">{item.headline}</div>
                  <div className="news-meta">
                    <span className="news-date">{item.date}</span>
                    <span
                      className="news-sentiment"
                      style={{ color: getSentimentColor(item.sentiment) }}
                    >
                      Sentiment: {(item.sentiment * 100).toFixed(0)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="score-breakdown">
              <span>Sentiment Score:</span>
              <span className="score-value" style={{ color: getScoreColor(stock.scoring.sentimentScore) }}>
                {stock.scoring.sentimentScore}/100
              </span>
            </div>
          </div>

          <div className="details-section">
            <h3>🎯 Investment Factors</h3>
            <div className="factors-list">
              {stock.scoring.factors.map((factor, index) => (
                <div key={index} className="factor-item">
                  <span className="factor-name">{factor.factor}</span>
                  <span className="factor-meta">
                    <span className="factor-weight">{factor.weight} Weight</span>
                    <span className={`factor-impact ${factor.impact.toLowerCase()}`}>
                      {factor.impact}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="expand-hint">Click to collapse</div>
        </div>
      )}

      {!expanded && <div className="expand-hint">Click to see detailed analysis</div>}
    </div>
  );
};

export default StockCard;
