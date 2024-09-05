const add = function(num, num1) {
  return num += num1
};

const subtract = function(num, num1,) {
	return num -= num1;
};

const sum = function(arr) {
  if (arr.length === 0) {
    return 0;
  }else if (arr.length === 1) {
    return arr[0]
  }else{
    const product = arr.reduce((accumulator, currentItem) => {
      return accumulator += currentItem;
   }, 0)
   return product
  }
};

const multiply = function(arr) {
  result = arr.reduce((accumulator, currentItem) => {
    return accumulator * currentItem;
  }, 1)
  return result
};

const power = function(num, num1) {
	return num ** num1;
};

const factorial = function(fac) {
  let accumulator = 1
  if (fac === 0) {
    return 1
  }else{
    for (let num = fac; num >= 1; num--){
      accumulator *= num;
    }
  }
  return accumulator
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
