const ftoc = function(fDegree) {
  let cDegree = (fDegree - 32) * (5/9);
  //toFixed returns as a string, so we use + to change it back to number
  return +cDegree.toFixed(1);
};

const ctof = function(cDegree) {
  let fDegree = (cDegree * (9/5)) + 32;
  //toFixed returns as a string, so we use + to change it back to number
  return +fDegree.toFixed(1);

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
