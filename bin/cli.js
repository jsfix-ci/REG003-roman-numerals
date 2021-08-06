#!/usr/bin/env node
const { parse } = require("../src/parse");
const { stringify } = require("../src/stringify");
// Librería nos ayuda a imprimir en color en la terminal
const chalk = require("chalk");
// Librería para crear banners con caracteres y símbolos
const figlet = require("figlet");
// Librería de CLI 
const { program } = require('commander');
program.version('0.0.1');
// process.argv contiene todos los argumentos de la linea de comando
const args = process.argv;

// 1.- Tendremos un comando llamado roman-numerals
// 2.- El comando tomará cuatro argumentos: 
// help, parse, stringify, --version
program
  .option("-d, --debug", "output extra debugging")
  .version("0.1.0")
  .argument("<username>", "user to login")
  .action((username, password) => {
    console.log("username:", username);
    console.log("password:", password);
  });
program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);













// // // Librería que ayuda al usuario a elegir opciones
// const inquirer = require("inquirer");

// console.log(args[2]);
// if (args.length <= 3 && (args[2] == ("parse" || "stringify"))) {
//   inquirer
//     .prompt({
//       type: "input",
//       name: "value",
//       message: "Please enter a roman number",
//     })
//     .then((answer) => {
//       console.log(parse(answer.value));
//     });
//     if(args[2] ==  ) {
//       inquirer
//     .prompt({
//       type: "input",
//       name: "value",
//       message: "Please enter a roman number",
//     })
//     .then((answer) => {
//       console.log(stringify(answer.value));
//     });
//     }
// } else {
//   console.log("oh no");
// }

// //console.log(args)

// // // Mostrar un banner con un mensaje formado por caracteres.
// // const msn = msn => {
// //   console.log(chalk.bold.cyan(figlet.textSync(msn, {
// //     font: 'ANSI Shadow',
// //     horizontalLayout: 'default',
// //     verticalLayout: 'default'
// //   })));
// // }
// // // IIFE (Immediately Invoked Function Expression)
// // (async () => {
// //   msn('Roman Numerals - CLI');
// // })();

// //
// // inquirer
// //   .prompt({
// //     type: "list",
// //     name: "colors",
// //     message: "Which are your favorite color?",
// //     choices: ["red", "blue", "green"],
// //   })
// //   .then((answer) => {
// //     console.log(answer);
// //   });
