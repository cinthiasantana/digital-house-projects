/* let jsonLogin = {
    "cadastro" :{
        "Nome" : "Cinthia",
        "Sobrenome" : "Santana",
        "Apelido" : "Ci",
        "Idade" : "20",
    "login" : {
        "usuario" : "cinthiasantana",
        "email" : "cinthiasantana.rc@gmail.com",
            }
        }     
    }

console.log(jsonLogin.cadastro.login.usuario); */
/* 
let Caneta = {
    cor : "azul",
    assinar : function(escreva){
        return "Assine aqui:" + " " + escreva;
    }
}

console.log(Caneta.assinar("Cinthia O. Santana"));
 */
let Caneta = {
    cor : "azul",
    assinar : function(escreva){
        console.log("Assine aqui com esta caneta de cor" + " " + this.cor);
    }
}

Caneta.assinar();