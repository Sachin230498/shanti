let username = "Nea@12"
// let pass = 123456




let data = ["rebon@12", "sunil#dd", "Neha@12", "prateek21"]

let flag = false

for(let i = 0;i<data.length;i++){
    // console.log(data[i])

    if(data[i] == username){
        // console.log(i, "correct")
        // alert("correct")

        flag = true;
    }

}

if(flag==true){
    console.log("correct")
}else{
    console.log("not correct")
}
