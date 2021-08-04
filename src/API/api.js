let errorLetter;

const letterMesagge = (letter) => {
  let mesagge;
  switch (letter) {
    case 'V':
      mesagge = 'V (5)';
      break;
    case 'L':
      mesagge = 'L (50)';
      break;
    case 'D':
      mesagge = 'D (500)';
      break;
    default:
      mesagge = 'Not error';
      break;
  }
  return mesagge;
};

const isValidLetters = (stringRomans) => {
  const romans = ['V', 'L', 'D'];
  const count = romans.map((letter) => stringRomans.filter((e) => e === letter).length);
  const valid = count.every((n) => n < 2);
  count.filter((e, index) => {
    if (e >= 2) errorLetter = romans[index];
    return null;
  });
  return valid;
};

const isValidRepetition = (stringRomans) => {
  const romans = ['I', 'X', 'C', 'M'];
  const count = romans.map((letter) => stringRomans.filter((e) => e === letter).length);
  const isValid = count.every((n) => n < 4);
  count.filter((e, index) => {
    if (e >= 4) errorLetter = romans[index];
    return null;
  });
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
  exist.filter((e, index) => {
    if (e >= 0) errorLetter = romans[index];
    return null;
  });
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
    throw new Error(`Invalid repetition of number starting with 5: ${letterMesagge(errorLetter)}`);
  }

  if (!isValidRepetition(arrayRomans)) {
    throw new Error(`Too many repetitions of roman numeral ${errorLetter}`);
  }
  if (!isValidSubstraction(romanCapital)) {
    throw new Error(`Invalid substraction prefix ${errorLetter[0]}`);
  }
  if (!isValidPosition(romanCapital)) {
    throw new Error('Invalid order');
  }
};
