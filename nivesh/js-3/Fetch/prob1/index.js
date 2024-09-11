// api
// Fetch

let api = "https://resta.onrender.com/categories";


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



// Async await


async function getData(){
    try {
         let res = await fetch(api);
         // console.log(res.json())
         let data = await res.json();
         console.log(data);
    } catch (error) {
        console.log(error)
    }   
}

getData()



