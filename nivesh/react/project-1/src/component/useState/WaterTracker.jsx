import React, { useState } from "react";

function WaterTracker() {
  // Initialize the state for the number of glasses drunk
  const [glasses, setGlasses] = useState(0);

  // Maximum number of glasses to drink per day
  const maxGlasses = 8;

  const incrementGlass = () => {
    if (glasses < maxGlasses) {
      setGlasses(glasses + 1);
    }
  };

  const decrementGlass = () => {
    if (glasses > 0) {
      setGlasses(glasses - 1);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>💧 Water Drinking Tracker</h1>

      <h2>Glasses Drunk: {glasses}</h2>

      {/* Display a message when the daily goal is reached */}
      {glasses === maxGlasses ? (
        <h3 style={{ color: "green" }}>
          🎉 You’ve reached your daily goal of {maxGlasses} glasses! 🎉
        </h3>
      ) : (
        <p>Track your daily water intake!</p>
      )}

      {/* Buttons to increment and decrement glasses */}
      <button
        onClick={incrementGlass}
        disabled={glasses === maxGlasses}
        style={{
          fontSize: "20px",
          padding: "10px 20px",
          margin: "10px",
          backgroundColor: glasses === maxGlasses ? "lightgrey" : "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: glasses === maxGlasses ? "not-allowed" : "pointer",
        }}
      >
        Drink Water 💧
      </button>

      <button
        onClick={decrementGlass}
        disabled={glasses === 0}
        style={{
          fontSize: "20px",
          padding: "10px 20px",
          margin: "10px",
          backgroundColor: glasses === 0 ? "lightgrey" : "#f44336",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: glasses === 0 ? "not-allowed" : "pointer",
        }}
      >
        Remove Glass 🗑️
      </button>
    </div>
  );
}

export default WaterTracker;
