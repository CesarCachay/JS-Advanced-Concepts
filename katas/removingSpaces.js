function noSpace(x) {
  const separated = x.split("");
  const joined = separated.filter(leter => {
    return leter !== " ";
  });
  return joined.join("");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

function noSpace(x) {
  return x.split(" ").join("");
}

function noSpace(x) {
  var result = "";
  for (var index = 0; index < x.length; index++) {
    if (x[index] !== " ") {
      result += x[index];
    }
  }
  return result;
}

function noSpace(x) {
  return x
    .split("")
    .map(function(val) {
      return val == " " ? "" : val;
    })
    .join("");
}
