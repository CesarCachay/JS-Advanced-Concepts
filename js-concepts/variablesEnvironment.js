// Lexically means where the function is written
// Each execution context has their own variable environment

function two() {
  var isValid; // undefined
}

function one() {
  var isValid = true; // local or variable environment assigns the value of isValid = "true"
  two(); // new execution context
}

var isValid = false;

one();

// two() => isValid will be equal to "undefined"
// one() => isValid will be equal to "true"
// global() => isValid will be equal to "false"

// -------------------------- ANOTHER EXAMPLE -------------------------- //
// All the functions have access to the variables that are defined in the global scope in this case is var "x"
// The SCOPE CHAIN is like a link that allows our functions to have access to variables that are our parent environment
// The SCOPE CHAIN starts where the variable is defined and goes all the way down to the global context to see is the
// variable exists. Scope is where can I access that variable, where is that variable in my code.
// In this case for all these functions their parent is the global environment

var x = "X";

function findMyName() {
  console.log(x);
  var b = "b";
  return printMyName();
}

function printMyName() {
  console.log(x);
  var c = "c";
  return "Cesar Cachay";
}

function sayMyName() {
  console.log(x);
  var a = "a";
  return findMyName();
}

sayMyName();
// Each execution context has their own variable environment

// -------------------------- ANOTHER EXAMPLE -------------------------- //

function sayName() {
  var a = "a";
  return function findName() {
    var b = "b";
    return function printName() {
      var c = "c";
      return "Cesar Cachay";
    };
  };
}

sayName();
