const removeFromArray = function(array,...e) {
    let tempArr = [];

    array.forEach(element => {
        if(!e.includes(element))
            tempArr.push(element);
    });

    return tempArr;
}

module.exports = removeFromArray
