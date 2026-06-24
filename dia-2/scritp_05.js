function miFuncion() {
    console.log("Hola Mundo");
    
}
let varfn=miFuncion;

function ejecutador(varFn) {
    varFn();
}

ejecutador(varfn);
varfn();