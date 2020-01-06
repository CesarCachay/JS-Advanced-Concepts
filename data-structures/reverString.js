function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Please check the input of the function";
  }

  const backToFront = [];
  const stringLength = str.length - 1;

  for (let i = stringLength; i >= 0; i--) {
    backToFront.push(str[i]);
  }

  console.log(backToFront);

  return backToFront.join("");
}

function anotherReverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Please check the input of the function";
  }

  return str
    .split("")
    .reverse()
    .join("");
}

function thirdWay(str) {
  return [...str].reverse().join("");
}

// console.log(reverse("Hi from Peru, coding interviews!"));
// console.log(anotherReverse("Hi from Peru, coding interviews!"));
// console.log(thirdWay("Hi from Peru, coding interviews!"));
