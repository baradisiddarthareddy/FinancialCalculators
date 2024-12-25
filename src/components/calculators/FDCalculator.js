import React, { useState } from "react";
import "./css/FDCalculator.css";

const FDCalculator = () => {
  const [principal, setPrincipal] = useState(100000); // Default ₹1,00,000
  const [annualRate, setAnnualRate] = useState(24); // Default 24% per annum
  const [timePeriod, setTimePeriod] = useState(12); // Default 12 months
const [breakdown, setBreakdown] = useState([]);

const calculateFD = () => {
    const monthlyRate = annualRate / (12 * 100); // Monthly interest rate
    let currentBalance = principal;
    const detailedBreakdown = [];

    for (let month = 1; month <= timePeriod; month++) {
      const interest = currentBalance * monthlyRate; // Interest for the month
      const newBalance = currentBalance + interest; // Update balance
    detailedBreakdown.push({
        month,
        startingBalance: currentBalance.toFixed(2),
        interestEarned: interest.toFixed(2),
        endingBalance: newBalance.toFixed(2),
    });
      currentBalance = newBalance; // Update for the next month
    }

    const maturityAmount = currentBalance.toFixed(2);
    const totalInterest = (currentBalance - principal).toFixed(2);
    setBreakdown({
    detailedBreakdown,
    maturityAmount,
    totalInterest,
    });
};

return (
    <div className="fd-calculator-container">
    <h2>Fixed Deposit (FD) Calculator</h2>

    <div className="calculator-form">
        <div className="input-container">
        <label>Principal Amount (₹):</label>
        <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(parseInt(e.target.value))}
            onBlur={calculateFD}
            min="1000"
        />
        </div>

        <div className="slider-container">
        <label>Annual Interest Rate (%): {annualRate}</label>
        <input
            type="range"
            min="1"
            max="30"
            value={annualRate}
            onChange={(e) => setAnnualRate(parseFloat(e.target.value))}
            onMouseUp={calculateFD}
        />
        </div>

        <div className="slider-container">
        <label>Time Period (Months): {timePeriod}</label>
        <input
            type="range"
            min="1"
            max="60"
            value={timePeriod}
            onChange={(e) => setTimePeriod(parseInt(e.target.value))}
            onMouseUp={calculateFD}
        />
        </div>

        {breakdown.maturityAmount && (
        <div className="result-container">
            <h3>Results</h3>
            <p>Maturity Amount: ₹{breakdown.maturityAmount}</p>
            <p>Total Interest Earned: ₹{breakdown.totalInterest}</p>

            <h3>Month-by-Month Breakdown</h3>
            <table>
            <thead>
                <tr>
                <th>Month</th>
                <th>Starting Balance (₹)</th>
                <th>Interest Earned (₹)</th>
                <th>Ending Balance (₹)</th>
                </tr>
            </thead>
            <tbody>
                {breakdown.detailedBreakdown.map((row) => (
                <tr key={row.month}>
                    <td>{row.month}</td>
                    <td>{row.startingBalance}</td>
                    <td>{row.interestEarned}</td>
                    <td>{row.endingBalance}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        )}
    </div>
    </div>
);
};

export default FDCalculator;
