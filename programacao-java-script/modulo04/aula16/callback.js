function soma (a,b, cd){
    let txt = "Cinthia";
    return a+b+cd(txt);
}

function texto(txt){
    return ' esse é o resultado ' +txt;
}

console.log( soma(5,3, texto ));

