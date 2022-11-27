const reverseString = function(inputString) {
  const splitString = inputString.split("");
  splitString.reverse();
  let outputString = '';
  for (const letter of splitString) {
    outputString += letter;
  }
  return outputString;
};

// Do not edit below this line
module.exports = reverseString;
