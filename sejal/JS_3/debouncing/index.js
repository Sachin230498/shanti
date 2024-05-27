let main = document.getElementById('main');
let input = document.getElementById('input');
let key = "b45a8f04";
let api = "http://www.omdbapi.com/";
let id;

async function getmovie() {
    // console.log(input.value);
    let search = input.value;
    try {
        let res = await fetch(`${api}?apikey=${key}&s=${search}`);
        let data = await res.json();
        let movie = data.Search
        if (movie != undefined) {
            console.log(movie);
            display(movie)
        }
     
    } catch (error) {
       console.log(error); 
    }
}



function display(data) {
    main.innerHTML = "";
    data.forEach((el) => {
        
        let div = document.createElement("div");

        let name = document.createElement("h3");
        name.innerText = el.Title;
        let img = document.createElement("img");
        img.src = el.Poster;

        div.append(name, img);
        main.appendChild(div);

    })
}


//debouncing

function debounce(func, time) {
    clearInterval(id);

   id =    setTimeout(function () {
        func();
    }, time);
}
