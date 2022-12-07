const findTheOldest = function(people) {
  const today = new Date();
  const currentYear = today.getFullYear();
  
  for (let i = 0; i < people.length; i++) {
    if (!(people[i].hasOwnProperty('yearOfDeath'))) {
      people[i].yearOfDeath = currentYear;
    }
  }

  people.sort(function(a, b) {
    const lastPerson = a.yearOfDeath - a.yearOfBirth;
    const nextPerson = b.yearOfDeath - b.yearOfBirth;
    return lastPerson > nextPerson ? -1 : 1;
  });
  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
