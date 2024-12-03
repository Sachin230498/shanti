let main = document.getElementById("main");


async function getData(api) {
  let res = await fetch(api);
  let data = await res.json();

  return data
}

function display(data) {
  data.map(function (el, index) {
    let div = document.createElement("div");
    let name = document.createElement("h1");
    name.innerText = el.title;
    let img = document.createElement("img");
    img.src = el.image;
    let price = document.createElement("h2");
    price.innerText = el.price

    div.append(img, name, price);

    main.append(div);
  });
}

export {getData,display};
