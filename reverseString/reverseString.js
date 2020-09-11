const reverseString = function(str) {
    let tempStr = "";
    for(i = 0; i < str.length; i++){
        tempStr = str.charAt(i) + tempStr;
    }
    return tempStr;
}

module.exports = reverseString
