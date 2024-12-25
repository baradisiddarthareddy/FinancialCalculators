// SSYCalculator.js
import React, { useState } from "react";
import "./css/SSYCalculator.css";

const SSYCalculator = () => {
const [interestRate, setInterestRate] = useState(8.2);
const [yearlyInvestment, setYearlyInvestment] = useState(50000);
const [startYear, setStartYear] = useState(2024);
const [error, setError] = useState("");
const [result, setResult] = useState(null);

const calculateSSY = () => {
    if (yearlyInvestment < 250 || yearlyInvestment > 150000) {
    setError("Yearly investment must be between ₹250 and ₹1,50,000.");
    return;
    }
    setError("");

    const maturityYear = startYear + 21;
    const totalInvestment = yearlyInvestment * 15;
    let maturityAmount = 0;

    for (let i = 0; i < 15; i++) {
    const years = 21 - i;
      maturityAmount += yearlyInvestment * Math.pow(1 + interestRate / 100, years);
    }

    const interestEarned = maturityAmount - totalInvestment;

    setResult({ maturityYear, totalInvestment, maturityAmount, interestEarned });
};

return (
    <div className="ssy-calculator">
    <h1>Sukanya Samriddhi Yojana (SSY) Calculator</h1>
    <div className="input-group">
        <label htmlFor="interestRate">Latest SSY Interest Rate (%):</label>
        <input
        type="number"
        id="interestRate"
        value={interestRate}
        onChange={(e) => setInterestRate(parseFloat(e.target.value))}
        />
    </div>
    <div className="input-group">
        <label htmlFor="yearlyInvestment">Yearly Investment (₹):</label>
        <input
        type="number"
        id="yearlyInvestment"
        value={yearlyInvestment}
        onChange={(e) => setYearlyInvestment(parseFloat(e.target.value))}
        />
        {error && <p className="error">{error}</p>}
    </div>
    <div className="input-group">
        <label htmlFor="startYear">Start Year:</label>
        <input
        type="range"
        id="startYear"
        min="2015"
        max="2030"
        value={startYear}
        onChange={(e) => setStartYear(parseInt(e.target.value))}
        />
        <span>{startYear}</span>
    </div>
    <button onClick={calculateSSY}>Calculate</button>

    {result && (
        <div className="result">
        <h2>Results</h2>
        <p><strong>Maturity Year:</strong> {result.maturityYear}</p>
        <p><strong>Total Investment:</strong> ₹{result.totalInvestment.toLocaleString()}</p>
        <p><strong>Maturity Amount:</strong> ₹{result.maturityAmount.toLocaleString()}</p>
        <p><strong>Interest Earned:</strong> ₹{result.interestEarned.toLocaleString()}</p>
        </div>
    )}
    </div>
);
};

export default SSYCalculator;