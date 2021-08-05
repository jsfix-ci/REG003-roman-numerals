const characterToInteger = (value) => {
  switch (value) {
    case "I": //puede aparecer tres veces en un número
      return 1;
    case "V": 
      return 5;
    case "X": //puede aparecer tres veces en un número
      return 10;
    case "L": 
      return 50;
    case "C": //puede aparecer tres veces en un número
      return 100;
    case "D": 
      return 500;
    case "M": //puede aparecer tres veces en un número
      return 1000;
    default:
      return -1;
  }
}
let letter;

const msgError = (value) => {
  let msg;
  switch (value) {
    case "V":
      msg = "V (5)";
    break
    case "L":
      msg = "L (50)";
    break
    case "D":
      msg = "D (500)";
    break
    default:
      break;
  }
  return msg; 
}


const validCharacter = (currentValue) => {
  const romanNum = ["I", "V", "X", "L", "C", "D", "M"];
  const arrValue = currentValue.split("")
  //Comprobar que todos los elementos de un arreglo cumplan una condición
  const verify = arrValue.every((value) => romanNum.includes(value));
  return verify
};

const validUniqueCharacter = (currentValue) => {
  const romanNum = ["V", "L", "D"];
  const arrValue = currentValue.split("");
  const findUniqueCharacter = romanNum.map(
    (roman) => arrValue.filter((i) => i === roman).length
  );
  // const verify = findUniqueCharacter.some((element, index, array) => {
  //   return !(array.indexOf(element) === index);
  // });
  
  const valid = findUniqueCharacter.every((n) => n < 2);

  findUniqueCharacter.filter((i, index) => {
    if (i >= 2) return letter = romanNum[index];
    return null;
  });

  return valid;
};

const validRepetion = (currentValue) => {
  const romanNum = ["I", "X", "C", "M"];
  const arrValue = currentValue.split("");
  const findRepetionCharacter = romanNum.map(
    (roman) => arrValue.filter((i) => i === roman).length
  );

  const valid = findRepetionCharacter.every((n) => n < 4);

  findRepetionCharacter.filter((i, index) => {
    if (i >= 4) return (letter = romanNum[index]);
    return null;
  });

  return valid;
};

const isValidCharacter = (arrayLetters) => {
  const romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  const isFound = arrayLetters.every((e) => romans.includes(e));
  return isFound;
};

const parse = (romano) => {
  if (typeof romano != "string") {
    throw new Error("Not a string");
  }

  if (!validCharacter(romano)) {
    throw new Error("Unknown roman numeral");
  }

  if (!validUniqueCharacter(romano)) {
    throw new Error(
      `Invalid repetition of number starting with 5: ${msgError(letter)}`
    );
  }

  if (!validRepetion(romano)) {
    throw new Error(`Too many repetitions of roman numeral ${letter}`);
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

//parse("IIIIII");

module.exports = {
  parse,
};