let api =  "https://fakestoreapi.com/products"
let main = document.getElementById("main");


async function getData() {
  let res = await fetch(api);

  let data = await res.json();
return data;
  
}



function display(abc){
  main.innerHTML = "";
  //  console.log("aasdad", abc)
  abc.map((el, index) => {
    // console.log(el)
    let div = document.createElement("div");

    let title = document.createElement("h1");
    title.innerText = el.title;

    let price = document.createElement("h3");
    price.innerText = "Price: " + el.price;

    let img = document.createElement("img");
    img.src = el.image;

    div.append(img, title, price);

    main.appendChild(div);
  });
};


export  {getData,display}






