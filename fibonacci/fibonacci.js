const fibonacci = function(nr) {
    var parsed = parseInt(nr);
    if(parsed < 1)
        return "OOPS";
    if(parsed == 1 || nr == 2)
        return 1;
    return fibonacci(parsed-1) + fibonacci(parsed-2);
}

module.exports = fibonacci
