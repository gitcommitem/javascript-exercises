const repeatString = function (hey,num) {
    let repeatedHey = "";
    
    if(num < 0){
        return "ERROR";
    }

    for(let i = 0; i < num; i++){
        //repeatedHey gets merged with hey and then repeatedHey's value gets updated
        repeatedHey += hey;
        }
    //Need to return the updated repeatedHey value on each loop
    return repeatedHey;
    };

// Do not edit below this line
module.exports = repeatString;
