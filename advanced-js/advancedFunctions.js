// Closures
const first = () => {
  const greet = "Hello";
  const second = () => {
    alert(greet);
  };

  return second;
};

const newFunction = first();

// Showing that parent function won't have access to the variables of the child function
const parent = () => {
  const greet = "Hello";
  const child = () => {
    const name = "Cesar";
    alert(greet);
    console.log("from the child", name);
  };
  // Here won't be possible to appear in the console the name Cesar
  console.log("from the parent", name);
  return child;
};

const closure = parent();

// Currying this is a function that have another one argument as parameter which returns another function
const multiply = (a, b) => a * b;
const curriedMultiply = a => b => a * b;
// curriedMultiply(3) => (3) => (b) => (3) * b
const multiplyByThree = curriedMultiply(3);
// With this I created a function which will multiply anything by 3 and only it receives one argument.
multiplyByThree(10);
multiplyByThree(5);

// Compose
const compose = (f, g) => a => f(g(a));
const sum = num => num + 1;
compose(sum, sum)(5);

// this work like this
// f(g(5)) => f(sum(5)) => f(6) => sum(6) => 7
