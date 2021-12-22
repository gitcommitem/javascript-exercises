const findTheOldest = function(arrayObject) {
return arrayObject.reduce(function(firstPerson,secondPerson){
let oldestPerson = getAge(firstPerson.yearOfBirth, firstPerson.yearOfDeath);
let currentPerson = getAge(secondPerson.yearOfBirth, secondPerson.yearOfDeath);
return (oldestPerson < currentPerson) ? secondPerson : firstPerson;
})

function getAge(birth,death){
if(death === undefined){
    death = new Date().getFullYear();
}
return death - birth;
}

};

// Do not edit below this line
module.exports = findTheOldest;
