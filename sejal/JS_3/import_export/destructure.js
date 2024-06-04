// let arr = [5, 6, 7, 8, 9 , {}]


// // let a,b,c,d,e

// // a = arr[0]
// // b = arr[1]
// // c = arr[2]
// // d = arr[3]
// // e = arr[4]


// // arr.forEach((el,index,array) => {
// //     console.log(array[3]);
// // })

// //console.log(a,b,c,d,e);

// const [i,  j, c, d, e] = arr

// console.log(d,a);



let obj = {
    name: "rahul",
    Country: "India",
    age: 34,
    hobbies: {
        playing: "cricket",
        singing: "classical",
        eating:["junkfood", "indianfood", "chinese"]
    }

}

// let a = obj.hobbies.eating[2]
// console.log(a);







const { name,Country, age, hobbies:{singing,playing,eating:[a,b,c] }  } = obj

console.log(a);

