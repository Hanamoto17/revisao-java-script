let entrada = require('prompt-sync')();

let nome = entrada('Digite seu nome: ');

let idade = entrada('Digite sua idade: ');

let validaidade = isNaN(idade);


if(validaidade){
   console.log(`${nome}, insira um valor numero na idade!`);
} else{
    if(idade > 18) {
        console.log('Bem vindo ao site!')
    }
    if(idade < 18) {
        console.log('Voce nao tem idade para acessar o site')
    }     

}