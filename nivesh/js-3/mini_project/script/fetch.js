
    let container = document.getElementById("container");
    
    
    
    const getData = async(api) =>{
    let res = await fetch(api)
    let data = await res.json()
    // console.log(data)
    return data
    // Display(data)
}


// getData()


const Display = (data)=>{

    data.forEach((el)=>{
        // console.log(title,price,image)
        let div = document.createElement("div")
   
        let name = document.createElement("h1")
        name.innerText = el.title
        let pr = document.createElement("h3")
        pr.innerText = el.price
        let img = document.createElement("img")
        img.src = el.image

        div.append(img,name,pr)
        container.append(div)

      div.addEventListener("click", ()=>{
            localStorage.setItem("details", JSON.stringify(el))
            window.location.href = "../html/details.html"
      });
    })

}


export {getData , Display}

