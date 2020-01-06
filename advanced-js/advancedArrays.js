// ----------------------------- FOREACH ------------------------------------- //
// forEach doesn't return anything that's why I need to store somewhere else
const arr = [2, 5, 10, 50];

const doubledArray = [];
const newArray = arr.forEach(number => doubledArray.push(number * 2));
// It won't return something it doesn't matter if you put the return keyword
const returned = arr.forEach(number => {
  return doubledArray.push(number * 2);
});

// forEach also don't modify the original array, after we push in the empty array we will get what we wanted
console.log(arr);
console.log(doubledArray);

// ----------------------------- MAP ------------------------------------- //

// Map always return something that's why is considered as pure function, it you don't use the return keyword
// it will return an array of undefined values
const myArr = [3, 9, 23, 12];

// With map we totally creates a new array and here we assigned those values into the constant mapArray
const mapArray = myArr.map(num => {
  return `Our number is ${num * 3}`;
});

// If we console the original array we will realize that it doesn't change at all
console.log(myArr);
console.log(mapArray);

// ----------------------------- FILTER ------------------------------------- //
// With the method filter we are going to put a condition in the return of the function, as it happens with map
// filter, will always return something under the condition we specified.
const ages = [14, 15, 17, 18, 19, 25, 29];

// The values that will return are the ones that fits with the condition, it means if true an item of the array
// the value that returns true will be inside of the new array, if returns false it wouldn't be inside of the new array
const legalAge = ages.filter(age => {
  return age >= 18;
});

console.log(ages);
console.log(legalAge);

// ----------------------------- REDUCE ------------------------------------- //
// This method will always have 2 mandatory arguments which are accumulator and the specific item of the array
// After the return of this method will have another argument which gives us the starting point
// In this method all the methods will be transformed into just one value which will be the sum among all the items
// in the array and also the starting point.
const expenses = [50, 30, 450, 400, 1250];
const debt = 500;

const reducedExpenses = expenses.reduce((accumulator, expense) => {
  return accumulator + expense;
}, debt);

console.log(reducedExpenses);

// Another example of Reduce
const names = [
  "Cesar",
  "Maria",
  "Luis",
  "Maria",
  "Maria Fernanda",
  "Maria Jose",
  "Jose",
  "Luis Jose"
];

const repeteadNames = names.reduce((accumNames, name) => {
  accumNames[name] = (accumNames[name] || 0) + 1;
  return accumNames; // In this method you can return whatever you want, not only an array
}, {}); // Here as initial value we can have an empty object because we are gonna return items with keys and values;

console.log(repeteadNames);

const repeteadNames2 = names.reduce((accum, name) => {
  accum[name] = (accum[name] || 0) + 1;
}, []); // You don't need to actually just pust a number in the initial value, it could be whatever you want
// But if you put an empty array in the initial value you will get, an array with the appearence of an object

console.log(repeteadNames2);
console.log(repeteadNames2["Cesar"]); // If you want to access to the first item you will need to do like this

// Another example
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

const counterOfVowels = arr => {
  const haha = arr.reduce((accum, vowel) => {
    console.log("accum", accum);
    console.log("vowel", vowel);
    accum[vowel] = (accum[vowel] || 0) + 1;
    return accum;
  }, {});
  return haha;
};

// This function allows to make a counter of leters repeated in an string
const counterOfVowelsOfString = string => {
  const separatedString = string.split("");
  const repeatedVowels = separatedString.reduce((accum, vowel) => {
    accum[vowel] = (accum[vowel] || 0) + 1;
    return accum;
  }, {});
  return repeatedVowels;
};
