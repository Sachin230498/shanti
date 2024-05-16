
let img = document.getElementById("gif");

let promise = new Promise(function (resolve, reject) { 
    if (5 == 4) {
      resolve("success")
    } else {
        reject("error")
  }
})

setTimeout(function () {

    promise.then(function (res) {
        console.log("res", res);
        img.src =
            "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTJ3cmQ4NDdieHNjOWFrZnBndnRubTBpOGNpczBubmcwaGpxb2xwZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q81NcsY6YxK7jxnr4v/giphy.gif";
    }).catch(function (err) {
        console.log("err", err);
        img.src =
          "https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_640.png";
    })

},2000)

"https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTJ3cmQ4NDdieHNjOWFrZnBndnRubTBpOGNpczBubmcwaGpxb2xwZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q81NcsY6YxK7jxnr4v/giphy.gif";
//console.log(promise);