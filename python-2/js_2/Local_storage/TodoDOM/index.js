let form = document.querySelector("form")
let tbody = document.querySelector("tbody")
  let arr = JSON.parse(localStorage.getItem("arr")) || [] 
  // if(JSON.parse(localStorage.getItem("arr")) == null ){
  //   arr = [];
  // }else{
  // arr = JSON.parse(localStorage.getItem("arr")); 
  // }
  display(arr)
// console.log(form)
form.addEventListener("submit", getData)

function getData(){

   event.preventDefault();
  // console.log("hello")

  let name = document.getElementById("task").value;
  let priority = document.getElementById("priority").value;

  // console.log(name,priority)

  let data_obj = {
       name,
       priority
  }

  // console.log(data_obj)4
  arr.push(data_obj)
  localStorage.setItem("arr", JSON.stringify(arr))
  display(arr)

}



function display(data){
tbody.innerHTML = "";
    data.forEach(function(el,index){
  // console.log(el)
  let row = document.createElement("tr")
  let col1 = document.createElement("td")
  col1.innerText = el.name;
  let col2 = document.createElement("td")
  col2.innerText = el.priority
  if(el.priority=="High"){
    col2.style.backgroundColor="red"
  }else{
    col2.style.backgroundColor="green"
  }
  let col3 = document.createElement("td")
  col3.addEventListener("click", function(){
    delfun(index)
  })
  col3.innerText = "Delete"

  col3.style.backgroundColor = "red"

  row.append(col1,col2,col3);

  tbody.append(row)

    })
}


function delfun(i){
 
  // console.log(i)
  arr.splice(i,1)
  localStorage.setItem("arr", JSON.stringify(arr));
  display(arr)

  // console.log(event.target.parentNode)
  // event.target.parentNode.remove()

}





// let arr1 = [1,2,3,4,6]

// // splice(index,  no of element you want to delete, no of element you want to add)

// arr1.splice(1, 2,45,66,48,55,"abc")

// console.log(arr1)


// for(let i =0;i<arr1.length;i++){
//   // console.log(arr1[i], i)
//   console.log(arr1)

// }

// arr1.forEach(function(el,index,array){
//   console.log(array)
// })



// localStorage.setItem("data", )


// let btn = document.querySelector("button")
// btn.addEventListener("click", getfun)

// function getfun(event){
//   console.log(event.target.parentNode)
// }