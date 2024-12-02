let products = ["back cover", "mobile", "earphone", "charger", "Joystick"]


let search = "buds";

let isprasent ;


for(let i=0;i<products.length;i++){
    // console.log(products[i])

    if(products[i]==search){
        isprasent = search;
        break;
     }
    else{
         isprasent= null
    }
}


if(isprasent == null){
    console.log("Not Found")
}else{
    console.log(isprasent, "found")
}
