const repeatString = function(word, times) {

    if (times < 0) {
        return "ERROR";
    }
    let string = ''
    for (num = 0; num < times; num++){
        string += word
    }
    return string
};

// Do not edit below this line
module.exports = repeatString;
