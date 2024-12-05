// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). When you create a closure, you gain access to an outer function’s scope from an inner function. Closures are automatically created every time a function is defined in JavaScript.

function parent1() {
  let name = "rahul";

  function child1() {
    name = 456;
    console.log(name);
  }

  name = "priti";

  child1();
}

parent1();
