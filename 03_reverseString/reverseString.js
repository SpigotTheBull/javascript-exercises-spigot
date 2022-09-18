const reverseString = function(sentence) {

    let reversedString = '';
    let index = sentence.length - 1;

    while (index >= 0) {
        reversedString += sentence[index];
        --index;
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
