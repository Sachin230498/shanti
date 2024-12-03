// given an array find the unique items in array

let list = ["suraj", "ramu", "sonu", "ramu", "suraj", "mohan", "geeta"];

let unique = {};

for(let i=0;i<=list.length-1;i++){
    let name = list[i]
    unique[name] = 1
}

console.log(unique)