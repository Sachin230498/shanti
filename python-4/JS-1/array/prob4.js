let products = ["mobile", "earphon", "buds", "mac"]

// print last 2 products


let start = 0;

if(products.length>=2){
    start = products.length-2
}

// console.log(start)


for(let i = start;i<=products.length-1;i++){
    console.log(products[i])
}