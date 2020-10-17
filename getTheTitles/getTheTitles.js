const getTheTitles = function(books) {
    var arr = new Array;
    for (book in books){
        arr[book] = books[book].title;
    }
    return arr;
}

module.exports = getTheTitles;
