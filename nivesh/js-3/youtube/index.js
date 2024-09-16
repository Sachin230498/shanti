let key = "AIzaSyB8eIW69qEtILqXmO84304_SG5OJzzYAQ4";

let api =
  "https://youtube.googleapis.com/youtube/v3/search?&part=snippet&maxResults=20";

//?q=RRR&key=[YOUR_API_KEY]

let btn = document.getElementById("btn");
let search = document.getElementById("search");
let main = document.getElementById("main")

btn.addEventListener("click",getData)

async function getData(){
    // console.log(search.value)
    let res = await fetch(
      `${api}&q=${search.value}&key=${key}`
    );
    let data = await res.json()
    let result = data.items
    // console.log(data)
    display(result)
    console.log(result)
}

function display(data){
    main.innerHTML = ""
   data.map(function({snippet:{title},id:{videoId}}){
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.innerText=title;
    let iframe = document.createElement("iframe")
    iframe.src=`https://www.youtube.com/embed/${videoId}`
    div.append(iframe,h2)
    main.appendChild(div)
   })
}


//  src = "https://www.youtube.com/embed/0ebW_x0dnJs?si=PaLMWuMeiYT3vSAe";