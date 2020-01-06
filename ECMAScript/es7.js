const petList = [
  "dog",
  "dragon",
  "dog",
  "dragon",
  "dog",
  "dragon",
  "wolf",
  "cat"
];

petList.includes("dragon"); // true
petList.includes("Dragon"); // false because it's case sensitive
petList.includes("shark"); // false

const myName = "CesarVangelis";

myName.includes("e"); // true
myName.includes("o"); // false

const squareNumber = num => num ** 2;
const atTreeNumber = num => num ** 3;

console.log(squareNumber(3));
console.log(atTreeNumber(4));
