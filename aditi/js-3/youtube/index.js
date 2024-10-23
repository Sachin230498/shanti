let key = "AIzaSyCoKDsYzeQSBBVN8PIc6hGpzXRU68ZJrFk";
// &key=[YOUR_API_KEY]
// &q=spiderman
let api =
  " https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20";
let main = document.getElementById("main")

  let input = document.getElementById( "search")

  async function getData(){
    // console.log(input.value)

let res = await fetch(`${api}&key=${key}&q=${input.value}`)
let data = await res.json()
 let real_data = data.items
// console.log(real_data)
display(real_data)
  }



  function display(data){
   main.innerHTML = ""
    data.map(function(el){
        console.log(el)

        let div = document.createElement("div")

        let iframe = document.createElement("iframe")
        iframe.src=`https://www.youtube.com/embed/${el.id.videoId}`


        let title = document.createElement("h1")
       title.innerText = el.snippet.title;
        
        div.append(iframe, title)
        main.append(div)
        
    })

  }