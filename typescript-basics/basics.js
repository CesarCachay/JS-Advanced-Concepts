// Boolean
var isCool = true;
// Number
var age = 23;
// String
var eyeColor = "brown";
var favoriteQuote = "I'm not old, I'm just " + age;
// Array
var pets = ["cat", "dog", "bird"];
var pets2 = ["lion", "dragon", "lizard"];
// Object
var wizard = {
  a: "John"
};
// null and undefined
var meh = undefined;
var nothing = null;
// Tuple
var basket;
// In this case it means that I need to respect the following structure, 1st an 'string' and the 2nd value a 'number'
basket = ["Lax Galaxy", 1];
// basket = ["Lax Galaxy", "the first!"]; // this one throws an error because is not following the defined structure
// Any (be careful with this because it will be really whatever type of javascript)
var whatever = "I actually can be whatever";
// Void - It is used for functions that doesn't return anyting
var sing = function() {
  console.log("Hello");
  // return "I'm actually here" // This woudln't work because is returning something
};
// Never
var error = function() {
  // It makes sure that any variable in the function won't be true, usually this one throws an error
  // return "I don't have to be here!"; // This type is making sure that the function never returns something
  throw Error("You are wrong!");
};
// Is more recommended to use interfaces over types or alliases
// One difference is, that interfaces create a new name that is used everywhere.
// Type aliases don’t create a new name — for instance, error messages won’t use the alias name
var fightRoboArmy = function(robots) {
  console.log("FIGHT!!!!");
};
// Currently when we put the keyword "as" here it tells to TypeScript that actually is not an empty object, it has the
// type of HumanArmy which is something that we need to take care.
var cesar = {};
cesar.name;
// Function that receives an object as parameter
var selfIntroduction = function(person) {
  if (person.job) {
    return (
      "Hello, My name is " +
      person.name +
      ". I'm " +
      person.age +
      " years old and I'm working as " +
      person.job +
      " "
    );
  }
  return (
    "Hello, My name is " + person.name + ". I'm " + person.age + " years old "
  );
};
selfIntroduction({ name: "Cesar", age: 23, job: "developer" });
// Function that receives more than 1 parameter
var greetPerson = function(name, day) {
  return "Hello " + name + ", Today is " + day;
};
greetPerson("Phillipe", "Sunday");
// Functions that won't have return
var myFunction = function() {
  console.log("I won't return anything");
};
myFunction();
// Functions that returns something
var mySumFunction = function(a, b) {
  return a + b;
};
mySumFunction(4, 4);
// Classes
var Dog = /** @class */ (function() {
  function Dog(sound) {
    this.sing = "woof woof woof";
    this.sing = sound;
  }
  Dog.prototype.barkLouder = function() {
    return "" + this.sing.toUpperCase();
  };
  return Dog;
})();
var chester = new Dog("woof guau woof");
console.log(chester.sing);
console.log(chester.barkLouder());
// Union type
var confused = "I can be two different things!";
var confused2 = 2;
var confused3 = true;
