module.exports = {
  stringify: (arabic) => {
    if (typeof arabic !== 'number') {
      throw new Error('Not a number');
    }
    if (arabic < 1 || arabic > 3999) {
      throw new Error('out of range');
    }
    const units = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    const hundreds = [
      '',
      'C',
      'CC',
      'CCC',
      'CD',
      'D',
      'DC',
      'DCC',
      'DCCC',
      'CM',
    ];
    const thousands = ['', 'M', 'MM', 'MMM'];

    const m = Math.floor(arabic / 1000);
    const cm = arabic % 1000;
    const c = Math.floor(cm / 100);
    const xc = cm % 100;
    const x = Math.floor(xc / 10);
    const i = xc % 10;
    let roman = thousands[m] + hundreds[c] + tens[x] + units[i];
    return roman;
  },

  parse: (roman) => {
    if (typeof roman !== 'string') {
      throw new Error('Not a string');
    }

    if (roman[0] === 'L' && roman[1] === 'L') {
      throw new Error('Invalid repetition of number starting with 5: L (50)');
    }

    validRepetitions.forEach((validation) => {
      const repeat = validation.key.repeat(validation.quantity + 1);
      const regex = new RegExp(`${repeat}`, 'g');

      if (regex.test(roman)) {
        throw new Error(
          'Too many repetitions of roman numeral ' + validation.key
        );
      }
    });

    if (roman === 'VX') {
      throw new Error('Invalid substraction prefix V');
    }

    for (let i = 0; i < roman.length; i++) {
      if (!romans.includes(roman.charAt(i))) {
        throw new Error('Unknown roman numeral');
      }
    }

    const checkRegexp = new RegExp(
      '^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$',
      'mg'
    );
    if (!checkRegexp.test(roman)) {
      throw new Error('Invalid order');
    }
    let totalValue = 0,
      value = 0, // Initialise!
      prev = 0;

    for (let i = 0; i < roman.length; i++) {
      const current = arabicToRoman(roman.charAt(i));
      if (current > prev) {
        // Undo the addition that was done, turn it into subtraction
        totalValue -= 2 * value;
      }
      if (current !== prev) {
        // Different symbol?
        value = 0; // reset the sum for the new symbol
      }
      value += current; // keep adding same symbols
      totalValue += current;
      prev = current;
    }
    return totalValue;
  },
};

const romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

const validRepetitions = [
  { key: 'I', quantity: 3 },
  { key: 'V', quantity: 1 },
  { key: 'X', quantity: 3 },
  { key: 'L', quantity: 1 },
  { key: 'C', quantity: 3 },
  { key: 'D', quantity: 1 },
  { key: 'M', quantity: 3 },
];

function arabicToRoman(character) {
  switch (character) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
  }
}
