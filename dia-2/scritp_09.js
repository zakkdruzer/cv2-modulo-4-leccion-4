//const ejecutador= (varFn) => varFn();

saludar= ()=>console.log("Saludando desde una fn de Flecha");

function repetir(veces,accion) {
    for (let i = 1; i <= veces; i++) {
        accion(i);       
    }
    
}
repetir(6,(n)=>console.log(`Vuelta nro ${n}`));
repetir(6,()=>console.log(`Vuelta --`));
