import React, { useState } from 'react';
import './css/SimpleInterestCalculator.css';

const SimpleInterestCalculator = () => {
const [principal, setPrincipal] = useState('');
const [rate, setRate] = useState('');
const [time, setTime] = useState('');
const [simpleInterest, setSimpleInterest] = useState('');
const [totalAmount, setTotalAmount] = useState('');
const [yearlyDetails, setYearlyDetails] = useState([]);

const calculateSimpleInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);

    if (!p || !r || !t) return;

    const interest = (p * r * t) / 100;
    setSimpleInterest(interest);
    setTotalAmount(p + interest);

    const yearlyData = [];
    for (let year = 1; year <= t; year++) {
      const interestForYear = (p * r * year) / 100;
    const totalAmountForYear = p + interestForYear;
    yearlyData.push({ year, interestForYear, totalAmountForYear });
    }
    setYearlyDetails(yearlyData);
};

return (
    <div className="calculator-container">
    <h2>Simple Interest Calculator</h2>
    <div className="input-container">
        <label>Principal (P):</label>
        <input
        type="number"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        />
    </div>
    <div className="input-container">
        <label>Rate of Interest (R) (%) :</label>
        <input
        type="number"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        />
    </div>
    <div className="input-container">
        <label>Time (T) (in years):</label>
        <input
        type="number"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        />
    </div>
    <button onClick={calculateSimpleInterest}>Calculate Simple Interest</button>
    
    {simpleInterest !== '' && (
        <div className="result-container">
        <h3>Simple Interest: ₹{simpleInterest}</h3>
        <h3>Total Amount: ₹{totalAmount}</h3>
        
        <h4>Yearly Breakdown:</h4>
        <table>
            <thead>
            <tr>
                <th>Year</th>
                <th>Interest Earned (₹)</th>
                <th>Total Amount (₹)</th>
            </tr>
            </thead>
            <tbody>
            {yearlyDetails.map((yearData) => (
                <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{yearData.interestForYear}</td>
                <td>{yearData.totalAmountForYear}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    )}
    </div>
);
};

export default SimpleInterestCalculator;
