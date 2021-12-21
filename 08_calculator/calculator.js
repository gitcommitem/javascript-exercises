const add = function(firstNum,secondNum) {
	return firstNum + secondNum
};

const subtract = function(firstNum,secondNum) {
	return firstNum - secondNum
};

const sum = function(array) {
return array.reduce(
  function(firstNum,secondNum){
    //NEEDS this return or else reduce will come back undefined
    return firstNum += secondNum;
  }, 0
);
	
};

const multiply = function(array) {
  return array.reduce(
    function(firstNum,secondNum){
      return firstNum * secondNum;
    }, 1
  );

};

const power = function(number,power) {
return number**power;
};

const factorial = function(n) {
	if(n !== 1 && n !== 0){
    for(i = n-1; i >= 1; i--){
      n *= i;
    }
    return n
  }
  else{
    return 1;
  }
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
