import logo from "./logo.svg";
import "./App.css";
import Child_1 from "./props/Child_1";
import Counter from "./component/useState/Counter";
import RocketLaunch from "./component/useState/RocketLaunch";
import WaterTracker from "./component/useState/WaterTracker";
import Example from "./component/useEffect/Example.jsx";
// import Navbar from "./component/Navbar";
// import Count from "./component/Count";




function App() {

  // let name = "Nivesh"
  // let age = 25;
  // let address = "Rewa"

  return (
    <div className="App">
   {/* <Child_1 abc = {name}   /> */}
   <Counter/>

   <WaterTracker/>



    </div>
  );
}

export default App;
