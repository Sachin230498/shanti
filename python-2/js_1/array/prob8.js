let arr = [1,2,3,4,5,6,7,8]

let sum = 0;

arr.forEach(function(el){
    
    if(el%2==0){
        // console.log(el)
        sum = sum + el;
    }
    
})

console.log(sum)