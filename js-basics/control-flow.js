greetClient("Cesar");

function sayHi(name) {
  if (name === "Cesar") {
    // By this way you will get an output
    alert(`Hello my creator ${name}!`);
  } else if (name === "Majito") {
    alert(`I love you ${name}`);
  } else {
    alert(`Hello ${name}!`);
  }
  return `You have greeted ${name}`;
}

// A variable just can handle 1 value at a time
const firstName = "Cesar";
const lastName = "Cachay";
if (firstName === "Cesar" && lastName === "Cachay") {
  console.log("Hello nice hear you again!");
  //You will get an undefined if you return a console.log
}

function multiply(a, b) {
  if (a > 10 || b > 10) {
    return "It's a big number";
  } else {
    return a * b;
  }
}

const myUser = {
  username: "Shiffu",
  games: ["Dota 2", "Call of Duty Mobile", "Clash Royale"],
  nationality: "Peruvian"
};
