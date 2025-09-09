let entrada = require('prompt-sync')();

let frase = entrada("write some words:");

let frase2 = '';

let contador = -1;

while(contador <  frase.length) {
     contador++;
    if(frase[contador] =='a' ||
       frase[contador] =='e' ||
       frase[contador] =='i' ||
       frase[contador] =='o' ||
       frase[contador] =='u' ||
       frase[contador] =='n' 
     ) {
       continue;
    }
    frase2= frase2 + frase.charAt(contador);

}
console.log(frase);