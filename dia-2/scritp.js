const IVA=0.19;
let carrito=[];

const aplicaIva= montoNeto => montoNeto + (montoNeto * IVA);
const aplicaDscto= (monto,pct=0)=> monto - (monto * (pct/100));
const formatearPesos = monto => `$ ${parseInt(monto).toLocaleString("es-CL")}`;
const agregarProducto= (descrip,precioN,cant,dcto)=> carrito.push([descrip,parseInt(precioN),parseInt(cant),parseInt(dcto)]);
const resetProducto= ()=> carrito=[];

function procesarVenta(){
    let datosBoleta=[];
    for (const arregloVenta of carrito ) {
        descrip =arregloVenta[0];
        precioN =arregloVenta[1];
        cant    =arregloVenta[2];
        dcto    =arregloVenta[3];
        precioCI= aplicaIva(precioN);
        precioF = aplicaDscto(precioCI,dcto) * cant;

        datosBoleta.push([descrip, cant,dcto,precioF]);
    }
    /*
    console.log(datosBoleta);

    console.log("\n--- RESULTADOS DE VENTAS ---");
    let total=0
    datosBoleta.forEach((datos)=>{
        let txtDscto=(datos[2]>0)? `(${datos[2]}%)`:''; 
        console.log(`${txtDscto} ${datos[0]} X ${datos[1]} ${formatearPesos(datos[3])} `);
        total+=datos[3];
    });
    console.log(`Total Boleta: ${formatearPesos(total)}`);
    */
   
    
}
function imprimirBoleta(producto, cantidad, valor, descuento, total) {
    // Definimos el ancho total de la boleta
    const anchoTotal = 40; 
    
    // Caracteres para dibujar los bordes
    const lineaHorizontal = '─'.repeat(anchoTotal - 2);
    const bordeSuperior = `┌${lineaHorizontal}┐`;
    const bordeInferior = `└${lineaHorizontal}┘`;
    const separador = `├${lineaHorizontal}┤`;

    // Función auxiliar para centrar texto dentro de los bordes
    function centrarTexto(texto) {
        const espaciosDisponibles = anchoTotal - 2 - texto.length;
        const paddingIzq = Math.floor(espaciosDisponibles / 2);
        const paddingDer = espaciosDisponibles - paddingIzq;
        return `│${' '.repeat(paddingIzq)}${texto}${' '.repeat(paddingDer)}│`;
    }

    // Función auxiliar para alinear "Etiqueta" a la izquierda y "Valor" a la derecha
    function lineaDetalle(etiqueta, valorStr) {
        const textoIzq = ` ${etiqueta}`;
        const textoDer = `${valorStr} `;
        const espacios = ' '.repeat(anchoTotal - 2 - textoIzq.length - textoDer.length);
        return `│${textoIzq}${espacios}${textoDer}│`;
    }

    // Imprimimos la boleta línea por línea en la consola
    console.log(bordeSuperior);
    console.log(centrarTexto("BOLETA DE VENTA"));
    console.log(separador);
    
    // Detalles de la compra
    console.log(lineaDetalle("Producto:", producto));
    console.log(lineaDetalle("Cantidad:", cantidad.toString()));
    console.log(lineaDetalle("Valor Unitario:", `$${valor.toFixed(2)}`));
    console.log(lineaDetalle("Descuento:", `${descuento}%`));
    
    console.log(separador);
    
    // Total resaltado
    console.log(lineaDetalle("TOTAL A PAGAR:", `$${total.toFixed(2)}`));
    console.log(bordeInferior);
}




function menuSistema(){

    let corriendo=true;


    do{
        let opcionMenu=parseInt(prompt(`Ingresa un opción del menu:
            1) Agregar Producto
            2) Finalizar Venta
            3) Salir
        `));

        if (opcionMenu===1) {
            const descripcionDatos=["Descripcion",
                                    "Cantidad",
                                    "Descuento",
                                    "Precio"]
            const datosIngresado=[];
            for (let i = 0; i < descripcionDatos.length; i++) {
                let dato=prompt(`Ingrese ${descripcionDatos[i]}`);
                datosIngresado[i]=dato;
            }
   
            agregarProducto(datosIngresado[0],
                            datosIngresado[3],
                            datosIngresado[1],
                            datosIngresado[2]
                            );           
            
            
        } else if (opcionMenu===2) {
            procesarVenta();
        }else if (opcionMenu===3) {
            console.log("Saliendo del Sistema");
            corriendo=false;
        }else{
            alert("Debe Ingresa un opción válida")
           
        }



    }while(corriendo)


}

//menuSistema();
imprimirBoleta("Teclado Mecánico", 1, 45000, 10, 40500);