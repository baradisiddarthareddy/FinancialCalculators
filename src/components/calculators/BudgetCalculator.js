// src/components/calculators/BudgetCalculator.js
import React, { useState } from 'react';
import './css/BudgetCalculator.css'; // Make sure the correct path is used

const BudgetCalculator = () => {
const [income, setIncome] = useState('');
const [expenses, setExpenses] = useState('');
const [savings, setSavings] = useState('');

const calculateBudget = () => {
    const savingsAmount = parseFloat(income) - parseFloat(expenses);
    setSavings(savingsAmount);
};

return (
    <div className="budget-calculator-container">
    <h2>Budget Calculator</h2>
    <div className="budget-calculator-form">
        <div className="input-container">
        <label>Income:</label>
        <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
        />
        </div>
        <div className="input-container">
        <label>Expenses:</label>
        <input
            type="number"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
        />
        </div>
        <button onClick={calculateBudget}>Calculate Savings</button>
        {savings !== '' && (
        <div className="result">
            <h3>Your Savings: ${savings}</h3>
        </div>
        )}
    </div>
    </div>
);
};

export default BudgetCalculator;
