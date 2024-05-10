const getTheTitles = function(book_array) {
    book_title_array = book_array.map( (book) => book.title);
    return book_title_array;
};

// Do not edit below this line
module.exports = getTheTitles;
