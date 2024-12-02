// Updating or replacing a value at some index

// let arr  = [45,88,99,42,35,68,12,64];

// arr[0] = "Superman";

// arr[8] = "iron man"

// arr[10] = "Shaktiman"

// console.log(arr)

// for(let i = 0;i<arr.length;i++ ){
//     // console.log(arr[i])
//     if(arr[i]>=50){
//         console.log(arr[i])
//     }
// }



let movies = ["Bahubali", "Avengers", "Pushpa", "KGF"];

// Print all the movies except Avengers


for(let i =0;i<=movies.length-1;i++){
    if(movies[i] == "Avengers"){
        continue
    }

    console.log(movies[i])
}













