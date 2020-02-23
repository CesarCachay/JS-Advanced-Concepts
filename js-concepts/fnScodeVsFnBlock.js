// function scope
if (5 > 4) {
  var secret = "3213"
}

console.log(secret); // Here I can access to this variable due to the block scope.

function discoverSecret() {
  var mySecretPassword = "123456"
}
console.log(mySecretPassword); // In this one I can't access. because of the function scope.

// ES6 FEATURE //

if (10 > 1) {
  const newSecret = "123"
}
console.log(newSecret); // In this case I also wouldn't be able to access to newSecret because
// LET & CONST are the new keywords to declare variables but, Both of them only lives in an specific enviroment
// inside a block scope, inside a function or even in the global scope
// LET and CONST are just BLOCK SCOPED ALTERNATIVES FOR VARIABLE DECLARATION

let greet;
const sayHi = () => {
  greet = 'Hello dude';
  console.log(`I've been called. ${greet}`);
}

console.log(greet); // undefined
sayHi(); // I've been called. Hello dude

