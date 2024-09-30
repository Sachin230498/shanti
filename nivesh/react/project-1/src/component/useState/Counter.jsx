import React, { useState } from "react";

function Counter() {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      {/* Increment button */}
      <button disabled = {count ==10} onClick={() => setCount(count + 1)}>Increment</button>
      {/* Decrement button */}
      <button 
        onClick={() => setCount(count - 1)} 
        disabled={count === 0}  // Button is disabled when count is 0
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
