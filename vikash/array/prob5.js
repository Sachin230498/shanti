let movies = ["Bahubali", "Avengers", "Pushpa", "KGF"];

// Print all the movies except Avengers


for(let i=0;i<movies.length;i++){
    if(movies[i] =="Avengers" ){
        continue;
    }
    if(movies[i] =="KGF" ){
        continue;
    }
    console.log(movies[i])
}


