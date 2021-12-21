const fibonacci = function(number) {
if(number < 0){
    return "OOPS"
}
else{
    let firstNum = 0;
    let secondNum = 1;
    
    for(i=0; i < number ;i++){
        sum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = sum;
    }
    
    return firstNum
}

};

// Do not edit below this line
module.exports = fibonacci;
