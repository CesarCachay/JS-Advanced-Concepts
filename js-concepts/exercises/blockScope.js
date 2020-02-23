const myVarLoop = () => {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(`final ${i}`);
};

myVarLoop();
// 0
// 1
// 2
// 3
// 4
// final 5

const myLetLoop = () => {
  let i;
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
  console.log(`Final ${i} is reached!`);
};

myLetLoop();
// 0
// 1
// 2
// ReferenceError

const myLetLoopFixed = () => {
  let i;
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
  console.log(`Final ${i} is reached!`);
};

myLetLoopFixed();
// 0
// 1
// 2
// Final undefined is reached!
