const palindromes = function (string) {
let convertedString = string.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
let stringReverse = convertedString.split("").reverse().join("");
if(convertedString === stringReverse){
    return true
}
else{
    return false
}
};

// Do not edit below this line
module.exports = palindromes;
