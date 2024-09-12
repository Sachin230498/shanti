// api
// Fetch

let api = "https://jsonplaceholder.typicode.com/photos";
let container = document.getElementById("container");

// function fetching(){
// let a = fetch(api)
// // console.log(a)

// a.then(function(res){
//     // 1st network request
//     //  console.log(res) 
//     let a = res.json()
//     // console.log(a)
//     a.then(function(data){
//         console.log(data)
//     })

// }).catch(function(err){
// console.log(err)
// })

// }

// fetching()




// console.log("hello")
// Async await

getData();

async function getData(){
    try {
         let res = await fetch(api);
        //    console.log(res.json())
          let data = await res.json();
        //   console.log(data);
        display(data)
     } catch (error) {
       console.log(error)
  }   
}



function display(arr){
//   console.log(arr[0].title)
     arr.forEach(function(el,index){
        console.log(el)

        let div = document.createElement("div")
        let title = document.createElement("h2")
        title.innerText = el.title;
        let img = document.createElement("img")
        img.src = el.url

        div.append(img,title)
        container.appendChild(div)


     })
}


// let arr = [2,4,8,2,1,45,11]

// Map Vs forEach

// let a =  arr.map(function(el){
//     // console.log(el*2)
//     //  console.log(array)
//     return el*2

// })

// console.log(a)


// for(let i=0;i<arr.length;i++){
//     // console.log(i,arr[i] )
//     // console.log(arr)
// }


// let b = arr.forEach(function (el) {
//   // console.log(el*2)
//   //  console.log(array)
//     return  el * 2;
// });

// console.log(b);





