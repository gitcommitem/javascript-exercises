const sumAll = function(startNum,endNum) {
    let totalSum = 0;
    
    if(startNum > endNum){

        for(i = startNum; i >= endNum; i--){
            totalSum += i;
         }

    }
    else{

        for(i = startNum; i <= endNum; i++){
            totalSum += i;
         }

    }

    if(typeof endNum !== "number" || totalSum < 0){
        return "ERROR";
    }

    return totalSum


};

// Do not edit below this line
module.exports = sumAll;
