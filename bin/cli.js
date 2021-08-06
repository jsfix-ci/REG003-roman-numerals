#!/usr/bin/env node
//
const { parse } = require("../src/parse");
const { stringify } = require("../src/stringify")
// Librería nos ayuda a imprimir en color en la terminal
const chalk = require("chalk");
// Librería para crear banners con caracteres y símbolos
const figlet = require("figlet");
// Librería de CLI 
const { program } = require('commander');
program.version('0.0.1');
// process.argv contiene todos los argumentos de la linea de comando
const args = process.argv;

// Mostrar un banner con un mensaje formado por caracteres.
const msn = msn => {
  console.log(chalk.bold.cyan(figlet.textSync(msn, {
    font: 'ANSI Shadow',
    horizontalLayout: 'default',
    verticalLayout: 'default'
  })));
}
// IIFE (Immediately Invoked Function Expression)
(async () => {
  msn('Roman Numerals - CLI');
})();

program
  .command("parse")
  .argument("<string>")
  .description("Converts a roman number to arabic, only receives elements of type string.")
  .action((name) => {
    try{
      console.log(parse(name))
    } catch(error) {
      console.log(error.message)
    }
    
  });

program
  .command("stringify")
  .argument("<number>")
  .description(
    "Converts a arabic number to roman, only receives elements of type number"
  )
  .action((name) => {
    try {
      console.log(stringify(+name));
    } catch (error) {
      console.log(error.message);
    }
  });
program.parse(args);




