// Synchronous JavaScript example
//console.log("Start");

function synchronousTask() {
  for (let i = 0; i < 3; i++) {
    console.log("Synchronous Task " );
  }
}

synchronousTask();

//console.log("End");







// Asynchronous JavaScript example
console.log("Start");


function asynchronousTask() {
  setTimeout(() => {
    console.log("Asynchronous Task 1");
  }, 2000);

  setTimeout(() => {
    console.log("Asynchronous Task 2");
  }, 1000);

  setTimeout(() => {
    console.log("Asynchronous Task 3");
  }, 500);
}

asynchronousTask();

console.log("End");
