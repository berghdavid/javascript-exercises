const caesar = function(str, shift) {
    var arr = new String;
    for (i = 0; i < str.length; i++){
        var letterCode = str.charCodeAt(i);
        if(letterCode >= 97 && letterCode <= 122){
            var num = (letterCode - 97 + shift) % 26;
            while(num < 0){
                num += 26;
            }
            arr +=  String.fromCharCode(97 + num);
        }
        else if (letterCode >= 65 && letterCode <= 90){
            var num = (letterCode - 65 + shift) % 26;
            while(num < 0){
                num += 26;
            }
            arr +=  String.fromCharCode(65 + num);
        }
        else{
            arr += str[i];
        }
    }
    return arr;
}

module.exports = caesar
