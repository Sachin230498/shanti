import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  // Effect runs after every render
  useEffect(() => {
    console.log("Component rendered!");
  });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Example;
