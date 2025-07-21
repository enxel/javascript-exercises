const sumAll = function(n1,n2) {
    if (!Number.isInteger(n1) || !Number.isInteger(n2) || n1 < 0 || n2 < 0) {
        return "ERROR";
    }

    let acc = 0;
    let a = (n1 <= n2) ? n1 : n2;
    let b = (n1 <= n2) ? n2 : n1;

    for (let i = a; i <= b; i++) {
        acc += i;
    }

    return acc;
};

// Do not edit below this line
module.exports = sumAll;
