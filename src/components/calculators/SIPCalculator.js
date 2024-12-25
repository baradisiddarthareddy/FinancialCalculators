import React, { useState } from "react";
import "./css/SIPCalculator.css";

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000); // Default ₹5000
  const [investmentPeriod, setInvestmentPeriod] = useState(5); // Default 5 years
  const [annualRate, setAnnualRate] = useState(12); // Default 12%
const [summary, setSummary] = useState([]);

const calculateSIP = () => {
    const monthlyRate = annualRate / (12 * 100); // Convert annual rate to monthly rate
    const totalMonths = investmentPeriod * 12; // Convert years to months
    const totalInvested = monthlyInvestment * totalMonths;

    // Calculate Future Value using SIP formula
    const maturityAmount =
      (monthlyInvestment *
        ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
        (1 + monthlyRate)).toFixed(2);

    const estimatedReturns = (maturityAmount - totalInvested).toFixed(2);

    // Generate Year-by-Year Summary
    const yearlySummary = [];
    for (let year = 1; year <= investmentPeriod; year++) {
      const months = year * 12;
    const yearlyFV =
        monthlyInvestment *
        ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate);
    yearlySummary.push({
        year,
        futureValue: yearlyFV.toFixed(2),
    });
    }

    setSummary({
    totalInvested: totalInvested.toFixed(2),
    estimatedReturns,
    maturityAmount,
    yearlySummary,
    });
};

return (
    <div className="sip-calculator-container">
    <h2>SIP Calculator</h2>

    <div className="calculator-form">
        <div className="input-container">
        <label>Monthly Investment (₹):</label>
        <input
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(parseInt(e.target.value))}
            onBlur={calculateSIP}
            min="100"
        />
        </div>

        <div className="slider-container">
        <label>Investment Period (Years): {investmentPeriod}</label>
        <input
            type="range"
            min="1"
            max="30"
            value={investmentPeriod}
            onChange={(e) => setInvestmentPeriod(parseInt(e.target.value))}
            onMouseUp={calculateSIP}
        />
        </div>

        <div className="slider-container">
        <label>Annual Rate of Return (%): {annualRate}</label>
        <input
            type="range"
            min="1"
            max="20"
            value={annualRate}
            onChange={(e) => setAnnualRate(parseFloat(e.target.value))}
            onMouseUp={calculateSIP}
        />
        </div>

        {summary.maturityAmount && (
        <div className="result-container">
            <h3>Results</h3>
            <p>Total Invested Amount: ₹{summary.totalInvested}</p>
            <p>Estimated Returns: ₹{summary.estimatedReturns}</p>
            <p>Maturity Amount: ₹{summary.maturityAmount}</p>

            <h3>Year-by-Year Summary</h3>
            <table>
            <thead>
                <tr>
                <th>Year</th>
                <th>Future Value (₹)</th>
                </tr>
            </thead>
            <tbody>
                {summary.yearlySummary.map((yearData) => (
                <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{yearData.futureValue}</td>
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

export default SIPCalculator;
