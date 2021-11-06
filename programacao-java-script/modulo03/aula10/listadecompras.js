/* Objetivo:
Entender e aplicar as funções auxiliares relacionadas ao array.

Crie um array que contenha nomes de produtos para compra. 

Após isso, exiba no console os resultados das funções relacionadas aos arrays, que são: Join, Pop, Push, Shift e Unshift. 

Também se deve escrever com suas palavras, o que cada função realiza. Seguem abaixo alguns exemplos.

console.log(“O método Join realiza tal coisa”)
console.log(RESULTADO_DO_JOIN)
 */

let listaDeCompras = [ "Maçã", "Banana", "Morango", "Manga", "Uva", "Kiwi" ];

console.log("Lista inicial");
console.log(listaDeCompras);

listaDeCompras.pop ();
console.log("O método POP elimina o ultimo elemento da array");
console.log(listaDeCompras);

listaDeCompras.shift ();
console.log("O método SHIFT elimina o primeiro elemento da array");
console.log(listaDeCompras);

listaDeCompras.push ("Abacaxi");
console.log("O método PUSH adiciona elementos na array");
console.log( listaDeCompras );

listaDeCompras.unshift ("limão");
console.log("O método UNSHIFT adiciona um ou mais elementos no inicio em uma array");
console.log(listaDeCompras);

let separadores = listaDeCompras.join (" | ")
console.log("O método JOIN uni os elementos de uma array com um separador");
console.log(separadores);



