/* CONCURSO STAND UP */

var nomeA = "Clarisse";
var nomeB = "Theo";

var clarisse = [ 50, 70, 90];
var theo = [ 3, 5, 9]; 

console.log("O ganhador é: " + encontrarGanhador (clarisse, theo) + "!")

function encontrarGanhador (clarisse, theo) {
    let A = 0;
    let B = 0;
    for (let i = 0; i < i.length; i++ ); {
        if ( clarisse < theo  )  {
                A =+1;
        }
        else if (clarisse > theo ){
            B =+1;
        }
        else {
            A += 0;
            B += 0;
        }
    }

    if (A < B ) {
        let ganhador = nomeA;
        return ganhador;
    }
    else if ( A > B ) {
        ganhador = nomeB;
        return ganhador;
    }
    else { 
        ganhador = "Empatou!"; 
    }
}