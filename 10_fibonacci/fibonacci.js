const fibonacci = function(x) {
  const xInt = parseInt(x);
  if (xInt < 0) {
    return "OOPS";
  }
  let fibArray = [1, 0];
  for (let i = 0; i < xInt; i++) {
    fibArray.unshift(fibArray[0] + fibArray[1]);
  } 
  return fibArray[1];
};

// Do not edit below this line
module.exports = fibonacci;
