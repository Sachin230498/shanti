let form = document.querySelector("form")
let tbody = document.querySelector("tbody")
  let arr = [];
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
  display(arr)

}



function display(data){
tbody.innerHTML = "";
    data.forEach(function(el){
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
  col3.innerText = "Delete"
  col3.style.backgroundColor = "red"

  row.append(col1,col2,col3);

  tbody.append(row)

    })
}



// let arr1 = [1,2,3,4,6]

// for(let i =0;i<arr1.length;i++){
//   // console.log(arr1[i], i)
//   console.log(arr1)

// }

// arr1.forEach(function(el,index,array){
//   console.log(array)
// })
