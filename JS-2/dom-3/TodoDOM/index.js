let form  = document.querySelector('form');
let tbody  = document.querySelector('tbody');

let h1 = document.querySelector('h1');
h1.addEventListener("click", fun1)

function fun1(){
    // alert('Hello')
        console.log(event);
}

 form.addEventListener("submit", function(){
    event.preventDefault();


    //  alert('Hello')
    let task = document.getElementById('task').value;
    let pri = document.getElementById('priority').value;

    // console.log(task,pri)
    // console.log("hellp")

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerText = task
    let td2 = document.createElement('td');
    td2.innerText = pri;
    if( td2.innerText == "High"){
        td2.style.backgroundColor = "red"
    }else{
        td2.style.backgroundColor = "green"
    }
    let td3 = document.createElement('td');
    td3.addEventListener("click", del);
    td3.innerText = "Delete"
    td3.style.backgroundColor = "red"

    
    tr.append(td1,td2,td3)
    tbody.append(tr);
 } )


 function del(){
//   alert('Hello')
//    console.log(event.target.parentNode.remove())
event.target.parentNode.remove();
 }


//  console.log(event)