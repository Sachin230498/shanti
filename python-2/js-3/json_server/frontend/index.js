let api = "http://localhost:3000/Data";

let main = document.getElementById("main");

getData();

async function getData() {
  let res = await fetch(api);
  // console.log(res)

  let data = await res.json();
  // console.log(data)
  display(data);
}

function display(arr) {
  arr.forEach(function (el, index) {
    console.log(el);

    let div = document.createElement("div");

    let nam = document.createElement("h1");
    nam.innerText = `Name :-  ${el.name}`;
    let price = document.createElement("h3");
    price.innerText = `Age :- ${el.age}`;

   let update_div = document.createElement("div");    
  update_div.setAttribute("id", "update_div")
    let update = document.createElement("button");
    update.innerText = "Update";
   update.addEventListener("click", function(){
    updatefun(el)
   })

   update_div.append(update);


    let del = document.createElement("button");
    del.addEventListener("click", function () {
      deletefun(el.id);
    });
    del.innerText = "Delete";

    div.append(nam, price, update_div, del);

    main.append(div);
  });
}

let form = document.querySelector("#post");
// let update_form = document.getElementById("update");


// update_form.addEventListener("submit", updatefun);


form.addEventListener("submit", PostData);

async function PostData() {
  event.preventDefault();

  let name = form.name.value;
  let age = form.age.value;

  let data = {
    name: name,
    age: age,
  };

  let res = await fetch(api, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

async function updatefun(data) {
  event.preventDefault();
console.log(data)
  let update_div = document.getElementById("update_div");

  update_div.innerHTML = ""

  let name = document.createElement("input")
  name.value = data.name
  let age = document.createElement("input")
  age.value = data.age
  let update = document.createElement("button")
  update.innerText = "save"

  let obj = {
    name:name,
    age:age
  }


  update.addEventListener("click", async function(){
      let res = await fetch(`${api}/${data.id}`, {
        method: "PUT",
        body: JSON.stringify({obj}),
        headers: {
          "Content-Type": "application/json",
        },
      });
     
    
  })

  update_div.append(name,age, update)
}





async function deletefun(id) {
  event.preventDefault();
  let res = await fetch(`${api}/${id}`, {
    method: "DELETE",
  });
  console.log("hello");
}

