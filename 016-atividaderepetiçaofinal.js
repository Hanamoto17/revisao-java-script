

/*crie um programa que peça ao usuario um valor inicial e um valor final para gerar 
tabuadas de um valor inicial ate o final*/


let entrada = require('prompt-sync');

let tabuadainitial = entrada("Write a initial number:")

let tabuadafinal = entrada("Write a final number: ")

let contador

 while (let contador = 1; contador <=10; contador++) {
    console.log(`${tabuada} X ${contador} = ${parseint(tabuada * contador)}`);
}

