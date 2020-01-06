// Objects

const animals = {
  dog: {
    age: 5,
    quantity: 3,
    names: ["Negro", "Chester", "Terry"]
  },
  cat: {
    age: 3,
    quantity: 1,
    names: ["Mau"]
  },
  parrot: {
    age: 10,
    quantity: 1,
    names: ["Lorenzo"]
  }
};

const { dog, ...rest } = animals;

// Arrays

const array = [1, 2, 3, 4, 5];

const sum = (a, b, c, d, e) => {
  return a + b + c + d + e;
};

// In both cases works in the same way
sum(...array); // 15
sum(1 + 2 + 3 + 4 + 5); // 15

// ----------------- REACT USES SPREAD OPERATOR BEFORE IT WAS OFFICIALLY PART OF JS IN 2018 ------------------- //

// Using spread operator like in React
const ages = {
  Cesar: 23,
  Majito: 24,
  Anthony: 18,
  Julissa: 28
};

const objectSpread = (p1, p2, p3) => {
  console.log(p1);
  console.log(p2);
  console.log(p3);
};

const { Cesar, Majito, ...rest } = ages;

objectSpread(Cesar, Majito, rest);
