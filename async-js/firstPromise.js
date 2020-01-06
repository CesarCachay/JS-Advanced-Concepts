const firstPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve("This one worked properly!");
  } else {
    reject("Error, this one is broken");
  }
});

// The act of have more than one promises runing is called chainning promises
firstPromise
  .then(result => {
    console.log(result);
  })
  .then(result2 => {
    console.log(resul2);
  })
  .catch(() => console.log("You got an error"))
  .then(result3 => {
    throw Error;
    console.log(result3 + "¿?");
  });

// You need to put the catch statement after all your promises
// You will get an error if you want to throw an error after the catch statement
