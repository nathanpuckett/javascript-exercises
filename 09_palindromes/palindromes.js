const palindromes = function (phrase) {
  let lowerPhrase = phrase.toLowerCase();
  let splitPhrase = lowerPhrase.split("");

  let noPunc = [];
  
  for (let i = 0; i < splitPhrase.length; i++) {
    if (splitPhrase[i].toLowerCase() != splitPhrase[i].toUpperCase()) {
      noPunc.push(splitPhrase[i]);
    }
  }

  let revArray = [];

  for (let i = noPunc.length - 1; i >= 0; i--) {
    revArray.push(noPunc[i]);
  }
  
  if (noPunc.join() === revArray.join()) {
    return true;
  } else {
    return false;
  }

};

// Do not edit below this line
module.exports = palindromes;
