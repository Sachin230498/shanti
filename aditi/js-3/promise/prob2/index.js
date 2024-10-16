let password = 1234;

let pass = document.getElementById("pass");
let img = document.getElementById("img");

function check() {
  let promise = new Promise(function (res, rej) {
    if (password == pass.value) {
      res("completed");
    } else {
      rej("rejected");
    }
  });

  // console.log(promise)

  promise
    .then(function (res) {
      img.src =
        "https://media4.giphy.com/media/Q81NcsY6YxK7jxnr4v/200w.gif?cid=8d8c03589pnxsip3eva7uvwmf2v2ix7ma2av01z06zs9mxum&ep=v1_gifs_search&rid=200w.gif&ct=g";
    })
    .catch(function (rej) {
      img.src = "https://media.tenor.com/vLK4Mq3jiKIAAAAM/cat-no.gif";
    });
}



function play(){

setTimeout(check,2000)

}