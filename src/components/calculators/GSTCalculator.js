import React, { useState } from "react";
import "./css/GSTCalculator.css";

const GSTCalculator = () => {
const [calculationType, setCalculationType] = useState("exclusive");
const [price, setPrice] = useState("");
const [gstRate, setGstRate] = useState("");
const [gstAmount, setGstAmount] = useState(null);
const [finalPrice, setFinalPrice] = useState(null);
const [originalPrice, setOriginalPrice] = useState(null);

const handleCalculation = () => {
    const rate = parseFloat(gstRate);
    const value = parseFloat(price);

    if (calculationType === "exclusive") {
      const gst = (value * rate) / 100;
    const total = value + gst;
    setGstAmount(gst.toFixed(2));
    setFinalPrice(total.toFixed(2));
    } else {
      const gst = (value * rate) / (100 + rate);
    const original = value - gst;
    setGstAmount(gst.toFixed(2));
    setOriginalPrice(original.toFixed(2));
    }
};

return (
    <div className="gst-calculator-container">
    <h2>GST Calculator</h2>
    <div className="gst-calculator-form">
        <label>Calculation Type:</label>
        <select
        value={calculationType}
        onChange={(e) => setCalculationType(e.target.value)}
        >
        <option value="exclusive">Exclusive GST</option>
        <option value="inclusive">Inclusive GST</option>
        </select>

        <label>Price:</label>
        <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter the price"
        />

        <label>GST Rate (%):</label>
        <input
        type="number"
        value={gstRate}
        onChange={(e) => setGstRate(e.target.value)}
        placeholder="Enter the GST rate"
        />

        <button onClick={handleCalculation}>Calculate</button>

        {calculationType === "exclusive" && gstAmount !== null && (
        <div className="results">
            <p>GST Amount: ₹{gstAmount}</p>
            <p>Final Price (including GST): ₹{finalPrice}</p>
        </div>
        )}

        {calculationType === "inclusive" && gstAmount !== null && (
        <div className="results">
            <p>GST Amount: ₹{gstAmount}</p>
            <p>Original Price (excluding GST): ₹{originalPrice}</p>
        </div>
        )}
    </div>
    </div>
);
};

export default GSTCalculator;
