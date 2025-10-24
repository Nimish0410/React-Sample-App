import React, { Component } from 'react';
import './App.css';
import StockRecommendation from './components/StockRecommendation/StockRecommendation.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StockRecommendation />
      </div>
    );
  }
}

export default App;
