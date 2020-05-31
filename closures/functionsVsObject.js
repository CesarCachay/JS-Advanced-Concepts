// When we invoke functions we automatically get 2 parameters
// - this
// - arguments - this one is an array like object that has some weird behaviors for looping and iteration for that reason we want to use the spread operator

// Ways of invoke a function:

// First - traditional way
function one() {
  return 1;
}
one(); // returns 1.

// Second - Invoking as a method which is a function inside an object
const obj = {
  two() {
    return 2;
  }
}; // returns 2. This is ES6 way

const obj2 = {
  two: function() {
    return 2;
  }
};
obj.two(); // returns 2. This is before ES6

// Third - Using call keyword
function three() {
  return 3;
}
three.call(); // returns 3, This is using call()

// Fourth - Very weird called "Function Constructor"
const four = new Function("return 4");
four(); // returns 4. This is using function constructor
