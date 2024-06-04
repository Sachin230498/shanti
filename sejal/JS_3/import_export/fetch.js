//let api = "https://fakestoreapi.com/products";
let main = document.getElementById("main");

let getdata = async (api) => {
    try {
          let res = await fetch(api);
          let data = await res.json();
          console.log(data);
          return data;
    } catch (error) {
        console.log("err",error);
    }
};



function display(arr) {
  main.innerHTML = "";
  arr.forEach(function ({title,price,description,image}) {
  //  console.log(el);
    let div = document.createElement("div");

    let titl = document.createElement("h2");
    titl.innerText =title;

    let pr = document.createElement("h3");
    pr.innerText = price;

    let des = document.createElement("p");
    des.innerText = description;

    let img = document.createElement("img");
    img.src = image;



    div.append(img, titl, pr, des, );

    main.appendChild(div);
  });
}


 export {getdata, display}