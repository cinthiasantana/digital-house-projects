/* Crie uma função que converta polegadas em centímetros. 
Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros. */

function conversorDePolegadas (polegadas){
    return polegadas * 2.54;
}

console.log( conversorDePolegadas (3));

/* Crie uma função que receba uma string e a converta em um URL.
ex: "funcaojs" é retornado como "http://www.funcaojs.com.br" */

function conversorUrl (polegadas){
    return polegadas * 2.54;
}

console.log( conversorUrl (3));

/* Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ). */

function frase (a){
    return a;
}

console.log( frase ("Hoje o dia está lindo") + "!");

/* Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles. */

function calculoIdade (a){
    return a * 7 ;
}

console.log( calculoIdade (2));

/* Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
PS: considere que você trabalhe 160 horas no mês. */

function valorHoraTrabalho (salario){

    return salario / 160;
}

console.log( "O valor da minha hora de trabalho é:" + " " + valorHoraTrabalho (1045));

/* Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. 
Em seguida, execute a função, testando diferentes valores.  */

function calculadora (peso,altura){
    return peso / altura*altura;
}

console.log("Seu IMC é:" + " " + calculadora (60,1.57) );

