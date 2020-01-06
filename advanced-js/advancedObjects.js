//---------------------- REFERENCE TYPE ----------------------//
const obj1 = { name: "Cesar" };
const obj2 = obj1;
const obj3 = { name: "Cesar" };

obj1 === obj2; // true
obj1 === obj3; // false
obj2 === obj3; // false, Although it has the same key and value. JS creates object the in another location of the memory

//---------------------- CONTEXT ----------------------//
const obj4 = {
  a: function() {
    console.log(this);
  }
};

obj4; // {a: f}
//---------------------- INSTANTIATION ----------------------//

class Player {
  constructor(name, type, weapon) {
    this.name = name;
    this.type = type;
    this.weapon = weapon;
    console.log("player", this);
  }

  introduce() {
    console.log(`Hello I'm ${this.name}, my type is ${type}`);
  }

  attack() {
    console.log(`I'm a ${this.type} I'll use ${this.weapon}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    // We need to call super to get the properties of the parent Class that we extended in this case was Player
    super(name, type);
    console.log("wizard", this);
  }

  greetPlayer() {
    console.log(`Hello friend, I'm a ${this.type}`);
  }

  useBuff() {
    console.log(`I'm ${this.name} you with my ${this.weapon}`);
  }
}

class Knight extends Player {
  constructor(name, type, weapon) {
    super(name, type, weapon);
    console.log("knight", this);
  }

  attackPlayer() {
    console.log(
      `I'm ${this.name} a famous ${this.type} I'll attack you with my ${this.weapon}`
    );
  }
}

const wizard1 = new Wizard("Shiffu", "Dark Magician");
const knight1 = new Knight("Blo0dezt", "ninja", "burning sword");
