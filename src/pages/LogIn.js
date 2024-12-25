// src/pages/LogIn.js
import React, { useState } from 'react';
import './LogIn.css'; // Import the CSS file for styling

const LogIn = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login Data:', { username, password });
};

return (
    <div className="login-container">
    <form className="login-form" onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
        />
        </div>
        <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        </div>
        <button type="submit" className="submit-button">Log In</button>

        <div className="links">
        <a href="/signin">New User? Sign Up</a>
        <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
        </div>
    </form>
    </div>
);
};

export default LogIn;

