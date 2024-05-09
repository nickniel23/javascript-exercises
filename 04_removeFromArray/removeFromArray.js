const removeFromArray = function(initial_array, ...args) {
    const new_array = [];

    initial_array.forEach(element => {
        
        if (!args.includes(element)) {
            new_array.push(element);
        }
    });

    return new_array;
};

// Do not edit below this line
module.exports = removeFromArray;
