const getTheTitles = function(arrayObject) {
//from our object we want to assemble just the titles and return with an array that is JUST titles only
return arrayObject.map(function(book){return book.title})
};

// Do not edit below this line
module.exports = getTheTitles;
