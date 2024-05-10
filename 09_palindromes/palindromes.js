const palindromes = function (word) {
    word = word.toLowerCase();
    let characters = word.split("");
    characters = characters.filter(is_not_punctuation);
    word = characters.join("");

    let reverse = characters.reverse();
    reverse = reverse.join("");
    return word === reverse;
};

const is_not_punctuation = function (character) {
    let punctuations = [".", ",", ":", "!", "?", " "];
    return !(punctuations.includes(character));
}


// Do not edit below this line
module.exports = palindromes;
