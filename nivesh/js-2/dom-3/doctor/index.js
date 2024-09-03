let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
let arr_data = [];

form.addEventListener("submit", getData)


function getData(){
   event.preventDefault()

    let name = form.name.value;
    let doc_id = form.doc_id.value;
    let spl = form.spl.value;
    let exp = form.exp.value;
    let mobile= form.mobile.value;

    // console.log(name,doc_id,spl,exp,mobile)

    let data_obj = {
        name,
        doc_id,
        spl,
        exp,
        mobile
    }

    arr_data.push(data_obj)
// console.log(arr_data);
display(arr_data)
}


function display(arr){
//    console.log(arr)
tbody.innerHTML = "";

for(let i =0;i<arr.length;i++){

    let row = document.createElement("tr")
    let  name = document.createElement("td")
    name.innerText = arr[i].name

    let   docid = document.createElement("td")
    docid.innerText = arr[i].doc_id;
    let   exp = document.createElement("td")
    exp.innerText = arr[i].exp
    let   spl = document.createElement("td")
    spl.innerText = arr[i].spl
    let   mobile = document.createElement("td")
    mobile.innerText= arr[i].mobile
    let   role = document.createElement("td")
    // role.innerText = "junior"
    if( arr[i].exp>=5){
        role.innerText = "senior";
    }else if(arr[i].exp>=2 && arr[i].exp<5){
        role.innerText = "junior"
    }else{
        role.innerText = "trainee"
    }

    let  del = document.createElement("td")
    del.addEventListener("click", delfun)
    del.innerText = "Delete"
    del.style.backgroundColor= "red"

    row.append(name,docid,spl,exp,mobile,role,del)
    tbody.append(row)

}

}


function delfun(event){
    // console.log(event.target.parentNode)
event.target.parentNode.remove();
}














