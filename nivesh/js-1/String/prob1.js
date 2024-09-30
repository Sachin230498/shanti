let str = "Ronald";
// Donald

// str[0] = "D"

// console.log(str)

let new_str = ""
for(let i=0;i<str.length;i++){
    // console.log(str[i])
if(str[i] == "R"){
   new_str += "D" 
}else{

    new_str += str[i]

}
}

console.log(new_str)