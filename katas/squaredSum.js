function squareSum(numbers) {
  // const arr = numbers;
  const total = numbers.reduce((accum, number) => {
    number = number ** 2;
    return accum + number;
  }, 0);
  return total;
}

console.log(squareSum([0, 3, 4, 5]));

function squareSum(numbers) {
  return numbers.reduce(function(sum, n) {
    return n * n + sum;
  }, 0);
}

function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}
