/* Repetir como um papagaio

Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.

Contando números ímpares

Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.

Criando a tabuada

Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).
 */

console.log("Teste 1"); 


for (let teste = 2; teste <= 0; teste--) {
    console.log('Próximo numero: ' + teste );
}

console.log("---------------------");
console.log("Exercicio 1"); 

for (let contador = 0; contador <=5; contador++ ){
    console.log("Olá mundo: " + contador);
}

console.log("---------------------");
console.log("Exercicio 2"); 

for (let numero = 1; numero <= 10; numero++ )
    if ((numero % 2) != 0){ 
        console.log('É impar: ' + numero );
    }

console.log("---------------------"); 
console.log("Exercicio 3"); 

for (let contador = 1; contador <= 10; contador++ ) {
    console.log("Tabuada do " + contador);
    for (let c = 1; c <= 10; c++ ){
        console.log(c + " x " + contador + " = "+ c * contador);
    }
}


    

