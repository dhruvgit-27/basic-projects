import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [temperature, setTemperature] = useState("");
  const [unit, setUnit] = useState("Celsius");

  // Convert temperatures
  const convertTemperature = (value, unit) => {
    let celsius;
    if (unit === "Celsius") {
      celsius = parseFloat(value);
    } else if (unit === "Fahrenheit") {
      celsius = (parseFloat(value) - 32) * (5 / 9);
    } else if (unit === "Kelvin") {
      celsius = parseFloat(value) - 273.15;
    } else {
      return {};
    }

    return {
      Celsius: celsius.toFixed(2),
      Fahrenheit: ((celsius * 9) / 5 + 32).toFixed(2),
      Kelvin: (celsius + 273.15).toFixed(2),
    };
  };

  const temperatureValues = convertTemperature(temperature, unit);

  // Determine color and message
  let tempClass = "";
  let message = "";
  let emoji = "";

  if (temperatureValues.Celsius > 90) {
    tempClass = "hot";
    message = "🔥 It's burning hot!";
    emoji = "🔥";
  } else if (temperatureValues.Celsius >= 40) {
    tempClass = "moderate";
    message = "🌤️ The Temperatue is pleasant!";
    emoji = "🌤️";
  } else {
    tempClass = "cold";
    message = "❄️ Freezing cold!";
    emoji = "❄️";
  }

  return (
    <div className="app-container">
      <Header />
      <div className={`converter-container ${tempClass}`}>
        <div className="converter-box">
          {/* 🔥 "Ab Dekh Tuuuuu" is now inside a separate heading div! */}
          <div className="heading-container">
            <h2>🌡️ Ab Dekh Tuuuuuuuuuuu 🌡️</h2>
          </div>
          <input
            type="number"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            placeholder="Enter value"
          />
          <select onChange={(e) => setUnit(e.target.value)} value={unit}>
            <option value="Celsius">Celsius (°C)</option>
            <option value="Fahrenheit">Fahrenheit (°F)</option>
            <option value="Kelvin">Kelvin (K)</option>
          </select>
          <div className="output">
            <p>🌡️ Celsius: {temperatureValues.Celsius}°C</p>
            <p>🌡️ Fahrenheit: {temperatureValues.Fahrenheit}°F</p>
            <p>🌡️ Kelvin: {temperatureValues.Kelvin}K</p>
          </div>
          <div className={`message-box ${tempClass}`}>
            {emoji} {message}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
