const isValidLetters = (stringRomans) => {
  const romans = ['V', 'L', 'D'];

  const count = romans.map((letter) => stringRomans.filter((e) => e === letter).length);

  const valid = count.every((n) => n < 2);

  return valid;
  // const romanLettersL = stringRomans.filter((e) => (e === 'L')).length;
  // const romanLettersV = stringRomans.filter((e) => (e === 'V')).length;
  // const romanLettersD = stringRomans.filter((e) => (e === 'D')).length;
  // let isValid = true;
  // if (romanLettersD >= 2 || romanLettersV >= 2 || romanLettersL >= 2) {
  //   isValid = false;
  // }
  // return isValid;
};

const isValidChar = (arrayLetters) => {
  const romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  const isFound = arrayLetters.every((e) => romans.includes(e));
  return isFound;
};

module.exports.parse = (roman) => {
  if (typeof roman !== 'string') {
    throw new Error('Not a string');
  }
  const romanCapital = roman.toUpperCase();
  const arrayRomans = romanCapital.split('');

  if (!isValidChar(arrayRomans)) {
    throw new Error('Unknown roman numeral');
  }
  if (!isValidLetters(arrayRomans)) {
    throw new Error('Invalid repetition of number starting with 5: V (5), L (50), D (500)');
  }
};
