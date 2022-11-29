const sumAll = function(begin, end) {
  let sum = 0;
  if (begin < 0 || end < 0 || typeof begin != 'number' || typeof end != 'number') {
    return 'ERROR';
  } else if (end > begin) {
    for (let i = begin; i <= end; i++) {
      sum += i;
    }
  
  } else {
    for (let i = end; i <= begin; i++) {
      sum += i;
    }

  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
