/*Faça com que o programa aceite uma senha errada tres vezes, apos a terceira tentativa errada
o sistema deve apresentar a mensagem informando que o usuario esta bolqueado.
Quando a senha for digitada corretamente, a menssagem 
''bem vindo ao sistema de loguin'' deve ser apresentada.
*/


let entrada = require('prompt-sync')();

const senha = 'cod321wotA';

let senhadigitada; 

let tentativas = 0;

let acess = false

do{
 senhadigitada = entrada('Put your adrees to acess the sistem:');
} while (senhadigitada !== senha);

if( senhadigitada !== senha){
    tentativas++;
}


while(senhadigitada !== senha && tentativas < 3)







console.log('Welcome to the sistem');