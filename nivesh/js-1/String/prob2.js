// givern a string count the numbers of words in that string


let sentence = "Hello Vikash good morning"
let count = 0

for(let i =0;i<sentence.length;i++){
    if(sentence[i]==" "){
       count++;
    }
}

if(sentence.length != 0){
    console.log(count+1)
}else{
    console.log(0)
}

