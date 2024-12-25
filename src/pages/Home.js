// src/pages/Home.js
import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
return (
    <div className="home-container">
    <div className="logo-container">
        <img src="/logo.jpg" alt="App Logo" className="app-logo" />
    </div>
    <div className="intro-text">
        <h1>Welcome to Financial Calculators</h1>
        <p>
        Explore a range of financial calculators designed to help you manage your finances effectively.
        From budgeting to loan management, we’ve got the right tools for you!
        </p>
        <button className="explore-button">Explore Calculators</button>
    </div>
    </div>
);
};

export default Home;


