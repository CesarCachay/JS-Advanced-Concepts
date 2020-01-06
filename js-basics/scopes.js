let person = "Cesar";

function callMySecondName() {
  let person = "Vangelis";
  console.log(person);
}

function callMyLastName() {
  let person = "Cachay";
  console.log(person);
}

function changeMyName() {
  person = "Majito";
  console.log(`Hey men your girlfriend is ${person}`);
}

console.log(person);

// This way won't change my name, it only accepts an argument in the function.
function changeMyName(person) {
  person = "Majito";
  console.log(`Hey men your girlfriend is ${person}`);
}
