const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc,item) => acc + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, item) => acc * item, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	if (n === 0 || n === 1) {
    return 1;
  }
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }

  return fact;
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
