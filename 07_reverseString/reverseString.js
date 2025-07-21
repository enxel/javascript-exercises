const reverseString = function(str) {
    let reverse = [];
    for (let i = 0; i < str.length; i++) {
        reverse[str.length - 1 - i] = str[i];
    }

    return reverse.join("");
};

// Do not edit below this line
module.exports = reverseString;
