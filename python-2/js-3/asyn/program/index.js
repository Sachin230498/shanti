let data = JSON.parse(localStorage.getItem("data"));
let main = document.getElementById("main");

setInterval(display, 2000);

let abc = 0;

function display() {
  main.innerHTML = "";

  if (abc == data.length) {
    abc = 0;
  }

  let img = document.createElement("img");
  img.src = data[abc];
  main.append(img);

  abc++;
}

// display(data)
