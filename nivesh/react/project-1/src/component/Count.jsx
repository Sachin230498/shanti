import React from 'react'


let name = "Rahul"
let x = 10;




const count = () => {

  function increse() {
    x++;
    console.log(x);
    // alert("hello")
  }


  return (
    <div>

       <h1>{name}</h1>

       <h2>{x}</h2>

      <button onClick={increse}>Click</button>
    </div>
  )
}

export default count
