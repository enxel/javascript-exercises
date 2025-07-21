const removeFromArray = function(A, ...numbers) {
    for (let n of numbers) {
        while(A.includes(n)){
            A.splice(A.findIndex(i=> i === n), 1);
        }
    }

    return A;
};

// Do not edit below this line
module.exports = removeFromArray;
