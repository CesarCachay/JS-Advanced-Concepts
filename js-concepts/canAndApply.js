// -------- CALL & APPLY --------------//
// In the basic usage call and apply are used for the same thing. All the functions underneath the hood have call and apply

// --------- WHY IS USEFEUL? --------- //
// We can use call & apply to borrow methods from 1 object to another one instead of saving that on memory(a variable)
// This methods are useful to borrow methods from an object and call it immediately

function a() {
  console.log("Hello there");
}

a.call(); // Hello there
a.apply(); // Hello there
a(); // Hello there
// What is happening here is the a() is a shorthand of a.call()

// USING CALL AND APPLY ON OBJECTS
const wizard = {
  name: "Invoker",
  health: 100,
  heal() {
    return (this.health = 100);
  }
};

const archer = {
  name: "Clinkz",
  health: 30
};

// USING CALL
console.log("previous", archer); // previous {name: "Clinkz", health: 30}
wizard.heal.call(archer);
console.log("after", archer); // after {name: "Clinkz", health: 100}

// USING APPLY
console.log("previous", archer); // previous {name: "Clinkz", health: 30}
wizard.heal.apply(archer);
console.log("after", archer); // after {name: "Clinkz", health: 100}

// -------------------------- CALL AND APPLY CAN RECEIVE ARGUMENTS ---------------------------- //
const magician = {
  name: "Puck",
  health: 50,
  restoreLife(points) {
    return (this.health = this.health + points);
  }
};

const darkMage = {
  name: "Abaddon",
  health: 20
};

// CALL & APPLY WITH ARGUMENTS
console.log("previous", darkMage); // previous {name: "Abaddon", health: 20}
magician.restoreLife.call(darkMage, 250); // In the case of CALL the parameters are received in this way (comma separated list of args)
magician.restoreLife.apply(darkMage, [250]); // In the case of APPLY parameters must be inside an array
console.log("previous", darkMage); // previous {name: "Abaddon", health: 270}
