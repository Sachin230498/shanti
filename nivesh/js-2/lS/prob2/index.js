let h1 = document.getElementById("like");
let likebtn = document.getElementById("likebtn");

let count = localStorage.getItem("count")  || 0 ;
h1.innerText = count;

console.log("hello",count)

likebtn.addEventListener("click", like)

function like(){
//    console.log("hello")
count++;
localStorage.setItem("count", count)
h1.innerText = count;

}

// localStorage.clear()

