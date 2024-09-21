let form = document.querySelector("form");
let tbody = document.querySelector("tbody");

form.addEventListener("submit", getData);
let data = JSON.parse(localStorage.getItem("data")) || [];
display(data);

function getData() {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let doc_id = document.getElementById("doc_id").value;
  let spl = document.getElementById("spl").value;
  let exp = document.getElementById("exp").value;
  let mbl = document.getElementById("mobile").value;

  // console.log(name,doc_id,spl,exp,mbl)

  let data_obj = {
    name,
    doc_id,
    spl,
    exp,
    mbl,
  };

  data.push(data_obj);
  localStorage.setItem("data", JSON.stringify(data));

  // console.log(data)
  display(data);
}

function display(arr) {
  tbody.innerHTML = "";
  arr.forEach((el, index) => {
    //   console.log(el)
    let tr = document.createElement("tr");
    let name = document.createElement("td");
    name.innerText = el.name;
    let doc_id = document.createElement("td");
    doc_id.innerText = el.doc_id;
    let spl = document.createElement("td");
    spl.innerText = el.spl;
    let exp = document.createElement("td");
    exp.innerText = el.exp;
    let mobile = document.createElement("td");
    mobile.innerText = el.mbl;
    let role = document.createElement("td");
    if (el.exp < 2) {
      role.innerText = "Fresher";
    } else if (el.exp >= 2 && el.exp <= 5) {
      role.innerText = "JE";
    } else {
      role.innerText = "SE";
    }

    let del = document.createElement("td");
    del.innerText = "Delete";
    del.style.backgroundColor = "red";
    del.addEventListener("click", function () {
      delfun(index);
    });

    tr.append(name, doc_id, spl, exp, mobile, role, del);

    tbody.append(tr);
  });
}

function delfun(index) {
  data.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(data));
  display(data);
  // event.target.parentNode.remove()
}

// let arr = [12,3,4,5,7]
// arr.splice(1,2)
// console.log(arr)
