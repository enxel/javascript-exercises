const palindromes = function (str) {
    const checker = item => isAlphanumeric(item);
    return str.toLowerCase().split('').reverse().filter(checker).join('') === str.toLowerCase().split('').filter(checker).join('');
};


function isAlphanumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57)  || // 0-9
    (code >= 65 && code <= 90)  || // A-Z
    (code >= 97 && code <= 122)    // a-z
  );
}


// Do not edit below this line
module.exports = palindromes;
