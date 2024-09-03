let str = "Ronald";
// Donald;

let new_str = ""

for(let i =0;i<str.length;i++){
    // console.log(str[i])

    if(str[i] == "R"){
           new_str = new_str + "D";
    }else{
        new_str =new_str + str[i]
    }

  
}

  console.log(new_str);

