#!/usr/bin/env node
const { parse, stringify } = require("../index");
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
  console.log(
    chalk.bold.yellow(
      figlet.textSync(msn, {
        font: "ANSI Shadow",
        horizontalLayout: "fitted",
        verticalLayout: "fitted",
      })
    )
  );
}

// IIFE (Immediately Invoked Function Expression)
(async () => {
  msn('Roman Numerals');
})();

program
  .command("parse")
  .argument("<string>")
  .description("Converts a roman number to arabic, only receives elements of type string.")
  .action((name) => {
    try{
      console.log(chalk.bold.green(parse(name)));
    } catch(error) {
      console.log(chalk.bold.red(error.message));
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
      console.log(chalk.bold.green(stringify(+name)));
    } catch (error) {
      console.log(chalk.bold.red(error.message));
    }
  });
program.parse(args);




