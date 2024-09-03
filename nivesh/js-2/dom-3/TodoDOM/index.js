let form = document.querySelector("form");
let tbody = document.querySelector("tbody");

form.addEventListener("submit", getData)


function getData(){
  event.preventDefault()

  let task = form.task.value
  let priority = form.priority.value

  //  console.log(task,priority)

  let row = document.createElement("tr")
  let col1 = document.createElement("td")
  col1.innerText = task;
  let col2 = document.createElement("td")
  if(priority == "High"){
    col2.style.backgroundColor= "red"
  }else{
     col2.style.backgroundColor = "green";
  }
  col2.innerText = priority;
  let col3 = document.createElement("td")
  col3.innerText = "DELETE"
  col3.style.backgroundColor = "red"
  // col3.setAttribute("class", "delbtn")

  row.append(col1,col2,col3)

  tbody.append(row)


}