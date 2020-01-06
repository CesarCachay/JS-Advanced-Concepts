// Hoisting is the behavior of moving the variables or functions to the top of their respective enviroments during
// compilation. Variables are partially hoisted and function declarations are hoisted

console.log("---------1---------"); // "---------1---------"
console.log(teddy); // undefined
var teddy = "bear";

function singSong() {
  console.log("culpable o no");
}

// "---------1---------"
// undefined
// undefined

// ------------------------------------------------------------------------ //
// ------------------------------------------------------------------------ //
// ------------------------------------------------------------------------ //

console.log("---------1---------"); // "---------1---------"
console.log(teddy); // undefined
console.log(singSong()); // ohh la la la
var teddy = "bear";

function singSong() {
  console.log("ohh la la la");
}

// "---------1---------"
// undefined
// ohh la la la
// undefined
// undefined

// ------------------------------------------------------------------------ //
// ------------------------------------------------------------------------ //
// ------------------------------------------------------------------------ //

// When JavaScript runs a read our code and identifies if there is vars and also if there are functions.
// The functions goes to the top with all their lexical enviroments
// With vars when those are identified. JS is gonna create an space for them, because they will need some space in memory.
// that's why for now JavaScript will assign "undefined" for that variable

console.log("---------1---------");
var teddy = undefined;
function singSong() {
  console.log("ohh la la la");
}
console.log(teddy);
console.log(singSong());
var teddy = "bear";

// ------------------------------------------------------------------------ //
// Another case IIFE //
// ------------------------------------------------------------------------ //

// This one will throw an error saying that singSong is not defined, because the JS engine first identfiy the brackets
// and them, the function which currently won't be hoisted because first was the brackets.

console.log("---------1---------");
console.log(teddy);
console.log(singSong());
var teddy = "bear";

(function singSong() {
  console.log("ohh la la la");
});

// ------------------------------------------------------------------------ //
// Another case CONST & LET //
// ------------------------------------------------------------------------ //

// This one will throw an error saying that can't access "before initialization" because this is a new syntax of ES6
// This one throws a different error.

console.log("--------1----------");
console.log(teddy);
console.log(singSong());
let teddy = "bear"; // it also could be CONST

(function singSong() {
  console.log("ohh la la la");
});

// Conclusion //
// In the case of functions, those are fully hoisted it means all their content goes to the top
// In case of vars, the are partially hoisted because the left side of them moves up, but the right side not.
// The thing that it's really happening underneath the hood it's that our js file will be read to identify all the
// vars, const , let and functions which the js engine will save space in the memory heap.
