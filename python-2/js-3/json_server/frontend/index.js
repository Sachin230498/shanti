let api = "http://localhost:3000/Data";

let main = document.getElementById("main");


getData()

async  function getData(){

    let res = await fetch(api)
    // console.log(res)

    let data = await res.json()
    // console.log(data)
    display(data)

}


function display(arr) {
  arr.forEach(function (el, index) {
      console.log(el)

    let div = document.createElement("div");

    let nam = document.createElement("h1");
    nam.innerText = `Name :-  ${el.name}`;
    let price = document.createElement("h3");
    price.innerText = `Age :- ${el.age}`;


    div.append(nam, price);

    main.append(div);
  });
}




let form  = document.querySelector("#post")
let update_form = document.getElementById("update");

update_form.addEventListener("submit", updatefun)

form.addEventListener("submit", PostData)

async function PostData(){
    event.preventDefault()

    let name = form.name.value;
    let age = form.age.value;

    let data = {
        name:name,
        age:age
    }

    let res = await fetch(api, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    });
   
}





async function updatefun() {
  event.preventDefault();

  let name = update_form.uname.value;
  let age = update_form.uage.value;
  let id = update_form.id.value;

  let data = {
    name: name,
    age: age,
  };

  console.log(data)

  let res = await fetch(`${api}/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
console.log("hello")

}