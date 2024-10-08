// Undefined
// null


// let a ="" 
// console.log(a);



// let data = null;
// console.log(data)


let product = ["mobile", "laptop", "buds", "desktop", "earphone"]

let search = "mobile";

let data ;
let flag = false
for(let i =0;i<product.length;i++){
    // console.log(product[i])
    if(product[i] == search){
        data = search;
        break;
    }else{
        data = null;
     }
}

// console.log(data)

if(data == null){
    console.log("product not found")
}else{
    console.log(data, "product found")
}