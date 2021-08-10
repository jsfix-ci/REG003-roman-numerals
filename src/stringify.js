const romanToIntMap = {
	I:  1,
	IV: 4,
	V:  5,
	IX: 9,
	X:  10,
	XL: 40,
	L:  50,
	XC: 90,
	C:  100,
	CD: 400,
	D:  500,
	CM: 900,
	M:  1000
};
const romanSymbols = Object.keys(romanToIntMap);


function stringify(value) {
  if (typeof value !== 'number') {
    throw new TypeError('Not a number');
  }

  if (value < 0 || value > 3999) {
    throw new RangeError('out of range');
  }

  let result = '';

  for (let i = romanSymbols.length - 1; i >= 0; i--) {
    let symbol = romanSymbols[i];
    let roman = romanToIntMap[symbol];

    while (value >= roman) {
      result += symbol;
      value -= roman;
    }
  }
  
  return result;

};

module.exports = {
  stringify,
};
