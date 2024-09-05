// continue and break


let a = [1,2,3,4,5,6,7,8,9]

for(let i=0;i<a.length;i++){
    // console.log(a[i])
    if(a[i]==7){
        
        break;
    }

    // console.log(a[i]);
}

for (let i = 0; i < a.length; i++) {
  // console.log(a[i])
  if (a[i] == 2) {
    continue //skip
  }

  console.log(a[i]);
}