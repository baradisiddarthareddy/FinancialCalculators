import React, { useState } from "react";
import "./css/RDCalculator.css";

const RDCalculator = () => {
const [monthlyDeposit, setMonthlyDeposit] = useState(100);
  const [numMonths, setNumMonths] = useState(12); // Default to 12 months
  const [annualRate, setAnnualRate] = useState(1); // Default to 1% annual rate
const [results, setResults] = useState({
    maturityAmount: 0,
    totalDeposited: 0,
    totalInterest: 0,
});

const calculateRD = () => {
    if (monthlyDeposit < 100 || monthlyDeposit > 1000000) {
    alert("Monthly Deposit should be between ₹100 and ₹1,000,000");
    return;
    }

    const r = annualRate / (4 * 100); // Quarterly rate of interest
    const n = numMonths / 3; // Total quarters
    const totalDeposited = monthlyDeposit * numMonths;

    // Maturity formula: M = P * [(1 + r)^n - 1] / [1 - (1 + r)^(-1/3)]
    const numerator = Math.pow(1 + r, n) - 1;
    const denominator = 1 - Math.pow(1 + r, -1 / 3);
    const maturityAmount = monthlyDeposit * (numerator / denominator);
    const totalInterest = maturityAmount - totalDeposited;

    setResults({
    maturityAmount: maturityAmount.toFixed(2),
    totalDeposited: totalDeposited.toFixed(2),
    totalInterest: totalInterest.toFixed(2),
    });
};

return (
    <div className="rd-calculator-container">
    <h2>Recurring Deposit (RD) Calculator</h2>

    <div className="calculator-form">
        <div className="input-container">
        <label>Monthly Deposit (₹):</label>
        <input
            type="number"
            value={monthlyDeposit}
            onChange={(e) => setMonthlyDeposit(parseFloat(e.target.value))}
            onBlur={calculateRD}
        />
        </div>

        <div className="slider-container">
        <label>Number of Months: {numMonths}</label>
        <input
            type="range"
            min="6"
            max="120"
            step="1"
            value={numMonths}
            onChange={(e) => setNumMonths(parseInt(e.target.value))}
            onMouseUp={calculateRD}
        />
        </div>

        <div className="slider-container">
        <label>RD Annual Interest Rate (%): {annualRate}</label>
        <input
            type="range"
            min="1"
            max="12"
            step="0.1"
            value={annualRate}
            onChange={(e) => setAnnualRate(parseFloat(e.target.value))}
            onMouseUp={calculateRD}
        />
        </div>

        <div className="result-container">
        <h3>Results</h3>
        <p>Total Deposited Amount: ₹{results.totalDeposited}</p>
        <p>Total Interest Earned: ₹{results.totalInterest}</p>
        <p>Maturity Amount: ₹{results.maturityAmount}</p>
        </div>
    </div>
    </div>
);
};

export default RDCalculator;
