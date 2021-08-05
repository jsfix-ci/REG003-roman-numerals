const convertRoman = (number) => {
  let result = number;
  let romanNumber = '';
  while (result > 0) {
    switch (true) {
      case result >= 1000:
        result -= 1000;
        romanNumber += 'M';
        break;
      case result >= 900:
        result -= 900;
        romanNumber += 'CM';
        break;
      case result >= 500:
        result -= 500;
        romanNumber += 'D';
        break;
      case result >= 400:
        result -= 400;
        romanNumber += 'CD';
        break;
      case result >= 100:
        result -= 100;
        romanNumber += 'C';
        break;
      case result >= 90:
        result -= 90;
        romanNumber += 'XC';
        break;
      case result >= 50:
        result -= 50;
        romanNumber += 'L';
        break;
      case result >= 40:
        result -= 40;
        romanNumber += 'XL';
        break;
      case result >= 10:
        result -= 10;
        romanNumber += 'X';
        break;
      case result === 9:
        result -= 9;
        romanNumber += 'IX';
        break;
      case result >= 5:
        result -= 5;
        romanNumber += 'V';
        break;
      case result >= 4:
        result -= 4;
        romanNumber += 'IV';
        break;
      case result >= 1:
        result -= 1;
        romanNumber += 'I';
        break;
      default:
        result = 0;
        break;
    }
  }
  return romanNumber;
};

module.exports = {
  convertRoman,
};
