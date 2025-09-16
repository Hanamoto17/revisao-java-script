

/*crie um programa que peça ao usuario um valor inicial e um valor final para gerar 
tabuadas de um valor inicial ate o final*/


let entrada = require('prompt-sync');

let tabuadainitial = entrada("Write a initial number:")

let tabuadafinal = entrada("Write a final number: ")

let contadorGeral = tabuadaI;

 while (contadorGeral  <= tabuadaI) {
    console.log(`tabuada do${tabuadaI}`);
    console.log('');

    for (let cont = 1; cont <=10; cont++) {
        console.log(`${tabuada} x ${cont}= ${parseInt(tabuadaI * cont)}`);
    }

    tabuadaI++;
    contadorGeral++;
    console.log('');


}

