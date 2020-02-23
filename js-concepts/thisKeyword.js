// THIS is the object that the function is a property of.
// THIS refers to whatever is to the left of the dot.
// THIS can be considered as 'Who called me?'

// ---------------------------- BENEFITS OF THIS KEYWORD ---------------------------- //
// 1) Gives to methods the access to of their objects (Where they belong).
// 2) Execute same code for multiple objects.

// ---------------------------- ACCESSING THIS KEYWORD ---------------------------- //
console.log(this); // {} it refers to the global object on this file
// But in the case that we wanna access to the keyword THIS on the google developer console,
// you will get the WINDOW OBJECT = Global Object.

function callingThis() {
  console.log(this);
}

// callingThis(); // This will return the global object of Node JS because we are calling window.callingThis()
// Object [global] {
//   global: [Circular *1],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(util.promisify.custom)]: [Function (anonymous)]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(util.promisify.custom)]: [Function (anonymous)]
//   }
// }

function thisWithStrict() {
  "use strict";
  console.log(this);
}

// In the case we use the tag 'use strict' is to avoid weird behaviour of JavaScript
// thisWithStrict(); // undefined.

// ----------------------------  GIVES METHODS TO ACCESS THEIR OBJECTS ---------------------------- //

const myObj = {
  name: "Cesar",
  country: "Peru",
  describe() {
    return `Hi, I'm ${this.name} and I'm from ${this.country}`;
  }
};
// myObj.describe(); // "Hi, I'm Cesar and I'm from Peru"

const cesarObj = {
  firstName: "Cesar",
  age: "23",
  sayHi: function() {
    return `Hello, my name is ${this.firstName}, I'm ${this.age} years old.`;
  },
  sayHiAndAsk: function() {
    return `${this.sayHi()} \n What's ur name?`;
  }
};

// cesarObj.sayHi(); // "Hello, my name is Cesar, I'm 23 years old."
// cesarObj.sayHiAndAsk(); // "Hello, my name is Cesar, I'm 23 years old. What's ur name?"

// ----------------------------  EXECUTE SAME OF FOR MULTIPLE OBJECTS ---------------------------- //

function importantPerson() {
  console.log(this.herName + "!");
}

const herName = "Mayte";

const obj1 = {
  herName: "Majito",
  importantPerson: importantPerson
};

const obj2 = {
  herName: "Maria",
  importantPerson: importantPerson
};

importantPerson(); // undefined ! - but should be Mayte !
obj1.importantPerson(); // Majito !
obj2.importantPerson(); // Maria !
