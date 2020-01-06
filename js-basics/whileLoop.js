// While loop increasing a counter
let increasingCounter = 0;

while (increasingCounter < 5) {
  console.log(increasingCounter);
  increasingCounter++;
}

let decreasingCounter = 10;

while (decreasingCounter > 0) {
  console.log(decreasingCounter);
  decreasingCounter--;
}

// DO WHILE LOOP
let otherCounter = 0;

do {
  console.log(otherCounter);
  otherCounter++;
  //this one will run what is inside the block of "do" and then, check if the condition match, if it doesn't it breaks
  // But it will run it firsth which is totally diferent that in the "while loop" because it first checks and then runs
} while (otherCounter < 5);

//Decreasing do while loop
let otherDecCounter = 10;

do {
  console.log(otherDecCounter);
  otherDecCounter--;
} while (otherDecCounter > 0);
