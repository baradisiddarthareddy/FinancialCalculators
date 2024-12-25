// src/pages/SignIn.js
import React, { useState } from 'react';
import './SignIn.css'; // Import the CSS file for styling

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Sign In Data:', { email, password, retypePassword });
    };

    return (
    <div className="signin-container">
        <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="input-group">
            <label htmlFor="retypePassword">Retype Password:</label>
            <input
            type="password"
            id="retypePassword"
            name="retypePassword"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
            required
            />
        </div>
        <button type="submit" className="submit-button">Sign In</button>
        </form>
    </div>
    );
};

export default SignIn;

