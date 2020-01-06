// Static scope, in this case all our functions are able to print the variable "x" because it's in the global scope
// and all functions can have access to the global environment. Internally what is happening in the case of "findName"
// is saying that must print "x" and, the functions will try to find in the local environment which is in all the
// function body and if couldn't find there, will go one level up to their parent which in this case is the global environment
// there will find the variable "x" and the function "findName" can now, console.log(x)

// lexical scope = available data + variables where the function was defined.
// dynamic scope = where the function is called or invoked
// The lexical scope determines our available variables. Not where the function is called.

var x = "x";

function findName() {
  console.log(x);
  var b = "b";
  return printName();
}

function printName() {
  console.log(x);
  var c = "c";
  return "Cesar Cachay";
}

function sayName() {
  console.log(x);
  var a = "a";
  return findName();
}

sayName();

// -------------------------- NESTED FUNCTIONS -------------------------- //

var global = "I'm global environment";

function sayMyName() {
  // This happens because the variables "b" and "c" are in the body of the nested functions and there our sayMyName
  // function we don't have access to those variables.
  var a = "a";
  console.log(c); // REFERENCE ERROR
  console.log(b); // REFERENCE ERROR
  console.log(a); // a
  console.log(global); // I'm global environment
  return function findMyName() {
    var b = "b";
    // This throws an error because "c" is not define in the parent and all the levels up.
    console.log(c); // REFERENCE ERROR
    console.log(b); // b
    console.log(a); // a
    console.log(global); // I'm global environment
    return function printMyName() {
      var c = "c";
      // This happens because the are going up looking to the parents if in all the parents didn't find the variable
      // will finally go to the global environment. If couldn't find the variable it will throw a REFERENCE ERROR.
      console.log(c); // c
      console.log(b); // b
      console.log(a); // a
      console.log(global); // I'm global environment
      return "Cesar Cachay";
    };
  };
}

sayMyName()()();
