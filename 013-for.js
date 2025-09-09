let entrada= require('prompt-sync')();

let tabuada = entrada("write a number to i see the tabuade:")

for (let contador = 1; contador <=10; contador++) {
    console.log(`${tabuada} X ${contador} = ${parseint(tabuada * contador)}`);
}