

let form = document.querySelector('form');
let tbody = document.querySelector('tbody');

form.addEventListener('submit', getData)


let todo_arr;
if (JSON.parse(localStorage.getItem("todo")) == null) {
    todo_arr = [];
}
else {
    todo_arr = JSON.parse(localStorage.getItem("todo"))
}

function getData() {
    event.preventDefault();
    // console.log("hello");
    let name = document.getElementById("task").value;
    let pre = document.getElementById("priority").value;

   

    let obj = {
        name,
        pre
    }

    todo_arr.push(obj)
   localStorage.setItem("todo",  JSON.stringify(todo_arr));
    display(todo_arr)

    console.log(todo_arr);

    

   
}


function display(data) {
  tbody.innerHTML = null;
    for (let i = 0; i < data.length; i++) {
        let row = document.createElement("tr");
        let col1 = document.createElement("td");
         col1.innerText = data[i].name;
        let col2 = document.createElement("td");
        col2.innerText = data[i].pre;
        if (data[i].pre == "High") {
            col2.style.backgroundColor ="red"
        }
        else {
            col2.style.backgroundColor ="green"
        }


        let col3 = document.createElement("td");
        col3.addEventListener("click", delfun)
        col3.innerText = "Delete";
        col3.style.backgroundColor = "red";

        row.append(col1, col2, col3);

        tbody.append(row);

    }
}


function delfun() {

    console.log(event.target.parentNode);
    
    event.target.parentNode.remove();
}