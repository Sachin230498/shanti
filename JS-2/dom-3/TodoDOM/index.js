let form  = document.querySelector('form');
let tbody  = document.querySelector('tbody');

   let arr = JSON.parse(localStorage.getItem("arr")) || [];
   display()
   console.log(arr)

 form.addEventListener("submit", function(){
    event.preventDefault();
    //  alert('Hello')
    let task = document.getElementById('task').value;
    let pri = document.getElementById('priority').value;


    let obj = {
        task,
        pri
    }

    arr.push(obj)

    localStorage.setItem("arr", JSON.stringify(arr))
     display();
 } )

 function display(){
     tbody.innerHTML = null;
     for(let i = 0; i < arr.length; i++){
    //    console.log(arr[i])
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = arr[i].task;
        let td2 = document.createElement("td");
        td2.innerText = arr[i].pri;
        if (td2.innerText == "High") {
          td2.style.backgroundColor = "red";
        } else {
          td2.style.backgroundColor = "green";
        }
        let td3 = document.createElement("td");
        td3.addEventListener("click", function(){
           del(i)  
        });
        td3.innerText = "Delete";
        td3.style.backgroundColor = "red";

        tr.append(td1, td2, td3);
        tbody.append(tr);
     }
 }


 function del(a){
//   alert('Hello')
//    console.log(event.target.parentNode.remove())
// event.target.parentNode.remove();
//    console.log(a)
 
  arr.splice(a, 1);
  localStorage.setItem("arr", JSON.stringify(arr))
  display();
 }

//  let arrs = [1,23,55,78,56]
//  let b = arrs.splice(1,2)

//   console.log(b)


//  console.log(event)