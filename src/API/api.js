module.exports.parse = (roman) => {
  if (typeof roman !== 'string') {
    throw new Error('Not a string');
  }
  const romanCapital = roman.toUpperCase();
  const romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  if (!romans.includes(romanCapital)) {
    throw new Error('Unknown roman numeral');
  }
};
