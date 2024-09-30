import React, { useState } from "react";
import "./Count.css";
import Child_1 from "../../props/Child_1";

function Counter() {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // console.log( document.getElementById("h2").style.color = "blue")

  // setCount(count+1)

  let st = {
    color: "red",
  };

  return (
    <div>
      {/* <h1 style={{color:"red"}}    >I am heading</h1>

      <h2 id="h2" className=""  style={st}>I am heading 2</h2> */}

      <h1 id="count">Counter: {count} </h1>

      <button
        disabled={count == 10}
        onClick={function () {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <button
        disabled={count == 0}
        onClick={function () {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>

      <Child_1 abc={count} />
    </div>
  );
}

export default Counter;
