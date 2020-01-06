const validateUser = bool => {
  return bool;
};

const theFalse = validateUser(false)
  ? "The name of your dog is Negrito"
  : "You don't need to know that information";

const theTrue = validateUser(true)
  ? "The name of your dog is Negrito"
  : "You don't need to know that information";

const automatedAnswer =
  "Your dog name is " + (validateUser(false) ? "Negrito" : "Dunkan");

const revealName = bool => {
  return (
    `Your the answer is ${bool} so ` +
    (bool ? "Your name is Cesar" : "You won't be able to handle the truth!")
  );
};

const getName = bool => {
  if (bool) {
    return `The answer is ${bool} ` + "your name is Cesar";
  } else {
    return `The answer is ${bool} ` + "you won't be able to handle the truth!";
  }
};
