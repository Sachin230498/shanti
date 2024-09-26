import Child_2 from "./Child_2";

function Child_1(props){

    return (
        <div>

         {/* {  props.abc = "abcd" } */}

           {/* <h1>Namaste {props.abc} </h1>
           <h1>Age {props.age}</h1>
           */}


           <Child_2   a  = {props.abc}/>
          



        </div>
    )
}


export default Child_1;