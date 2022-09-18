const sumAll = function(beginNumber, endNumber) {

    if (!Number.isInteger(beginNumber) || !Number.isInteger(endNumber)) {
        return 'ERROR';
    }

    if (beginNumber < 0 || endNumber < 0) {
        return 'ERROR';
    }

    let finalSum = 0;

    if (beginNumber <= endNumber) {
        while (beginNumber <= endNumber) {
            finalSum += beginNumber;
            beginNumber += 1;
        }
    } else {
        while (beginNumber >= endNumber) {
            finalSum += beginNumber;
            beginNumber -= 1;
        }
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
