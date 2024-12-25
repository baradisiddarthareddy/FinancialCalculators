// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
const [selectedCalculator, setSelectedCalculator] = useState("");

const handleCalculatorChange = (event) => {
    setSelectedCalculator(event.target.value);
};

return (
    <nav className="navbar">
    <div className="navbar-logo">
        <Link to="/">Financial Calculator</Link>
    </div>
    <div className="navbar-links">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        </ul>
    </div>
    <div className="navbar-dropdown">
        <select onChange={handleCalculatorChange} value={selectedCalculator}>
        <option value="">Select a Calculator</option>
        <option value="budget">Budget Calculator</option>
        <option value="simple-interest">Simple Interest Calculator</option>
        <option value="gst-calculator">GSTCalculator</option>
        <option value="compound-interest-calculator">Compound Interest Calculator</option>
        <option value="post-office-mis-calculator">PostOffice MIS Calculator</option>
        <option value="rd-calculator">RD Calculator</option>
        <option value="sip-calculator">SIP Calculator</option>
        <option value="fd-calculator">FD Calculator</option>
        <option value="ssy-calculator">SSY Calculator</option>
        <option value="foreclosure-calculator">ForeClosure Calculator</option>
        </select>
        {selectedCalculator && (
        <div className="calculator-link">
            <Link to={`/${selectedCalculator}`}>Go to {selectedCalculator} Calculator</Link>
        </div>
        )}
    </div>
    </nav>
);
};

export default Navbar;
