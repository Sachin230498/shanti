let form = document.querySelector("form");
let tbody = document.querySelector("tbody")

form.addEventListener("submit", getData);

let arr = [];




function getData() {
  event.preventDefault();

  let task = document.getElementById("task").value;
  let priority = document.getElementById("priority").value;
  // console.log("hello")
  // console.log(task.value)
  // console.log(priority.value)

  let data_obj = {
    task,
    priority,
  };


  arr.push(data_obj);
  // console.log(arr)
  display(arr)
}


function display(data){

  tbody.innerHTML = "";

  data.map(function(el,index){
    // console.log(el)

    let row = document.createElement("tr")
    let c1 = document.createElement("td")
    c1.innerText = el.task;
    let c2 = document.createElement("td")
    if (el.priority=="High"){
      c2.style.backgroundColor = "red"
    }else{
          c2.style.backgroundColor = "green";
    }
       c2.innerText = el.priority;
    


    let c3 = document.createElement("td")
    c3.innerText = "Delete"
    c3.style.backgroundColor = "red"

    row.append(c1,c2,c3);

    tbody.append(row)



  })
}
