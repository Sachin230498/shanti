let tube = document.getElementById("tube")
let search = document.getElementById("search");

search.addEventListener("input", ()=>{
    getData()
})

// console.log(search)

let api =
  "https://youtube.googleapis.com/youtube/v3/search?maxResults=50&part=snippet&key=AIzaSyCoKDsYzeQSBBVN8PIc6hGpzXRU68ZJrFk";


//   console.log(fetch(api)

// getData()

// setTimeout(getData, 2000)


async function  getData() {

    let res = await fetch(`${api}&q=${search.value}`)

    let data = await res.json()

    // console.log(data.items)

    let real_data = data.items

 display(real_data)
    
}


function display(data){

    data.map((  {snippet:{title},id:{videoId}}  )=>{
        // console.log(title)
        // console.log("******")
        // console.log(videoId)

          let div = document.createElement("div")
          
          let iframe = document.createElement("iframe")
          iframe.src =
            `https://www.youtube.com/embed/${videoId}`;

        let name = document.createElement("h3")
        name.innerText = title;
 
          div.append(iframe,name)

          tube.append(div)
    })

}



// let obj = {
//     name:"rr",
//     age:20,
//     marks:{
//         maths:25,
//         en:85
//     }

// }


// obj.name
// obj.age
// obj.marks.en

// const {name,age,marks:{maths,en}} = obj

// console.log(name,age,en)
