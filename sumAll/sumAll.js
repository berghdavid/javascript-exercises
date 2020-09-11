const sumAll = function(nr1, nr2) {
    if(nr1 < 0 || typeof nr1 != "number" || nr2 < 0 || typeof nr2 != "number")
        return "ERROR";
    let sum = 0;
    let arr = [Math.min(nr1, nr2), Math.max(nr1, nr2)];
    for(i = arr[0];i <= arr[1]; i++){
        sum += i;
    }
    return sum;
}

module.exports = sumAll
