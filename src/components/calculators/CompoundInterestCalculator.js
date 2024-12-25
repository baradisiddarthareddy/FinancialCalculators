import React, { useState } from "react";
import "./css/CompoundInterestCalculator.css";

const CompoundInterestCalculator = () => {
const [principal, setPrincipal] = useState("");
const [rate, setRate] = useState("");
const [time, setTime] = useState("");
  const [frequency, setFrequency] = useState("1"); // Default to annually
const [totalAmount, setTotalAmount] = useState(null);
const [compoundInterest, setCompoundInterest] = useState(null);

const calculateCompoundInterest = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate);
    const T = parseFloat(time);
    const n = parseInt(frequency);

    if (!P || !R || !T || !n) {
    alert("Please provide valid inputs.");
    return;
    }

    // Formula: A = P * (1 + R / (n * 100))^(n * T)
    const A = P * Math.pow(1 + R / (n * 100), n * T);
    const CI = A - P;

    setTotalAmount(A.toFixed(2));
    setCompoundInterest(CI.toFixed(2));
};

return (
    <div className="compound-interest-calculator-container">
    <h2>Compound Interest Calculator</h2>
    <div className="calculator-form">
        <label>Principal Amount (₹):</label>
        <input
        type="number"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        />

        <label>Annual Rate of Interest (%):</label>
        <input
        type="number"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        />

        <label>Time Period (Years):</label>
        <input
        type="number"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        />

        <label>Compounding Frequency:</label>
        <select
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
        >
        <option value="1">Annually</option>
        <option value="2">Semi-Annually</option>
        <option value="4">Quarterly</option>
        <option value="12">Monthly</option>
        </select>

        <button onClick={calculateCompoundInterest}>Calculate</button>
    </div>

    {totalAmount && compoundInterest && (
        <div className="results">
        <h3>Results:</h3>
        <p>Total Amount: ₹{totalAmount}</p>
        <p>Compound Interest: ₹{compoundInterest}</p>
        </div>
    )}
    </div>
);
};

export default CompoundInterestCalculator;
