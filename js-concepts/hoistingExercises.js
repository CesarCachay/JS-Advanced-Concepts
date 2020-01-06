var one = 1;
var one = 2;

console.log(one);

// Here what will happen is that the very last line of code or I mean that last value assigned to our variable
// will be the one which will be printed

function a() {
  console.log("hi");
}

function a() {
  console.log("bye");
}

a();

// Functions it's fully hoisted that's why in the memory heap the function "a" will be re-written and the function "a"
// for that reason our function will lose the ability to console "hi", because it was totally re-written and now only
// prints "bye"

var favoriteThing = "eat ají de gallina";

var sayMyFavorite = function() {
  console.log(`My favorite thing is ${favoriteThing}`);

  var favoriteThing = "hang out and eat tutu";
  console.log(`My Really favorite thing to do is ${favoriteThing}`);
};

sayMyFavorite();

// Whats happening underneath the hood about the last exercise
var favoriteThing = undefined;
var sayMyFavorite = undefined;

favoriteThing = "eat ají de gallina";

sayMyFavorite = function() {
  var favoriteThing = undefined;
  console.log(`My favorite thing is ${favoriteThing}`);

  favoriteThing = "hang out and eat tutu";
  console.log(`My really favorite thing to do is ${favoriteThing}`);
};

sayMyFavorite();

// With this exercise we are using hoisting which is not a good practice, to avoid it you can simply use CONST & LET
// instead of var. This way below is the correct one and will throw an error of before initialization constant.

const favoriteThing = "play COD";

const sayMyFavorite = function() {
  console.log(`My favorite thing is ${favoriteThing}`);

  const favoriteThing = "eat tutu";
  console.log(`My really favorite thing is ${favoriteThing}`);
};

sayMyFavorite();

// ------------------------ EXTRA EXERCISE -----------------------//

function bigBrother() {
  function littleBrother() {
    return "it is me!";
  }
  return littleBrother();
  function littleBrother() {
    return "no me!";
  }
}

// Before running this code, what do you think the output is?
bigBrother(); // => no me
