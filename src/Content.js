import React, { useState } from "react";

function Content() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [kelvin, setKelvin] = useState("");

  const convertFromCelsius = (value) => {
    const c = parseFloat(value);
    if (!isNaN(c)) {
      setFahrenheit(((c * 9) / 5 + 32).toFixed(2));
      setKelvin((c + 273.15).toFixed(2));
    } else {
      setFahrenheit("");
      setKelvin("");
    }
    setCelsius(value);
  };

  const convertFromFahrenheit = (value) => {
    const f = parseFloat(value);
    if (!isNaN(f)) {
      setCelsius(((f - 32) * 5 / 9).toFixed(2));
      setKelvin((((f - 32) * 5) / 9 + 273.15).toFixed(2));
    } else {
      setCelsius("");
      setKelvin("");
    }
    setFahrenheit(value);
  };

  const convertFromKelvin = (value) => {
    const k = parseFloat(value);
    if (!isNaN(k)) {
      setCelsius((k - 273.15).toFixed(2));
      setFahrenheit((((k - 273.15) * 9) / 5 + 32).toFixed(2));
    } else {
      setCelsius("");
      setFahrenheit("");
    }
    setKelvin(value);
  };

  return (
    <div className="converter-container">
      <div className="converter-box">
        <label>Celsius (°C)</label>
        <input
          type="number"
          value={celsius}
          onChange={(e) => convertFromCelsius(e.target.value)}
          placeholder="Enter Celsius"
        />

        <label>Fahrenheit (°F)</label>
        <input
          type="number"
          value={fahrenheit}
          onChange={(e) => convertFromFahrenheit(e.target.value)}
          placeholder="Enter Fahrenheit"
        />

        <label>Kelvin (K)</label>
        <input
          type="number"
          value={kelvin}
          onChange={(e) => convertFromKelvin(e.target.value)}
          placeholder="Enter Kelvin"
        />
      </div>
    </div>
  );
}

export default Content;
