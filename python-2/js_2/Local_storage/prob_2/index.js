
let h1 = document.querySelector("h1")
let val;
if(localStorage.getItem("value")== null){
    val = 0;
}else{
    val = localStorage.getItem("value");
}
  h1.innerText = val;



function like(){
   val++;

   localStorage.setItem("value", val)
    h1.innerText = val;

}