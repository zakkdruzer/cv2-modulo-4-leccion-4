const tienda= {
    cliente: "Ana",
    items: ["café", "té"],
    logCliente(){        
        console.log(this.cliente);        
    },
    listaClienteLogFnNormal(){
        this.items.forEach(function(it) {
            console.log(`${this.cliente} pidio ${it}`);
        })
    },
    listaClienteLogFnArrow(){
        this.items.forEach((it)=>{
            console.log(`${this.cliente} pidio ${it}`);
        })
    }
};

//console.log(tienda.items);
tienda.listaClienteLogFnNormal();
tienda.listaClienteLogFnArrow();