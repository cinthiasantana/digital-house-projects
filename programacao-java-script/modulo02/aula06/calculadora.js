/* Calculadora - Nível I
Crie um arquivo calculadora.js que terá as diferentes operações  para realizar.
Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.
Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.
Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.
Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.
 */

function adicionar (a,b){
    return a + b;
}

function subtrair (a,b){
    return a - b;
}

function multiplicar (a,b){
    return a * b;
}

function dividir (a,b){
    return a / b;
}

/* Calculadora - Nível II
Após passar o Nível I, adicionamos um pouco mais de dificuldade para testarmos nossas funções.
No seu arquivo calculadora.js,  a partir das 4 funções feitas anteriormente, crie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções, por exemplo:
console.log ("-------------- Teste de Operações / Calculadora --------------")
Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.
Execute a função que multiplica, passando quaisquer dois números como argumentos. Mostre o resultado no console.
Execute a função que faz divisão, passando quaisquer dois números como argumentos. Mostre o resultado no console.
Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos. Mostre o resultado no console.
 */

console.log ("-------------- Teste de Operações / Calculadora --------------");

console.log( "O resultado da soma é:" + " " + adicionar (1,3) );
console.log( "O resultado da subtração é:" + " " + subtrair (5,2) );
console.log( "O resultado da multiplicação é:" + " " + multiplicar (4,4) );
console.log( "O resultado da divisão é:" + " " + dividir (10,2) );
console.log( "O resultado da divisão sob 0 é:" + " " + dividir (0,7) );

/* Calculadora - Nível III - Funções Extras

Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, 
ou seja, ao quadrado.
Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().

Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, 
e que deverá retornar x% de totalPorcentagem.
Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 
Importante: calculaPorcentagem() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação 
ao segundo parâmetro.
Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).
 */

function quadradoDoNumero (a){
    return multiplicar( a, a);
}

function mediaDeTresNumeros(a, b, c){
    let d = adicionar (a,b);
    let e = adicionar (d,c);
    return dividir (e,3);
}
console.log( mediaDeTresNumeros ( 3, 3, 3 ));

function calculaPorcentagem (a,b){
    let c = dividir (b,100);
    return multiplicar ( a, c);
}

console.log( calculaPorcentagem ( 300, 15 ));

function geradorDePorcentagem (a,b){
    let c = dividir (a,b);
    return multiplicar (c,100);
}

console.log( geradorDePorcentagem ( 2, 200));


