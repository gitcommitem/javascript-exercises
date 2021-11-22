const reverseString = function(str) {
let letters = str.split("");
letters.reverse();
return letters.join(""," ");
};

// Do not edit below this line
module.exports = reverseString;
