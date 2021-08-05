const characterToInteger = (value) => {
  switch (value) {
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return -1;
  }
}

const isValidCharacter = (arrayLetters) => {
  const romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  const isFound = arrayLetters.every((e) => romans.includes(e));
  return isFound;
};

const parse = (romano) => {
  if (typeof romano !== 'string') {
    throw new Error('Not a string');
  }

  // if (isValidCharacter(romano)) {
  //   const arrayLetters = romano.split('');
  //   const integer = arrayLetters.reduce((acc, e) => {
  //     const current = characterToInteger(e);
  //     const previous = characterToInteger(acc[acc.length - 1]);
  //     if (current > previous) {
  //       return acc + current;
  //     } else {
  //       return acc - current;
  //     }
  //   }, 0);
  //   return integer;

  if (!isValidCharacter([romano])) {
    throw new Error('Unknown roman numeral');
  }

  let number = characterToInteger(romano.charAt(0));
  let anterior;
  let actual;

  for(let i = 1; i < romano.length; ++i){
    actual = characterToInteger(romano.charAt(i));
    anterior = characterToInteger(romano.charAt(i - 1));
    
    if(actual <= anterior) {
      number += actual;
    }else {
      number = number - anterior * 2 + actual;
    }
  }

  return number;
}

// console.log(parse("G"));


module.exports = {
  parse,
};