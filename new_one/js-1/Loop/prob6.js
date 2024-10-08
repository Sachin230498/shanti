// Neasted loop


// for(let i = 1;i<=5;i++){
//     console.log("Upper Loop", i)
//     for (let j = 1; j <= 5; j++) {
//         console.log("Inner Loop", j)
//     }
//     console.log("************")
// };



for(let farm = 1; farm <=5;farm++){
    console.log("farm no", farm)

    for(let seed = 1; seed <=farm;seed++){
    console.log("seed no in each farm", seed)
    }

    console.log("********")
}
