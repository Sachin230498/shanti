

let form = document.querySelector('form');
let tbody = document.querySelector('tbody');

form.addEventListener('submit', getData)

let cart = []

let todo_arr;
if (JSON.parse(localStorage.getItem('todo')) == null) {
    todo_arr = []
} else {
    todo_arr = JSON.parse(localStorage.getItem("todo"));
}
 display(todo_arr)


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
    data.forEach(function (el,index) {
 //console.log(el);

        let row = document.createElement("tr");
        let col1 = document.createElement("td");
        col1.innerText = el.name;
        let col2 = document.createElement("td");
        col2.innerText = el.pre;
        if (el.pre == "High") {
            col2.style.backgroundColor = "red"
        }
        else {
            col2.style.backgroundColor = "green"
        }
         
        let col4 = document.createElement("td");
        col4.innerText = "fev"
        col4.addEventListener("click", function () {
             funfev(el)
         } )


        let col3 = document.createElement("td");
        col3.addEventListener("click", function () {
            delfun(index)
        })

        col3.innerText = "Delete";
        col3.style.backgroundColor = "red";

        row.append(col1, col2,col4, col3);

        tbody.append(row);

    })
}


function funfev(el) { 
    cart.push(el);
    localStorage.setItem("fev", JSON.stringify(cart))
}


function delfun(index) {
    todo_arr.splice(index, 1) 
    localStorage.setItem("todo", JSON.stringify(todo_arr));
    display(todo_arr)

    // console.log(index);
  
}


// let arr = ["a", "b", "c", "d"]

// arr.forEach(function (el,index) {   
//     console.log(el,index);
// }  )

// // arr.splice(index, no of element)
// let b = arr.splice(1, 2)
// console.log(arr);