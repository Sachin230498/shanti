 let btn = document.querySelector("button")

 let form = document.querySelector("form")

// let name = document.getElementById("name");
// let surname = document.getElementById("surname");



 form.addEventListener("submit", getData)


 function getData(event){

    event.preventDefault()

    let nam = form.name.value;
    let surnam = form.surname.value;
    // console.log(event)

    // let a = name.value;
    // let b = surname.value

    console.log(nam,surnam,head)
 }


