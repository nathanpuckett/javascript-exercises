const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(sumArray) {
	let sum = 0;
  for (const element of sumArray) {
    sum += element;
  }
  return sum;
};

const multiply = function(factors) {
  let product = 1;
  for (const factor of factors) {
    product *= factor;
  }
  return product;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(x) {
	let factorial = 1;
  for (let i = 1; i <= x; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
