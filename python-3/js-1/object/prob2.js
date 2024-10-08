// Undefined and null


let a //declare

// console.log(a)


let b = null;

// console.log(b)


let products = ["Back Case", "Earphones", "Data Cable", "Game pad", "Charger"];

let search = "Earphones";
let isPresent;



for(let i =0;i<products.length;i++){
    // console.log(products[i])
    if(products[i] == search){
         isPresent = search;
         break;
    }
    else{
        isPresent = null
    }
}


if(isPresent == null){
    console.log("product not found")
}else{
    console.log(isPresent, "product found")
}
