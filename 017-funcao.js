let entrada = require('prompt-sync')();

function olaUsuario(pNome) {
    console.log(`Ola ${pNome},seja bem Vindo(a)`);
}

function loguinUsuario(pUsuario,pSenha){
    if(pUsuario == "Admin" && pSenha == 'cod321wot'){
        return true;

    } else{
        return false;
    }
}

const usuario = entrada("Sent your loguin: ");
const senha = entrada("Sent your adress: ");

if(loguinUsuario(usuario, senha)){
    let nome = entrada("digite seu nome");
    olaUsuario(nome);

}else{
    console.log("usuario ou senha invalidos");
}
