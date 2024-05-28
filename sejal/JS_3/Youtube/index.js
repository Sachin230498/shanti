let main = document.getElementById("main");
let input = document.getElementById("Search");

let api = "https://youtube.googleapis.com/youtube/v3/search";
let key = "AIzaSyB6SmfmN1DgZTfIeCYkeg-DZSzk0m1yq3s";

//?q=RRR&key=[YOUR_API_KEY]

async function getData() {
    
  let get = input.value;
  let res = await fetch(
    `${api}?q=${get}&key=${key}&part=snippet&maxResults=50`
  );
  let data = await res.json();
  let real_data = data.items;
  console.log(real_data);
  display(real_data);
}
//https://www.youtube.com/embed/BDKjWnPZYPQ?si=uOG9Vv2trPUYdw2F

function display(data) {
    main.innerHTML = "";
  data.forEach(function (el) {


    let div = document.createElement("div");
    div.addEventListener("click", function () {
      tube(el);
    });
      
      
    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${el.id.videoId}`;
    let h1 = document.createElement("h1");
    h1.innerText = el.snippet.title;

    div.append(iframe, h1);
    main.appendChild(div);
  });
}

input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
   getData()
  }
});


function tube(el) {
   // console.log(el);
    window.location.href = "./tube.html"
    let data = {
        id: el.id.videoId,
        title: el.snippet.title
    };
  localStorage.setItem("data", JSON.stringify(data));
}
