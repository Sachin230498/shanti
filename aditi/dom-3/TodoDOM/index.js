let form = document.querySelector("form");
let tbody = document.querySelector("tbody"); 

form.addEventListener("submit", getData);
let arr = JSON.parse(localStorage.getItem("data")) || [];
// if (JSON.parse(localStorage.getItem("data"))== null){
//   arr = []
// }else{
//   arr = JSON.parse(localStorage.getItem("data")); 
// }
  //null
  display(arr);


function getData(){

  event.preventDefault()
  // console.log("hello")

  let name = form.task.value;
  let priority = form.priority.value;

let obj = {
  name,
  priority:priority
}

arr.push(obj)
localStorage.setItem("data", JSON.stringify(arr))
display(arr)

}



function display(data){
   tbody.innerHTML = null;

    data.forEach(function(el){
      // console.log(el)

      let row = document.createElement("tr")

      let task = document.createElement("td")
      task.innerText = el.name;
      let col2 = document.createElement("td")
      col2.innerText = el.priority;
      if(el.priority =="High"){
        col2.style.backgroundColor = "red"
      }else{
        col2.style.backgroundColor = "green"
      }
      let col3 = document.createElement("td")
      col3.style.backgroundColor = "red"
      col3.innerText = "Delete"
      
      row.append(task,col2,col3);

      tbody.append(row)


    })
}




// let btn = document.querySelector("button")


// btn.addEventListener("click", fun1)

// function fun1(e){
// console.log(e.target.parentNode)
// }



// let ar = [1,2,3,4,5,6]

// let x = ar.forEach(function(el,index,array){
//   //  console.log(el,index)
//      let x = array[index]*2
//      console.log(x)
//   // return el*2
// })

// // console.log(x)

// let y = ar.map(function(el,index,array){
// // console.log(el)
// return el*2
// })

// console.log(y)



// function abc(){
//   let nam = "Rahul"

//   return nam;
// }


// let a = abc()
// console.log(a)