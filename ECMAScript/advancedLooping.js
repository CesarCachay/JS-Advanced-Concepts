// Iterables and Enumerables
const fruitList = ["apple", "pear", "watermelon", "grapes", "peach"];

const detailList = {
  apple: 2,
  pear: 9,
  watermelon: 4,
  grapes: 58,
  peach: 10
};

// for loop
for (i = 0; i < fruitList.length; i++) {
  console.log(fruitList[i]);
}

// forEach
fruitList.forEach(fruit => console.log(fruit));

// for of => go over one by one item inside of the iterables
// Iterating - Arrays and Strings || is for iterables which are STRINGS and ARRAYS
// Objects are not iterables, if you run an object in the "FOR OF" you will get an error
for (item of detailList) {
  console.log(item);
}

// for in => loop over an see the object properties
// is for enumerables which are ARRAYS AND OBJECTS || Enumerable - Objects
// OJO: arrays are considered as objects for the following
const fruitListAsObject = {
  0: "apple",
  1: "pear",
  2: "watermelon",
  3: "grapes",
  4: "peach"
};

for (item in detailList) {
  console.log(item);
}
