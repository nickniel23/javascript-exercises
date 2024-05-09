const repeatString = function(word, times) {
    if (times < 0) {
        return "ERROR";
    }
    let total_string = "";
    for (let i = 0; i < times; i++) {
        total_string +=word;
    }
    return total_string;
};

// Do not edit below this line
module.exports = repeatString;
