import React, { useState } from "react";
import "./css/ForeClosureCalculator.css";

const ForeClosureCalculator = () => {
const [loanAmount, setLoanAmount] = useState(100000);
const [tenure, setTenure] = useState(24);
const [interestRate, setInterestRate] = useState(24);
const [foreclosureChargeRate, setForeclosureChargeRate] = useState(2);
const [foreclosureMonth, setForeclosureMonth] = useState(13);

const calculateEMI = (P, R, n) => {
    const monthlyRate = R / 100 / 12;
    return (P * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
};

const calculateForeclosure = () => {
    const monthlyRate = interestRate / 100 / 12;
    const emi = calculateEMI(loanAmount, interestRate, tenure);
    let outstandingPrincipal = loanAmount;

    for (let month = 1; month <= foreclosureMonth; month++) {
      const interest = outstandingPrincipal * monthlyRate;
    const principalComponent = emi - interest;
    outstandingPrincipal -= principalComponent;
    }

    const foreclosureCharge = (outstandingPrincipal * foreclosureChargeRate) / 100;
    const foreclosureAmount = outstandingPrincipal + foreclosureCharge;

    const totalPayment = emi * tenure;
    return {
    emi: emi.toFixed(2),
    totalPayment: totalPayment.toFixed(2),
    outstandingPrincipal: outstandingPrincipal.toFixed(2),
    foreclosureAmount: foreclosureAmount.toFixed(2),
    };
};

const { emi, totalPayment, outstandingPrincipal, foreclosureAmount } = calculateForeclosure();

return (
    <div className="foreclosure-calculator">
    <h2>Loan Foreclosure Calculator</h2>
    <div className="input-container">
        <label>Loan Amount: ₹{loanAmount}</label>
        <input
        type="range"
        min="10000"
        max="1000000"
        step="1000"
        value={loanAmount}
        onChange={(e) => setLoanAmount(Number(e.target.value))}
        />

        <label>Tenure (months): {tenure}</label>
        <input
        type="range"
        min="6"
        max="360"
        step="1"
        value={tenure}
        onChange={(e) => setTenure(Number(e.target.value))}
        />

        <label>Interest Rate (% per annum): {interestRate}</label>
        <input
        type="range"
        min="1"
        max="36"
        step="0.1"
        value={interestRate}
        onChange={(e) => setInterestRate(Number(e.target.value))}
        />

        <label>Foreclosure Charges (%): {foreclosureChargeRate}</label>
        <input
        type="range"
        min="0"
        max="5"
        step="0.1"
        value={foreclosureChargeRate}
        onChange={(e) => setForeclosureChargeRate(Number(e.target.value))}
        />

        <label>Foreclosure Month: {foreclosureMonth}</label>
        <input
        type="range"
        min="1"
        max={tenure}
        step="1"
        value={foreclosureMonth}
        onChange={(e) => setForeclosureMonth(Number(e.target.value))}
        />
    </div>

    <div className="output-container">
        <h3>Results</h3>
        <p>EMI Amount: ₹{emi}</p>
        <p>Total Payment (Principal + Interest): ₹{totalPayment}</p>
        <p>Outstanding Principal at Foreclosure: ₹{outstandingPrincipal}</p>
        <p>Foreclosure Amount: ₹{foreclosureAmount}</p>
    </div>
    </div>
);
};

export default ForeClosureCalculator;
