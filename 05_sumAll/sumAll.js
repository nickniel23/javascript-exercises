const sumAll = function(lower_range, upper_range) {
    let sum = 0;

    if (lower_range < 0 || upper_range < 0) {
        return "ERROR";
    }

    if ( !Number.isInteger(lower_range) || !Number.isInteger(upper_range) ) {  
        return "ERROR";
    }

    if (lower_range > upper_range) {
        let temp = lower_range;
        lower_range = upper_range;
        upper_range = temp;
    }

    for (let i = lower_range; i <= upper_range; i++) {
        sum+=i;
    }

    return sum;
};
// Do not edit below this line
module.exports = sumAll;

