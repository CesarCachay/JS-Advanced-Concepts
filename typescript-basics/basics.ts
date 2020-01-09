// Boolean
let isCool: boolean = true;

// Number
let age: number = 23;

// String
let eyeColor: string = "brown";
let favoriteQuote: string = `I'm not old, I'm just ${age}`;

// Array
let pets: string[] = ["cat", "dog", "bird"];
let pets2: Array<string> = ["lion", "dragon", "lizard"];

// Object
let wizard: object = {
  a: "John"
};

// null and undefined
let meh: undefined = undefined;
let nothing: null = null;

// Tuple
let basket: [string, number];
// In this case it means that I need to respect the following structure, 1st an 'string' and the 2nd value a 'number'
basket = ["Lax Galaxy", 1];
// basket = ["Lax Galaxy", "the first!"]; // this one throws an error because is not following the defined structure

// Any (be careful with this because it will be really whatever type of javascript)
let whatever: any = "I actually can be whatever";

// Void - It is used for functions that doesn't return anyting
let sing = (): void => {
  console.log("Hello");
  // return "I'm actually here" // This woudln't work because is returning something
};

// Never
let error = (): never => {
  // It makes sure that any variable in the function won't be true, usually this one throws an error
  // return "I don't have to be here!"; // This type is making sure that the function never returns something
  throw Error("You are wrong!");
};

// Interface
interface RobotArmy {
  count: number;
  type: string;
  magic: string;
}

// Type alliases
type AnotherArmy = {
  count: number;
  type: string;
  magic: string;
};
// Is more recommended to use interfaces over types or alliases

// One difference is, that interfaces create a new name that is used everywhere.
// Type aliases don’t create a new name — for instance, error messages won’t use the alias name

let fightRoboArmy = (robots: RobotArmy) => {
  console.log("FIGHT!!!!");
};

// Both actually are the same, interfaces are completely useful to refactor all the objects
// let fightRoboArmy2 = (robots: {
//   count: number;
//   type: string;
//   magic: string;
// }) => {
//   console.log("FIGHT!!!!");
// };

// Type Assertion
interface PersonInterface {
  name: string;
  age: number;
  job?: string; // it means that this is optional
  college?: string; // it means that this is optional
}

// Currently when we put the keyword "as" here it tells to TypeScript that actually is not an empty object, it has the
// type of HumanArmy which is something that we need to take care.
let cesar = {} as PersonInterface;
cesar.name;

// Function that receives an object as parameter
let selfIntroduction = (person: {
  name: string;
  age: number;
  job?: string;
}) => {
  if (person.job) {
    return `Hello, My name is ${person.name}. I'm ${person.age} years old and I'm working as ${person.job} `;
  }
  return `Hello, My name is ${person.name}. I'm ${person.age} years old `;
};

selfIntroduction({ name: "Cesar", age: 23, job: "developer" });

interface greet {
  name: string;
  day: string;
}

// Function that receives more than 1 parameter
const greetPerson = (name: string, day: string) => {
  return `Hello ${name}, Today is ${day}`;
};

greetPerson("Phillipe", "Sunday");

// Functions that won't have return
const myFunction = (): void => {
  console.log("I won't return anything");
};

myFunction();

// Functions that returns something
const mySumFunction = (a: number, b: number): number => {
  return a + b;
};

mySumFunction(4, 4);

// Classes
class Dog {
  public sing: string = "woof woof woof";
  constructor(sound: string) {
    this.sing = sound;
  }

  barkLouder(): string {
    return `${this.sing.toUpperCase()}`;
  }
}

let chester = new Dog("woof guau woof");
console.log(chester.sing);
console.log(chester.barkLouder());

// Union type
let confused: string | number = "I can be two different things!";
let confused2: string | number = 2;
let confused3: string | number | boolean = true;
