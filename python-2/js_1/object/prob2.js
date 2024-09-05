// null

let product = ["Back-Case", "Earphone", "data cable", "game pad"]


let search = "game";
let isPrasent;

for(let i =0;i<product.length;i++){
    if(product[i]==search){
        // console.log("I got it")
        isPrasent = search;
        break;
    }else{
       isPrasent = null;
    }
}

if(isPrasent==null){
    console.log("Not found")
}else{
    console.log(isPrasent, "found")
}


