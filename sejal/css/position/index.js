function fun1(){
    let a = 10;
    console.log("dfds",a)
    function fun2(){
        let a = 20;
        console.log(a)
        function fun3(){
            console.log(a)
        }
        a = 30;
        return fun3
    }
    return fun2
}

let a = fun1()
let b =  a()
b()
// console.log(a)