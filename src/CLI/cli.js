#!/usr/bin/env node
const program = require('commander');
const { parse: convertParse, stringify } = require('../API/api');

program
  .version('0.1.0')
  .arguments('<number>')
  .option('--parse')
  .option('--stringify');
program.parse(process.argv);

const options = program.opts();

console.log('gaaaaaa', options);
