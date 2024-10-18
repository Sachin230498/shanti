let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
form.addEventListener("submit", getData);

let arr = JSON.parse( localStorage.getItem("data")) || [];
display(arr)


function getData(event) {
  event.preventDefault();
  // console.log("hfd")

  let task = document.getElementById("task").value;
  let priority = document.getElementById("priority").value;

  // console.log(task,priority)

  let data = {
    task: task,
    priority: priority,
  };

  arr.push(data);
  // console.log(arr)
  localStorage.setItem("data", JSON.stringify(arr))
  display(arr);
}

function display(data) {
  tbody.innerHTML = null;
  data.forEach(function (el) {
    // console.log(el)
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = el.task;
    let col2 = document.createElement("td");
    if (el.priority == "High") {
      col2.style.backgroundColor = "red";
    } else {
      col2.style.backgroundColor = "green";
    }
    col2.innerText = el.priority;

    let col3 = document.createElement("td");
    col3.innerText = "Delete";
    col3.style.backgroundColor = "red";
    row.append(col1, col2, col3);
    tbody.append(row);
  });
}
