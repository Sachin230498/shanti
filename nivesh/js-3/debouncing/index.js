let api = "http://www.omdbapi.com/?i=tt3896198&apikey=b45a8f04";
let main = document.getElementById("main")
let input = document.querySelector("input")



// console.log(fetch(api))


function delayfun(){
    setTimeout(Api_data, 1000)
}

async function Api_data(){
    let res = await fetch(`${api}&s=${input.value}`);
    let data = await res.json()
    //  console.log(data);
    let real_data = data.Search
    display(real_data)
    
} 


function display(data){

data.forEach(function(el){
  let div = document.createElement("div")
  let title = document.createElement("h3")
  title.innerText = el.Title
  let img = document.createElement("img")
  img.src = el.Poster
  div.append(img, title)
  main.append(div)
})
}










