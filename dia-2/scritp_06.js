function puntuacion(nombre) {
    let num1=2;
    let num2=3;


    function imprimir(nombre) {
        return `${nombre} anotó: ${num1+num2}`
    }

    return imprimir(nombre);
}

console.log(puntuacion("Alberto"));
console.log(imprimir("Alberto"));
