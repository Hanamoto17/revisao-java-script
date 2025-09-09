/*
  Crie um programa de um estabelecimento que receba dados como o nome, a idade e se a pesso é amigo do dono.
  Retorne uma mensagem de acordo com as validaçoes abaixo:
  -se a pessoa ter mais de 18 anos o acesso ao local sera liberado.
  -pessoas com menos de 18 nao acessam o local.
  -amigos do dono podem acessar local independente da idade.
  -caso a pessoa tenha mais de 18anos e seja amigo do dono, ganhara uma bebida

*/  

let entrada = require("prompt-sync")();

let nome = entrada('Qual seu nome: ');

let idade = entrada('Digite sua idade: ');

let amigo = entrada('Me diga se voce é amigo do dono?: (sim/nao) ');


let validaidade = isNaN(idade);


if(amigo === 'sim'){
 if(idade > 18) {
    console.log(`Legal${nome}, voce pode adentrare ganhou bebida`);
} else {
    console.log(`Legal${nome}, voce pode entrar porque é amigo do dono`);
}
 if(idade >= 18){
  console.log(`Legal${nome},voce pode adentrar`);
 } else {
  console.log(`${nome},voce nao pode adentrar`)
 }

}
