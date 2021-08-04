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

const isValidRepetition = (stringRomans) => {
  const romans = ['I', 'X', 'C', 'M'];

  const count = romans.map((letter) => stringRomans.filter((e) => e === letter).length);
  const isValid = count.every((n) => n < 4);

  return isValid;
};

const isValidChar = (arrayLetters) => {
  const romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  const isFound = arrayLetters.every((e) => romans.includes(e));
  return isFound;
};

const isValidSubstraction = (roman) => {
  const romans = ['VX', 'VL', 'VC', 'VD', 'VM', 'LC', 'LD', 'LM', 'DM'];
  const exist = romans.map((romansa) => roman.indexOf(romansa));
  const valid = exist.every((n) => n < 0);
  /*   const romanFirstLetter = roman.slice(-2);
  let isValid = true;
  if (romanFirstLetter) {
    isValid = romans.some((letter) => letter === romanFirstLetter);
  } */
  return valid;
};
/*
console.log('isValidSubstraction', isValidSubstraction('VX')); */

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

  if (!isValidRepetition(arrayRomans)) {
    throw new Error('Too many repetitions of roman numeral I, X, C, M');
  }
  if (!isValidSubstraction(romanCapital)) {
    throw new Error('Invalid substraction prefix V');
  }
};
