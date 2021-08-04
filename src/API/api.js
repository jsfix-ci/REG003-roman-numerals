const isValidLetters = (stringRomans) => {
  const romans = ['V', 'L', 'D'];
  const count = romans.map((letter) => stringRomans.filter((e) => e === letter).length);
  const valid = count.every((n) => n < 2);
  return valid;
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
  const exist = romans.map((e) => roman.indexOf(e));
  const valid = exist.every((n) => n < 0);
  return valid;
};

const isValidPosition = (roman) => {
  const romans = ['IIV', 'IIX', 'IL', 'IC', 'ID', 'IM', 'XXL', 'XXC', 'XD', 'XM'];
  const exist = romans.map((e) => roman.indexOf(e));
  const valid = exist.every((n) => n < 0);
  return valid;
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

  if (!isValidRepetition(arrayRomans)) {
    throw new Error('Too many repetitions of roman numeral I, X, C, M');
  }
  if (!isValidSubstraction(romanCapital)) {
    throw new Error('Invalid substraction prefix V, L, D');
  }
  if (!isValidPosition(romanCapital)) {
    throw new Error('Invalid order');
  }
};
