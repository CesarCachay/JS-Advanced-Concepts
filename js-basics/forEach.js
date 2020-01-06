// Getting the index of items inside the array with for loop and forEach
let myList = [
  "Call Majito",
  "Clean room",
  "Buy some gift for Majito",
  "Write some code",
  "Take a shower",
  "Eat my breakfast"
];

// ForEach version
myList.forEach(todo => console.log(todo));

// For loop version
for (index = 0; index < myList.length; index++) {
  console.log(myList[index]);
}

// Getting the tasks or the specific items inside the array with for loop and forEach

let myList = [
  "Call Majito",
  "Clean room",
  "Buy some gift for Majito",
  "Write some code",
  "Take a shower",
  "Eat my breakfast"
];

// ForEach version
myList.forEach((todo, index) => console.log(index));

// For loop version
for (index = 0; index < myList.length; index++) {
  console.log(index);
}
