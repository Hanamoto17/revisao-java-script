let entrada = require('prompt-sync')();

const senha = 'cod321wotA';


let senhadigitada= ''; 


do{
 senhadigitada = entrada('Put your adrees to acess the sistem:');
} while (senhadigitada !== senha);


console.log('Welcome to the sistem');