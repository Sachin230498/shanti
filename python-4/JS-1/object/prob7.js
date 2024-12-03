let str = "amanaaa";

let obj = {};

// for(let i in str){
//     // console.log(str[i])
//     if()
// }

for(let i = 0 ;i<str.length;i++){
    // console.log(str[i])

    let char = str[i]  // char = a
    if(obj[char]== undefined ){
        //obj[a] = 1
        obj[char] = 1;
    }else{
        obj[char]++
    }
}


console.log(obj)

