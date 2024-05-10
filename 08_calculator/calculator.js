const add = function(number_1, number_2) {
  let result;

  result = number_1 + number_2;

  return result;
};

const subtract = function(number_1, number_2) {
  let result;

  result = number_1 - number_2;

  return result;
};

const sum = function(arr) {
  const sum_of_arr = arr.reduce((total, current_value) => {
    return total + current_value;
  }, 0);

  return sum_of_arr;
};

const multiply = function(arr) {
  const product_of_arr = arr.reduce((total, current_value) => {
    return total * current_value;
  }, 1);

  return product_of_arr;
};

const power = function(number_1, number_2) {
	power_number = number_1 ** number_2;

  return power_number;
};

const factorial = function(number) {
	if (!number) return 1;
  let total;
  total = 1;
  for (let i = 1; i <= number; i++)
    {
      total *= i;
    }
  return total;
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


