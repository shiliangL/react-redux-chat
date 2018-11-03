import React, { Component } from 'react';
import './index.scss';

class LoadingPage extends Component {
  render() {
    return (
      <div id="loading-screen" className="container">
        <div className="cube">
          <div className="sides">
            <div className="top"></div>
            <div className="right"></div>
            <div className="bottom"></div>
            <div className="left"></div>
            <div className="front"></div>
            <div className="back"></div>
          </div>
        </div>
        <div className="text">loading...</div>
      </div>
    );
  }
}

export default LoadingPage;
