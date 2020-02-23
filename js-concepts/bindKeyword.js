// -------- BIND --------------//
// BINDS ALLOW US TO STORE THE THIS KEYWORD OR A FUNCTION FOR A LATER USE,
// BECAUSE BIND RETURNS ANOTHER FUNCTION WITH A CERTAIN CONTEXT AND PARAMETERS

// --------- WHY IS USEFEUL? --------- //
// It's main benefit for us is because it allow to return a new function to call later on, with certain context or certain this keyword
// Currying

// ------------ BASIC EXAMPLE (FOR ME) ------------ //

const myObj = {
  name: "Cesar",
  sing() {
    console.log("prev", this);
    var anotherFunction = function() {
      console.log("after", this);
    };
    return anotherFunction.bind(this);
  }
};

myObj.sing(); // prev {name: "Cesar", sing: ƒ}
myObj.sing()(); // prev {name: "Cesar", sing: ƒ} // after {name: "Cesar", sing: ƒ}

// --------- INTERMEDIATE EXAMPLE (FOR ME) --------- //

const wizard = {
  name: "Merlin",
  health: 100,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  }
};

const archer = {
  name: "Robin Hood",
  health: 30
};

console.log("1", archer);
wizard.heal.bind(archer, 40, 70); // Bind like call just accepts a list of parameters, an array of parameters is not allowed
console.log("2", archer);
// If we run the lines 21-23 we won't be able to heal himself

// TO EXECUTE OUR FUNCTION TO HEAL OUR ARCHER WE NEED TO STORE IT TO A VARIABLE AND THEN CALL THE FUNCTION TO EXECUTE IT.
console.log("before healing", archer);
const healArcher = wizard.heal.bind(archer, 40, 70); // Here we are storing this function that will return a function for later call
healArcher(); // Here we are executing the function to actually heal our archer
console.log("after healing", archer);

// --------- ADVANCED EXAMPLE (FOR ME) --------- //

const legendaryKnight = {
  name: "Sven",
  health: 400,
  damage: 50,
  armor: 5,
  godStrength(multiplyDmg) {
    return (this.damage = this.damage * multiplyDmg);
  },
  warCry(extraArmor) {
    return (this.armor = this.armor + extraArmor);
  }
};

const skeletonKing = {
  name: "Wraith King",
  health: 100,
  damage: 30,
  armor: 2,
  reencarnation() {
    if (this.health < 0) {
      return (this.health = this.health + 221);
    }
    return "You still alive";
  },
  haraKiri() {
    return (this.health = this.health - 101);
  }
};

// USING BIND IN THE SAME OBJECT
console.log("sven in home", legendaryKnight); // Sven with damaga of 50
const svenMadness = legendaryKnight.godStrength.bind(legendaryKnight, 4); // storing our function of godStrength for later use
svenMadness(); // executing our stored function
console.log("sven in WAR", legendaryKnight); // Sven with damage of 200

// USING BIND IN THE SAME OBJECT WITH CONDITIONALS
console.log("WK alive", skeletonKing);
const keepAliveKing = skeletonKing.reencarnation.bind(skeletonKing);
keepAliveKing();
console.log("WK possibly death", skeletonKing);
const suicide = skeletonKing.haraKiri.bind(skeletonKing);
suicide();
console.log("WK after harakiri", skeletonKing);
keepAliveKing();
console.log("WK reencarnated", skeletonKing);

// USING BIND IN ANOTHER OBJECT
console.log("WK normal", skeletonKing); // Wraith King with armor of 2
const stealPower = legendaryKnight.warCry.bind(skeletonKing, 20); // storing our function of godStrength stealed from sven for later use
stealPower(); // executing the function that stored the skill of sven
console.log("WK madness look armor", skeletonKing); // Wraith King with armor of 22
