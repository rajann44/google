import React from 'react';
import './GoogleTopBar.css';

const GoogleTopBar = () => (
  <header className="google-top-bar">
    <nav className="top-bar-left">
      <a href="#" className="top-bar-link">About</a>
      <a href="#" className="top-bar-link">Store</a>
    </nav>
    <nav className="top-bar-right">
      <a href="#" className="top-bar-link">Gmail</a>
      <a href="#" className="top-bar-link">Images</a>
      <button className="top-bar-apps" aria-label="Google apps">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g fill="#5f6368">
            <circle cx="3" cy="3" r="2"/>
            <circle cx="12" cy="3" r="2"/>
            <circle cx="21" cy="3" r="2"/>
            <circle cx="3" cy="12" r="2"/>
            <circle cx="12" cy="12" r="2"/>
            <circle cx="21" cy="12" r="2"/>
            <circle cx="3" cy="21" r="2"/>
            <circle cx="12" cy="21" r="2"/>
            <circle cx="21" cy="21" r="2"/>
          </g>
        </svg>
      </button>
      <button className="top-bar-signin">Sign in</button>
    </nav>
  </header>
);

export default GoogleTopBar; 