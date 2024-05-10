const fibonacci = function(count) {
    if (typeof count !== "number") {
        count = parseInt(count);
    }

    if (count < 0) return "OOPS";

    let fib_array = [0, 1];

    for (let i = 2; i <= count; i++) {
        fib_array.push(fib_array[i - 1] + fib_array[i - 2]);
    }

    return fib_array[count];
};

// Do not edit below this line
module.exports = fibonacci;
