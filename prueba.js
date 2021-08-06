const { parse, stringify } = require("./index");

console.log(parse('I') === 1); // true
console.log(parse('III') === 3); // true
console.log(parse('IV') === 4); // true
console.log(parse('IX') === 9); // true
console.log(parse('MCMXLIV') === 1944); // true

console.log(stringify(1) === 'I'); // true
console.log(stringify(3) === 'III'); // true
console.log(stringify(4) === 'IV'); // true
console.log(stringify(9) === 'IX'); // true
console.log(stringify(1944) === 'MCMXLIV'); // true

console.log(parse(stringify(1)) === 1); // true
console.log(parse(stringify(3)) === 3); // true
console.log(parse(stringify(4)) === 4); // true
console.log(parse(stringify(9)) === 9); // true
console.log(parse(stringify(1944)) === 1944); // true