function saludar(nombre, textoSaludo='Hola') {
    return `${textoSaludo} ${nombre}`;
}

console.log(saludar("Marco"));
console.log(saludar("Ana","Buenos días"));

function despedir(texto="Chao", nombre){
    return `${texto} ${nombre}`;
}

console.log(despedir(undefined,"Julio"));