let movies = ["bahubali", "avengers", "stree", "pushpa", "kgf"]

// Print all movies except avengers

for(let i =0; i<movies.length;i++){
    // console.log(movies[i])
    if(movies[i]=="avengers"){
        continue;
    }
    if(movies[i]=="pushpa"){
        continue;
    }

    console.log(movies[i])

}