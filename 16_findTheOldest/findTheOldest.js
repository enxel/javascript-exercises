const findTheOldest = function(arr) {
    return arr.sort(function (a, b) {
        let aAge, bAge;

        if (a.yearOfDeath === undefined) {
            aAge = (new Date()).getFullYear() - a.yearOfBirth;
        } else {
            aAge = a.yearOfDeath - a.yearOfBirth;
        }
        if (b.yearOfDeath === undefined) {
            bAge = (new Date()).getFullYear() - b.yearOfBirth;
        } else {
            bAge = b.yearOfDeath - b.yearOfBirth;
        }

        return bAge - aAge;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
