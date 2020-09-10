const repeatString = function(str, times) {
    if(times < 0)
        return "ERROR";
    else if (times == 0)
        return "";
    let tempString = "";
    for(i = 0; i < times; i++){
        tempString += str;
    }
    return tempString;
}

module.exports = repeatString
