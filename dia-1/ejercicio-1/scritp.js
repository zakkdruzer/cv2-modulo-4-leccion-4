const IVA=0.19;

function aplicarIva(monto) {
    if (monto<0) {
        return 0;
    }
    return monto + (monto * IVA);
}

function calcularTotal(monto,cantidad,descuento=0) {
        if(descuento > 0 ){
        let montoDescuento= monto * (descuento/100);
        return  parseInt(monto - montoDescuento) * cantidad;
    }
    return parseInt(monto) * cantidad;
}
function procesarVenta(montoNeto,cantidad,descuento=0) {
    let montoConIva= aplicarIva(montoNeto);
    let montoFinal=calcularTotal(montoConIva,cantidad,descuento);
    generarLinea(montoConIva,montoFinal,cantidad,descuento);
}
function formatearPesos(monto){
    if(!monto){
        return '$ 0';
    }
    return `$ ${monto.toLocaleString("es-CL")}`
}


function generarLinea(montoNeto,montoFinal,cantidad,descuento) {

    console.log("-------Monto Total-------");
    console.log(`${ formatearPesos(montoNeto) } X ${cantidad} = ${formatearPesos(montoFinal)}`);
    
    

}
procesarVenta(10000,2);
procesarVenta(10000,1,10);


/*
1) agregar el % de descuento cuando sea >0 
2) crear un metodo para pasarle un arreglo de 
precios,cantidad y descuento
*/