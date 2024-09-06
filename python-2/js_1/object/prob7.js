// Given an array find the unique items in the array

let names= ["suraj","ramu","sonu","ramu","suraj","mohan"];

let unique = {};

for(let i=0;i<names.length;i++){
    // console.log(names[i])
    if( unique[names[i]] == undefined){
        unique[names[i]] = 1
    }
    else(
     unique[names[i]]++
    )  
}
 console.log(unique)

// i = 0   if(unique["suraj"]==undefined)   suraj = 1
// i = 1   if(unique["ramu"]== undefined)   ramu = 1
// i = 2   if(unique["sonu"]== undefined)   sonu = 1
// i = 3   if(unique["ramu"]== 1)   ramu += 1 ramu = 2
// i = 4   if(unique["suraj"]== 1)   suraj += 1 suraj = 2
// i = 5   if(unique["mohan"]== undefined)   mohan =1


//unique = { }
//unique = { suraj : 2, ramu = 2, sonu:1,mohan = 1 }
