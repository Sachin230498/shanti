// Problem2: Given a string, Print the number of times each 
//character appears

let str = "Shainti"

let obj = {};

for(let i = 0; i < str.length; i++){
    let char = str[i]
    // console.log(char);

    if(obj[char] == undefined){
      obj[char] = 1;
    }else{
        obj[char]++;
    }
}

console.log(obj)



// let d = {}

// d["n"] = 1
