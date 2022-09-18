const removeFromArray = function(arr, choices) {

    let cleanedArr = arr;

    for (let i = 1; i < arguments.length; i++) {
        const choice = arguments[i];

        const elementExists = (element) => element === choice;

        const foundIndex = cleanedArr.findIndex(elementExists);

        if (foundIndex !== -1) {
            cleanedArr.splice(foundIndex, 1);
        }
    }

    return cleanedArr;
};

// Do not edit below this line
module.exports = removeFromArray;
