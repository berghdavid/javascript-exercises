const palindromes = function(text) {
    str = text.replace(/\s+/g, '');                         // Remove spaces
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');  // Remove special letters
    str = str.toLowerCase();                                // Turns to lowerCase
    rev = str.split("").reverse().join("");                 // Creates the reverse string
    return str == rev;
}

module.exports = palindromes
