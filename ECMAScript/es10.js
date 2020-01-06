// ------------------------ METHODS TO HANDLE STRINGS ------------------------ //
// TRIMEND & TRIMSTART //
const userEmail1 = "                   cesar@gmail.com";
const userEmail2 = "thegoodboy@gmail.com                          ";

console.log(userEmail1.trimStart()); // => cesar@gmail.com It deletes all the spaces of the start of the string
console.log(userEmail2.trimEnd()); // => thegoodboy@gmail.com It deletes all the spaces of the end of the string

// ------------------------ METHODS TO HANDLE ARRAYS ------------------------ //

// FLAT //
const myArr = [1, 2, 4, 5];

myArr.flat(); // => [1,2,4.5] It returns an array and is used for nested arrays

const nestedArr = [1, 2, [3, 4, 5], 10];

nestedArr.flat(); // => [1,2,3,4,5,10]

const veryNestedArr = [1, [2, [4, 8, 16], 4], 50, 99];

veryNestedArr.flat(); // => [1, 2, [4,8,16], 4, 50, 99]

// But what about you want to complete flat the veryNestedArr you can define the number of nested brackets you wanna delete

veryNestedArr.flat(2); // => [1, 2, 4, 8, 16, 4, 50, 99]

// FLATMAP //
const jurassicPark = [
  ["🦎", "🐔"],
  [[["🦖"]]],
  "🐍",
  ["🦕", ["🦖"]],
  ["🐎", "🐊"],
  "🐢"
];

// It obviously returns a complete flatted map because there isn't 50 levels of nesting arrays
jurassicPark.flat(50); // ["🦎", "🐔", "🦖", "🐍", "🦕", "🦖", "🐎", "🐊", "🐢"]

const jurassicChaos = jurassicPark.flatMap(animal => animal + "🦖");
console.log(jurassicChaos);

// FROMENTRIES // This does the opposite of Object.entries. It means gets an array to return an object

const userProfiles = [
  ["Lushiffer", "elite II"],
  ["GianeFr", "elite I"],
  ["K40s21", "veteran IV"]
];

const myNewObj = Object.fromEntries(userProfiles);

// If you want to do the exactly opposite you can use Object.entries that gets an object and returns an array

const myNewArr = Object.entries(myNewObj);

// ------------------------ METHODS TO HANDLE ERROR ------------------------ //
// This new feature of ES10 will execute whatever is inside of try{} but, if it finds an error the catch{} runs
try {
  sabe + "lokita";
} catch (error) {
  console.log("You messed up!");
  console.log(error);
}

try {
  9 + 60;
} catch (error) {
  console.log("You messed up!");
  console.log(error);
}
