let entrada = require('prompt-sync')();

let usuarios =[
    {usuario: 'admin', senha: 'cod321wot', nome: 'Administrador'},
    {usuario: 'jose', senha: 'car23', nome: 'Jose da Silva'},
    {usuario: 'maria', senha: 'abt', nome: 'Maria de Souza'}
    ];


function olaUsuario(pNome) {
    console.log(`Ola ${pNome},seja bem Vindo(a)`);
}

function loguinUsuario(pUsuario,pSenha){
  let logado = false
  
  let i = 0

  for (i ; i < usuarios.length; i++){
    if(pUsuario == usuarios[i].usuario && pSenha == usuarios[i].senha){
        logado = true;
        break;
    }
  }
    if(logado){
    return{sucesso: true, txtRetorno: usuarios[i].nome};
    }   else{
    return{ secesso: false, txtRetorno: 'usuario ou senha invalidos!'};
 }

}

const usuario = entrada('digite se usuario: ');
const senha = entrada('digite sua senha: ');

const retorno =  loguinUsuario(usuario, senha);

if(retorno.sucesso){
    let nome = retorno.txtRetorno;
    olaUsuario(nome);
}else{
    console.log(retorno.txtRetorno);
}



