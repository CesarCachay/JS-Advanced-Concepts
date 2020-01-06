let myList = [
  "Call Majito",
  "Clean room",
  "Buy some gift for Majito",
  "Write some code",
  "Take a shower",
  "Eat my breakfast"
];

for (index = 0; index < myList.length; index++) {
  // const test = index
  // console.log(test)
  let myTask = `${myList[index]} !`;
  console.log(myTask);
  // Another way that allows to do the same like below
  // myList[index] = myList[index] + "!";
}

let myTodos = [
  "clean room",
  "brush teeth",
  "workout",
  "look for a job",
  "eat healthy"
];

for (let i = 0; i < myTodos.length; i++) {
  let task = myTodos[i];
  console.log(`Don\'t remenber that you need to ${task}`);
}

// What about if you want to delete all the content with the loop

let todosWillBeDeleted = [
  "clean room",
  "brush teeth",
  "workout",
  "look for a job",
  "eat healthy"
];

// This one won't do it in the properly way
for (index = 0; index <= todosWillBeDeleted.length; index++) {
  todosWillBeDeleted.pop();
  console.log(todosWillBeDeleted);
}

// This one is the correct one
const todosLength = todosWillBeDeleted.length;
for (index = 0; index <= todosLength; index++) {
  todosWillBeDeleted.pop();
  console.log(todosWillBeDeleted);
}
