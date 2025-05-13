import React, { useState } from "react";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  
  const handleChange = (e) => {
    setCelsius(e.target.value);
  };

  const convertToFahrenheit = () => {
    return celsius === "" ? "" : ((parseFloat(celsius) * 9) / 5 + 32).toFixed(2);
  };

  return (
    <div className="converter-container">
      <div className="input-group">
        <label>🌡️ Celsius:</label>
        <input 
          type="number" 
          value={celsius} 
          onChange={handleChange} 
          placeholder="Enter Celsius" 
        />
      </div>
      <div className="result-group">
        <h2>🔥 Fahrenheit: {convertToFahrenheit()} °F</h2>
      </div>
    </div>
  );
};

export default TemperatureConverter;
