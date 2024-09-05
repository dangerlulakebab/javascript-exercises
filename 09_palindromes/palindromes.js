const palindromes = function (str) {
    const cleanedString = str
    .toLowerCase()
    .split("")
    .filter(c => (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9'))
    .join('')
    
    let reverseStr = cleanedString.split('').reverse().join('')


    return cleanedString === reverseStr
};

// Do not edit below this line
module.exports = palindromes;
