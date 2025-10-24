// Helper functions for stock analysis

export const formatNumber = (num) => {
  if (num >= 1000000000000) {
    return (num / 1000000000000).toFixed(1) + 'T';
  }
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + 'B';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  return num.toLocaleString();
};

export const formatCurrency = (num) => {
  return '$' + num.toFixed(2);
};

export const formatPercent = (num) => {
  const sign = num >= 0 ? '+' : '';
  return sign + num.toFixed(2) + '%';
};

export const getScoreColor = (score) => {
  if (score >= 80) return '#10b981'; // Green
  if (score >= 60) return '#3b82f6'; // Blue
  if (score >= 40) return '#f59e0b'; // Orange
  return '#ef4444'; // Red
};

export const getScoreLabel = (score) => {
  if (score >= 80) return 'Strong Buy';
  if (score >= 60) return 'Buy';
  if (score >= 40) return 'Hold';
  return 'Watch';
};

export const getSentimentColor = (sentiment) => {
  if (sentiment >= 0.75) return '#10b981';
  if (sentiment >= 0.5) return '#3b82f6';
  if (sentiment >= 0.3) return '#f59e0b';
  return '#ef4444';
};

export const getRSISignal = (rsi) => {
  if (rsi < 30) return { signal: 'Oversold', color: '#10b981' };
  if (rsi > 70) return { signal: 'Overbought', color: '#ef4444' };
  return { signal: 'Neutral', color: '#3b82f6' };
};

export const getTrendFromMA = (price, sma50, sma200) => {
  if (price > sma50 && price > sma200) {
    return { trend: 'Strong Uptrend', color: '#10b981' };
  }
  if (price > sma50) {
    return { trend: 'Uptrend', color: '#3b82f6' };
  }
  if (price < sma200) {
    return { trend: 'Downtrend', color: '#ef4444' };
  }
  return { trend: 'Sideways', color: '#f59e0b' };
};

export const getRecommendationBadge = (score) => {
  if (score >= 80) return '🔥 Hot Pick';
  if (score >= 70) return '⭐ Top Pick';
  if (score >= 60) return '✅ Good Pick';
  return '👀 Watch';
};
