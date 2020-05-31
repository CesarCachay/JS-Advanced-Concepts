// arrays and functions are objects in JS
// When we invoke a function we get 2 parameters ('this' and 'arguments')
// The parameter arguments is an array like object which have weird behavior for 
// looping or iterarion so is better to use the spread operator.
// Functions are callable objects

// -------- NOTES -------- //
// If you define a function like this: 
function myFn() {
};
// You will get properties like: call, apply & bind.
// Also, you can use as method arguments, caller, length, name, prototype & toString
// if you define the functions like this:
const theFn = {
};
// You don't have the properties and the others methods which appears in the another way.
// ----------------------------------------------- //
// There are 4 ways to invoke a function.
// ----------------------------------------------- //

// 1st 'by definition'
function one() {
  return 1;
};

one(); // 1

// 2nd 'as method'
const obj = {
  two: () => {
    return 2;
  }
};
console.log(obj.two()); // 2

const obj2 = {
  two() {
    return 2;
  }
};
console.log(obj2.two()); // 2

const obj3 = {
  two: function () {
    return 2;
  }
};
console.log(obj3.two());

// 3rd 'using call and apply'
function three() {
  return 3;
};

three.call(); // 3

// 4th 'function constructor OOP'
const four = new Function('return 4');
const four2 = new Function('parameter', 'return parameter')

four(); // 4
four2('soy el parametro'); // soy el parametro
