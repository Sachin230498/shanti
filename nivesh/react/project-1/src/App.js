import logo from "./logo.svg";
import "./App.css";
import Child_1 from "./props/Child_1";
// import Navbar from "./component/Navbar";
// import Count from "./component/Count";




function App() {

  let name = "Nivesh"
  let age = 25;
  let address = "Rewa"

  return (
    <div className="App">
   {/* <Count/> */}

   <Child_1 abc = {name}   />
   {/* <Child_1 age = {age} /> */}
   {/* <Child_1 adr = {address} /> */}
    </div>
  );
}

export default App;
