let key = "a2d5b54653c0dfec88d763417dcd8a6a";

let api ="https://api.openweathermap.org/data/2.5/weather?&appid=a2d5b54653c0dfec88d763417dcd8a6a=&units=metric";


  getData()

 async function getData(api){
    let res = await fetch(api)
    let data = await res.json()
console.log("dsd")
    console.log(data)
  }