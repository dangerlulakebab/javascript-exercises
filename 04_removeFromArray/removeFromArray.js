const removeFromArray = function(array, ...objects) {
let newArray = array.filter(item => !objects.includes(item))

return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
