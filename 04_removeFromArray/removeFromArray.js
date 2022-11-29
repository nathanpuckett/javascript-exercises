const removeFromArray = function(inputArray, ...toRemove) {
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < toRemove.length; j++) {
      if (inputArray[i] === toRemove[j]) {
        inputArray.splice(i, 1);
        i--;
      }
  
    }
  }
  return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
