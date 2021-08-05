#!/usr/bin/env node
const program = require('commander');
const { parse: convertParse, stringify } = require('../API/api');

const cli = (name) => {
  const arg = process.argv[3];
  if (name === 'stringify') {
    console.log(stringify(+arg));
  }
  if (name === 'parse') {
    console.log(convertParse(arg));
  }
};

program
  .version('0.1.0')
  .arguments('<number>', '<string>')
  .option('--parse')
  .option('--stringify')
  .action(cli);
program.parse(process.argv);
