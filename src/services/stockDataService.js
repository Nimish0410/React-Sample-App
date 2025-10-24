// Mock stock data service with comprehensive fundamental and technical analysis
// In production, this would integrate with real APIs like Alpha Vantage, Financial Modeling Prep, or Yahoo Finance

const stockPool = [
  // Tech Sector
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    sector: 'Technology',
    industry: 'Consumer Electronics',
    price: 178.50,
    priceChange: 2.5,
    priceChangePercent: 1.42,
    marketCap: '2.8T',
    volume: 52100000,
    avgVolume: 50000000,
    businessModel: 'Hardware and services ecosystem with strong brand loyalty and recurring revenue from services',
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    sector: 'Technology',
    industry: 'Software - Infrastructure',
    price: 378.25,
    priceChange: 5.75,
    priceChangePercent: 1.54,
    marketCap: '2.8T',
    volume: 20500000,
    avgVolume: 22000000,
    businessModel: 'Cloud computing leader with Azure, enterprise software, and AI integration across products',
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    sector: 'Technology',
    industry: 'Semiconductors',
    price: 485.60,
    priceChange: 12.30,
    priceChangePercent: 2.60,
    marketCap: '1.2T',
    volume: 45000000,
    avgVolume: 42000000,
    businessModel: 'AI chip dominance with data center GPUs and expanding AI software ecosystem',
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    sector: 'Technology',
    industry: 'Internet Content & Information',
    price: 142.80,
    priceChange: 1.90,
    priceChangePercent: 1.35,
    marketCap: '1.8T',
    volume: 28000000,
    avgVolume: 25000000,
    businessModel: 'Search advertising dominance with growing cloud and AI capabilities',
  },
  {
    symbol: 'META',
    name: 'Meta Platforms Inc.',
    sector: 'Technology',
    industry: 'Internet Content & Information',
    price: 485.20,
    priceChange: 8.50,
    priceChangePercent: 1.78,
    marketCap: '1.2T',
    volume: 15000000,
    avgVolume: 16000000,
    businessModel: 'Social media advertising with significant investment in metaverse and AI',
  },

  // Healthcare
  {
    symbol: 'UNH',
    name: 'UnitedHealth Group',
    sector: 'Healthcare',
    industry: 'Healthcare Plans',
    price: 512.30,
    priceChange: 4.20,
    priceChangePercent: 0.83,
    marketCap: '478B',
    volume: 2800000,
    avgVolume: 3000000,
    businessModel: 'Integrated healthcare with insurance and Optum health services division',
  },
  {
    symbol: 'JNJ',
    name: 'Johnson & Johnson',
    sector: 'Healthcare',
    industry: 'Drug Manufacturers',
    price: 158.40,
    priceChange: 0.80,
    priceChangePercent: 0.51,
    marketCap: '382B',
    volume: 5500000,
    avgVolume: 6000000,
    businessModel: 'Diversified healthcare with pharmaceuticals, medical devices, and consumer health',
  },
  {
    symbol: 'LLY',
    name: 'Eli Lilly and Company',
    sector: 'Healthcare',
    industry: 'Drug Manufacturers',
    price: 785.90,
    priceChange: 15.40,
    priceChangePercent: 2.00,
    marketCap: '748B',
    volume: 2400000,
    avgVolume: 2500000,
    businessModel: 'Pharmaceutical leader in diabetes, oncology, and weight loss medications',
  },

  // Financial
  {
    symbol: 'JPM',
    name: 'JPMorgan Chase & Co.',
    sector: 'Financial Services',
    industry: 'Banks - Diversified',
    price: 198.50,
    priceChange: 2.10,
    priceChangePercent: 1.07,
    marketCap: '575B',
    volume: 8500000,
    avgVolume: 9000000,
    businessModel: 'Diversified banking with strong investment banking and consumer banking divisions',
  },
  {
    symbol: 'BAC',
    name: 'Bank of America Corp',
    sector: 'Financial Services',
    industry: 'Banks - Diversified',
    price: 39.85,
    priceChange: 0.45,
    priceChangePercent: 1.14,
    marketCap: '308B',
    volume: 35000000,
    avgVolume: 38000000,
    businessModel: 'Leading consumer bank with strong deposit base and wealth management',
  },

  // Consumer
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    sector: 'Consumer Cyclical',
    industry: 'Internet Retail',
    price: 178.25,
    priceChange: 3.40,
    priceChangePercent: 1.94,
    marketCap: '1.8T',
    volume: 45000000,
    avgVolume: 48000000,
    businessModel: 'E-commerce leader with dominant AWS cloud business and growing advertising',
  },
  {
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    sector: 'Consumer Cyclical',
    industry: 'Auto Manufacturers',
    price: 242.80,
    priceChange: 8.60,
    priceChangePercent: 3.67,
    marketCap: '772B',
    volume: 98000000,
    avgVolume: 95000000,
    businessModel: 'EV market leader with energy storage and autonomous driving technology',
  },
  {
    symbol: 'HD',
    name: 'Home Depot Inc.',
    sector: 'Consumer Cyclical',
    industry: 'Home Improvement Retail',
    price: 365.40,
    priceChange: 2.80,
    priceChangePercent: 0.77,
    marketCap: '370B',
    volume: 2800000,
    avgVolume: 3000000,
    businessModel: 'Leading home improvement retailer with strong professional contractor business',
  },

  // Energy
  {
    symbol: 'XOM',
    name: 'Exxon Mobil Corporation',
    sector: 'Energy',
    industry: 'Oil & Gas Integrated',
    price: 112.40,
    priceChange: 1.85,
    priceChangePercent: 1.67,
    marketCap: '455B',
    volume: 18000000,
    avgVolume: 20000000,
    businessModel: 'Integrated energy giant with focus on oil, gas, and growing chemical business',
  },
  {
    symbol: 'CVX',
    name: 'Chevron Corporation',
    sector: 'Energy',
    industry: 'Oil & Gas Integrated',
    price: 158.90,
    priceChange: 2.20,
    priceChangePercent: 1.40,
    marketCap: '295B',
    volume: 6500000,
    avgVolume: 7000000,
    businessModel: 'Integrated energy with strong upstream assets and growing renewable investments',
  },
];

// Generate fundamental analysis metrics
const generateFundamentalMetrics = (stock) => {
  const baseMetrics = {
    'AAPL': { pe: 29.5, eps: 6.05, epsGrowth: 15.2, revenue: '383B', revenueGrowth: 9.5, profitMargin: 25.3, roe: 147.2, debt: 0.85 },
    'MSFT': { pe: 35.8, eps: 10.56, epsGrowth: 18.5, revenue: '212B', revenueGrowth: 13.2, profitMargin: 36.7, roe: 43.5, debt: 0.42 },
    'NVDA': { pe: 68.5, eps: 7.09, epsGrowth: 128.5, revenue: '60.9B', revenueGrowth: 125.8, profitMargin: 48.2, roe: 98.5, debt: 0.28 },
    'GOOGL': { pe: 24.2, eps: 5.90, epsGrowth: 12.8, revenue: '307B', revenueGrowth: 8.7, profitMargin: 23.5, roe: 28.8, debt: 0.12 },
    'META': { pe: 27.5, eps: 17.65, epsGrowth: 73.2, revenue: '134.9B', revenueGrowth: 23.2, profitMargin: 35.8, roe: 32.4, debt: 0.08 },
    'UNH': { pe: 25.8, eps: 19.86, epsGrowth: 14.5, revenue: '371.6B', revenueGrowth: 14.8, profitMargin: 6.2, roe: 27.5, debt: 0.52 },
    'JNJ': { pe: 24.5, eps: 6.47, epsGrowth: 8.2, revenue: '85.2B', revenueGrowth: 6.5, profitMargin: 18.5, roe: 22.8, debt: 0.45 },
    'LLY': { pe: 78.5, eps: 10.01, epsGrowth: 95.5, revenue: '34.1B', revenueGrowth: 28.5, profitMargin: 21.2, roe: 42.8, debt: 0.68 },
    'JPM': { pe: 11.2, eps: 17.72, epsGrowth: 22.5, revenue: '158.1B', revenueGrowth: 18.2, profitMargin: 28.5, roe: 15.8, debt: 1.25 },
    'BAC': { pe: 11.8, eps: 3.38, epsGrowth: 18.7, revenue: '113.1B', revenueGrowth: 12.5, profitMargin: 26.8, roe: 11.2, debt: 1.18 },
    'AMZN': { pe: 42.5, eps: 4.19, epsGrowth: 85.2, revenue: '574.8B', revenueGrowth: 12.2, profitMargin: 7.8, roe: 18.5, debt: 0.58 },
    'TSLA': { pe: 75.5, eps: 3.21, epsGrowth: 42.5, revenue: '96.8B', revenueGrowth: 18.8, profitMargin: 12.8, roe: 24.5, debt: 0.18 },
    'HD': { pe: 22.5, eps: 16.24, epsGrowth: 11.2, revenue: '152.7B', revenueGrowth: 6.8, profitMargin: 10.8, roe: 285.5, debt: 2.85 },
    'XOM': { pe: 14.2, eps: 7.92, epsGrowth: 125.5, revenue: '344.6B', revenueGrowth: 10.2, profitMargin: 10.5, roe: 18.2, debt: 0.22 },
    'CVX': { pe: 13.8, eps: 11.52, epsGrowth: 95.8, revenue: '200.9B', revenueGrowth: 8.5, profitMargin: 12.2, roe: 14.5, debt: 0.18 },
  };

  return baseMetrics[stock.symbol] || { pe: 20, eps: 5, epsGrowth: 10, revenue: 'N/A', revenueGrowth: 8, profitMargin: 15, roe: 18, debt: 0.5 };
};

// Generate technical analysis indicators
const generateTechnicalIndicators = (stock) => {
  const random = (min, max) => Math.random() * (max - min) + min;

  return {
    rsi: random(30, 70),
    macd: random(-2, 2),
    sma50: stock.price * random(0.95, 1.05),
    sma200: stock.price * random(0.90, 1.10),
    volumeRatio: stock.volume / stock.avgVolume,
    bollingerUpper: stock.price * 1.05,
    bollingerLower: stock.price * 0.95,
    adx: random(15, 45),
    stochastic: random(20, 80),
  };
};

// Generate news sentiment and recent events
const generateNewsSentiment = (stock) => {
  const newsTemplates = {
    'AAPL': [
      { headline: 'Apple unveils new AI features across product lineup', sentiment: 0.85, date: '2 days ago' },
      { headline: 'iPhone sales exceed expectations in emerging markets', sentiment: 0.75, date: '5 days ago' },
      { headline: 'Services revenue reaches all-time high', sentiment: 0.80, date: '1 week ago' },
    ],
    'MSFT': [
      { headline: 'Azure cloud revenue grows 30% year-over-year', sentiment: 0.90, date: '1 day ago' },
      { headline: 'Microsoft expands AI partnerships with major enterprises', sentiment: 0.85, date: '4 days ago' },
      { headline: 'Office 365 sees record corporate adoption', sentiment: 0.75, date: '1 week ago' },
    ],
    'NVDA': [
      { headline: 'NVIDIA announces next-gen AI chips with 50% performance boost', sentiment: 0.95, date: '1 day ago' },
      { headline: 'Data center demand reaches record levels', sentiment: 0.90, date: '3 days ago' },
      { headline: 'Major tech companies increase NVIDIA chip orders', sentiment: 0.88, date: '1 week ago' },
    ],
    'GOOGL': [
      { headline: 'Google Cloud gains market share against competitors', sentiment: 0.78, date: '2 days ago' },
      { headline: 'New AI search features drive user engagement', sentiment: 0.82, date: '5 days ago' },
      { headline: 'Advertising revenue shows strong recovery', sentiment: 0.75, date: '1 week ago' },
    ],
    'META': [
      { headline: 'Meta reports strong quarterly earnings beat', sentiment: 0.88, date: '1 day ago' },
      { headline: 'AI investments driving significant efficiency gains', sentiment: 0.85, date: '4 days ago' },
      { headline: 'Instagram Reels gaining ground on TikTok', sentiment: 0.80, date: '6 days ago' },
    ],
    'default': [
      { headline: 'Company reports solid quarterly earnings', sentiment: 0.70, date: '3 days ago' },
      { headline: 'Analysts raise price targets on strong fundamentals', sentiment: 0.75, date: '1 week ago' },
      { headline: 'Sector shows positive momentum heading into next quarter', sentiment: 0.68, date: '2 weeks ago' },
    ],
  };

  const news = newsTemplates[stock.symbol] || newsTemplates['default'];
  const avgSentiment = news.reduce((acc, item) => acc + item.sentiment, 0) / news.length;

  return {
    news,
    avgSentiment,
    sentimentScore: avgSentiment * 100,
  };
};

// Calculate comprehensive stock score
const calculateStockScore = (stock, fundamentals, technicals, sentiment) => {
  let score = 0;
  const factors = [];

  // Fundamental Analysis Score (40%)
  let fundamentalScore = 0;

  // P/E Ratio (lower is better, but not too low)
  if (fundamentals.pe > 0 && fundamentals.pe < 25) {
    fundamentalScore += 25;
    factors.push({ factor: 'Attractive P/E Ratio', weight: 'High', impact: 'Positive' });
  } else if (fundamentals.pe >= 25 && fundamentals.pe < 40) {
    fundamentalScore += 15;
  }

  // EPS Growth (higher is better)
  if (fundamentals.epsGrowth > 50) {
    fundamentalScore += 25;
    factors.push({ factor: 'Exceptional EPS Growth', weight: 'High', impact: 'Positive' });
  } else if (fundamentals.epsGrowth > 20) {
    fundamentalScore += 20;
    factors.push({ factor: 'Strong EPS Growth', weight: 'Medium', impact: 'Positive' });
  } else if (fundamentals.epsGrowth > 10) {
    fundamentalScore += 10;
  }

  // Revenue Growth
  if (fundamentals.revenueGrowth > 20) {
    fundamentalScore += 20;
    factors.push({ factor: 'High Revenue Growth', weight: 'High', impact: 'Positive' });
  } else if (fundamentals.revenueGrowth > 10) {
    fundamentalScore += 12;
  }

  // Profit Margin
  if (fundamentals.profitMargin > 30) {
    fundamentalScore += 15;
    factors.push({ factor: 'Excellent Profit Margins', weight: 'Medium', impact: 'Positive' });
  } else if (fundamentals.profitMargin > 15) {
    fundamentalScore += 10;
  }

  // ROE
  if (fundamentals.roe > 25) {
    fundamentalScore += 15;
    factors.push({ factor: 'Strong Return on Equity', weight: 'Medium', impact: 'Positive' });
  } else if (fundamentals.roe > 15) {
    fundamentalScore += 8;
  }

  score += fundamentalScore * 0.4;

  // Technical Analysis Score (30%)
  let technicalScore = 0;

  // RSI (optimal range 30-70, best 40-60)
  if (technicals.rsi >= 40 && technicals.rsi <= 60) {
    technicalScore += 25;
    factors.push({ factor: 'Healthy RSI Level', weight: 'Medium', impact: 'Positive' });
  } else if (technicals.rsi >= 30 && technicals.rsi <= 70) {
    technicalScore += 15;
  }

  // Price vs Moving Averages
  if (stock.price > technicals.sma50 && stock.price > technicals.sma200) {
    technicalScore += 25;
    factors.push({ factor: 'Above Key Moving Averages', weight: 'High', impact: 'Positive' });
  } else if (stock.price > technicals.sma50) {
    technicalScore += 15;
  }

  // Volume
  if (technicals.volumeRatio > 1.1) {
    technicalScore += 20;
    factors.push({ factor: 'Strong Volume Momentum', weight: 'Medium', impact: 'Positive' });
  } else if (technicals.volumeRatio > 1.0) {
    technicalScore += 10;
  }

  // MACD
  if (technicals.macd > 0) {
    technicalScore += 15;
  }

  // ADX (trend strength)
  if (technicals.adx > 25) {
    technicalScore += 15;
    factors.push({ factor: 'Strong Trend Detected', weight: 'Low', impact: 'Positive' });
  }

  score += technicalScore * 0.3;

  // Sentiment Analysis Score (20%)
  const sentimentScore = sentiment.avgSentiment * 100;
  score += sentimentScore * 0.2;

  if (sentiment.avgSentiment > 0.8) {
    factors.push({ factor: 'Very Positive News Sentiment', weight: 'High', impact: 'Positive' });
  } else if (sentiment.avgSentiment > 0.7) {
    factors.push({ factor: 'Positive News Sentiment', weight: 'Medium', impact: 'Positive' });
  }

  // Sector and Market Position (10%)
  let sectorScore = 0;
  const growthSectors = ['Technology', 'Healthcare', 'Consumer Cyclical'];
  if (growthSectors.includes(stock.sector)) {
    sectorScore += 50;
    factors.push({ factor: 'Growth Sector Positioning', weight: 'Medium', impact: 'Positive' });
  } else {
    sectorScore += 30;
  }

  score += sectorScore * 0.1;

  return {
    totalScore: Math.min(Math.round(score), 100),
    fundamentalScore: Math.round(fundamentalScore),
    technicalScore: Math.round(technicalScore),
    sentimentScore: Math.round(sentimentScore),
    sectorScore: Math.round(sectorScore),
    factors,
  };
};

// Main function to get top stock recommendations
export const getTopStockRecommendations = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  const stocksWithAnalysis = stockPool.map(stock => {
    const fundamentals = generateFundamentalMetrics(stock);
    const technicals = generateTechnicalIndicators(stock);
    const sentiment = generateNewsSentiment(stock);
    const scoring = calculateStockScore(stock, fundamentals, technicals, sentiment);

    return {
      ...stock,
      fundamentals,
      technicals,
      sentiment,
      scoring,
    };
  });

  // Sort by total score and return top 5
  const topStocks = stocksWithAnalysis
    .sort((a, b) => b.scoring.totalScore - a.scoring.totalScore)
    .slice(0, 5);

  return {
    recommendations: topStocks,
    analysisDate: new Date().toISOString(),
    marketConditions: {
      trend: 'Bullish',
      volatility: 'Moderate',
      sentiment: 'Positive',
    },
  };
};

// Get detailed analysis for a single stock
export const getStockDetails = async (symbol) => {
  await new Promise(resolve => setTimeout(resolve, 500));

  const stock = stockPool.find(s => s.symbol === symbol);
  if (!stock) return null;

  const fundamentals = generateFundamentalMetrics(stock);
  const technicals = generateTechnicalIndicators(stock);
  const sentiment = generateNewsSentiment(stock);
  const scoring = calculateStockScore(stock, fundamentals, technicals, sentiment);

  return {
    ...stock,
    fundamentals,
    technicals,
    sentiment,
    scoring,
  };
};
