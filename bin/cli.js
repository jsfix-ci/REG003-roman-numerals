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
  if (args[0] === '-h') {
    console.log(help);
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
