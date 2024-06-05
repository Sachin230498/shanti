import React, { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  // This effect will run after every render
  useEffect(() => {
    console.log("Component rendered");
  });

  // This effect will run only once after the initial render
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  // This effect will run whenever the 'count' state changes
    useEffect(() => {
      document.title = "Component rendered" + count
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseEffect;
