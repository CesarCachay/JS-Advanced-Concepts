// --------------------------------------- PRIMITIVE --------------------------------------- //
// Primitive type means that is a kind of data que represents a single value
typeof 5; // number
typeof true; // boolean
typeof "This is a good one"; // string
typeof undefined; // undefined - this is an absence of definition ( variable created with not an assigned value for now)
typeof null; // object - this is an absence of value
typeof Symbol("just a symbol"); // object - this ones helps to do things with object properties

// --------------------------------------- NON-PRIMITIVE --------------------------------------- //
// This kind of type doesn't contain the actual value directly
typeof {}; // object
typeof []; // object
typeof function() {}; // function - A function in JS underneath the hood is an object

function a() {
  return 5;
}

a.hi = "I am actually an obejct";
console.log(a.hi); // I am actually an object

true.toString(); // "true"
// Boolean(true).toString() // this is what happening underneath the hood because in JS everything is an object

// Actually myArr and myAnotherArray are both the same
const myArr = ["1", "2", "3"];

const myAnotherArr = {
  0: "1",
  1: "2",
  2: "3"
};

// Another way to check is something is an array correctly is using
const animals = ["lion", "cat", "dog"];
Array.isArray(animals); // true
