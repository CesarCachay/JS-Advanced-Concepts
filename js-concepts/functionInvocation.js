// Lexical environment is every execution context it's own little planet. This planets don't communicate each other
// or know of each other.

// Function expression. This kind of functions are defined in the runtime it means.
// When we actually call, invoke or run those functions
var canada = function() {
  console.log("pretty cold");
};

// Function declaration.
function piura() {
  console.log("pretty hot!");
  // In this case this function doesn't have arguments, for that reason this will return an empty object of arguments
  console.log(arguments); // => {}
}

// Function with arguments. When we create a new execution context which it appears at the moment that
// a function it's called. If you try to print "arguments" inside the scope of a function you will get an object
// that word called "arguments" it's a keyword in javascript

function marry(person1, person2) {
  console.log("arguments", arguments);
  return `${person1} is now married to ${person2}`;
}

console.log(arguments); // Arguments can't be called or printed outside the execution context of our function

marry("Marlenny", "Juan");

// This one will return the following:
// arguments Arguments(2) ["Juan", "Marlenny", callee: ƒ, Symbol(Symbol.iterator): ƒ]
// "Juan is now married to Marlenny"

// If we use arguments or methods in our arguments our JS Engine won't optimize properly to fix that use this:

function getMarry(girl, boy) {
  console.log("arguments", arguments);
  console.log(Array.from(arguments)); // this is a good way to access the args and loop through them

  return `${girl} is now married to ${boy}. Congrats!`;
}

getMarry("Julia", "Augusto");

// Another way to optimize our code and help the JS Engine is doing the following:

function getMarriedAnotherWay(...args) {
  console.log("arguments", args);
  console.log(Array.from(arguments));

  return `${args[0]} is not married to ${args[1]}. Congratulations!`;
}

getMarriedAnotherWay("Gisela", "Tito");
