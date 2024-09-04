// Scoping

// Global Scope
// Block Scope
// Local Scope


let cm = "kajriwal"  //global scope of this varible



function s1(){
    let person1= "Chunnu";  //local scope or functional scope
    console.log(cm)
}

// s1()

// console.log(person1) 


function s2(){
    let person2 = "Ram"; //local scope

    if(5==5){
        let a = "hello"  //block scope
        console.log(a)
    }
    
  
}

s2()