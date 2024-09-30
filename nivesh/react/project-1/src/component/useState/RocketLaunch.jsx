import React, { useState } from "react";

function RocketLaunch() {
  // Initialize the countdown starting from 10
  const [countdown, setCountdown] = useState(10);
  const [launched, setLaunched] = useState(false);

  const handleLaunch = () => {
    if (countdown > 0) {
      setCountdown(countdown - 1);
    }
    if (countdown === 1) {
      setLaunched(true); // Set launch status to true once countdown reaches 0
    }
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>🚀 Rocket Launch Countdown</h1>

      {/* Show "Launched!" when countdown hits 0 */}
      {!launched ? (
        <>
          <h2>{countdown}</h2>
          <button
            onClick={handleLaunch}
            disabled={countdown === 0}
            style={{
              fontSize: "20px",
              padding: "10px 20px",
              cursor: countdown === 0 ? "not-allowed" : "pointer",
              backgroundColor: countdown === 0 ? "grey" : "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              margin: "10px",
            }}
          >
            {countdown > 0 ? "Launch!" : "Countdown Complete!"}
          </button>
        </>
      ) : (
        <h2 style={{ color: "red" }}>🚀 Launched!</h2>
      )}
    </div>
  );
}

export default RocketLaunch;
