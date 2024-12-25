import React, { useState } from "react";
import "./css/PostOfficeMISCalculator.css";

const PostOfficeMISCalculator = () => {
  const [investment, setInvestment] = useState(1000); // Minimum investment amount
  const [interestRate, setInterestRate] = useState(1); // Minimum interest rate
const [monthlyIncome, setMonthlyIncome] = useState(0);

const calculateMonthlyIncome = () => {
    const monthly = (investment * interestRate) / (12 * 100);
    setMonthlyIncome(monthly.toFixed(2));
};

return (
    <div className="post-office-mis-calculator-container">
    <h2>Post Office MIS Calculator</h2>
    <div className="calculator-form">
        <div className="slider-container">
        <label>Investment Amount (₹): {investment}</label>
        <input
            type="range"
            min="1000"
            max="1500000"
            step="1000"
            value={investment}
            onChange={(e) => setInvestment(parseInt(e.target.value))}
            onMouseUp={calculateMonthlyIncome}
        />
        </div>

        <div className="slider-container">
        <label>Annual Interest Rate (%): {interestRate}</label>
        <input
            type="range"
            min="1"
            max="12"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            onMouseUp={calculateMonthlyIncome}
        />
        </div>

        <div className="result-container">
        <h3>Lock Period: 5 Years</h3>
        <p>Monthly Income: ₹{monthlyIncome}</p>
        </div>
    </div>
    </div>
);
};

export default PostOfficeMISCalculator;
