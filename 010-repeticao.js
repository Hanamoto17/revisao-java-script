/* crie um programa que receba dois numeros e apresente a contagem do primeiro numero ate o segundo. caso o segundo numero seja maior a contagem deve ser decrescente.
Trate tambem de possiveis erros de valores digitados
*/
 let entrada = require("prompt-sync")();

let n1 = parseInt(entrada("Sent the first number: "));
let n2 = parseInt(entrada("Sent the second number: "));

let repeticoes = 0;

if (n1 < n2) {
   
    while (n1 < n2) {
        console.log(n1);
        n1++;
        repeticoes++;
    }
} else if (n1 > n2) {
   
    while (n1 > n2) {
        console.log(n1);
        n1--;
        repeticoes++;
    }
} else {
    
    console.log(n1);
    repeticoes = 1;
}

console.log(`O código foi repetido ${repeticoes} vezes!`);