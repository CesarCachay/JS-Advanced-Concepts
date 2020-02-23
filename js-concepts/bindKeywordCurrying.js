// function bind with currying
function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 8)); // 32 normal function

let multiplyByFour = multiply.bind(this, 4); // We already are giving 1 of the 2 necessary parameters of the function multiply

console.log(multiplyByFour(10)); // 40

let multiplyByTen = multiply.bind(this, 10);

console.log(multiplyByTen(10)); // 100
