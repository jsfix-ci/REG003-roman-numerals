#!/usr/bin/env node
const { parse, stringify } = require('../index');

const help = `
Usage: roman-numerals [opttions] <command> [<input>]
Commands:
  parse <input>      Parse a roman numeral string into an integer.
  stringify <input>  Takes an integer and converts it to a roman numeral.
Options:
  -h,--help     Show this help.
  -v,--version  Show version number.
`;

const [, , ...args] = process.argv;
if (args.length === 1) {
  switch (args[0]) {
    case '-h':
    case '--help':
    case 'help':
      console.log(help);
      break;
    case '-v':
    case '--version':
    case 'version':
      let pack = require('../package.json');
      console.log('version ' + pack.version);
      break;
    case 'parse':
    case 'stringify':
      console.log(args[0] + ' input required');
      break;
    default:
      console.log('invalid option');
  }
} else if (args.length === 2) {
  const parseOrStringify = args[0];
  if (parseOrStringify === 'parse') {
    console.log(parse(args[1]));
  }
  if (parseOrStringify === 'stringify') {
    console.log(stringify(Number(args[1])));
  }
} else {
  console.log('datos incorrectos');
}
