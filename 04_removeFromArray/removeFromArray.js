const removeFromArray = function(array,...itemForRemoval) {
    let itemRemovalLength = itemForRemoval.length;

    for(let i = 0; i < itemRemovalLength; i++){
        //If the item to be removed is not in the array, skip it
        if (array.indexOf(itemForRemoval[i]) === -1){
            continue
        }
        else{
        //indexOf tells the splice what position to remove from
        //1 tells the splice to only remove that one element
        array.splice(array.indexOf(itemForRemoval[i]),1);
        }
    };

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
