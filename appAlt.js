let autos = require("./autos")


const concesionaria = {
   autos: autos,
  
   buscarAuto: 
   function (patente) {
       for (i=0; i<this.autos.length; i++) {
                        if (this.autos[i].patente === patente){  
                        return  this.autos[i];
                        }
        }
        return  null
   },

   venderAuto: 
   function (patenteVenta) {
       if (this.buscarAuto(patenteVenta) !== null){
           this.autos[i].vendido = true
           return this.autos[i]
       }
   },
   
   autosParaLaVenta:
   function() {
       let autosALaVenta = []
       autosALaVenta = this.autos.filter(autosDisponibles => autosDisponibles.vendido == false)
       return autosALaVenta
   },

   autosNuevos:
   function () {
       let autos0Km = []
       autos0Km = this.autosParaLaVenta().filter(autosNuevos => autosNuevos.km < 100)
       return autos0Km
    },

    listaDeVentas: 
    function(){
        let venta = []
        let autosVendidos =[]
        autosVendidos = this.autos.filter(autoVendido => autoVendido.vendido == true)
        autosVendidos.forEach(valor => {
        venta.push(valor.precio)
     })
     return venta
     
     /*for (let i=0; i<this.autos.length; i ++) {
                venta.push(this.autos[i].precio)
                }
     return venta*/
    },
    
    totalDeVentas:
    function(){
        let total$ = 0
        if(this.listaDeVentas().length != 0){
        total$ = this.listaDeVentas().reduce((acumu, numer) => acumu + numer);}
        else {
        total$ = 0
        } 
        return total$;
    },
    
    puedeComprar:
    function(auto, persona){
        if(this.buscarAuto(auto)!= null){
        let precioAuto = this.buscarAuto(auto).precio
        let cuotas = this.buscarAuto(auto).cuotas
        if (persona.capacidadDePagoTotal > precioAuto){
            if (persona.capacidadDePagoEnCuotas > precioAuto/cuotas) {
            return true
            }
        }
        }
        else {
            return "El auto no existe. Ingrese la patente nuevamente"
        }
    return "No puede comprar el auto, no posee fondos suficientes"
    },

    autosQuePuedeComprar:
    function(persona){
        for (let i=0; i < this.autosParaLaVenta().length; i++){
            if ((this.puedeComprar(this.autosParaLaVenta()[i].patente, persona))==true){
                console.log(this.autosParaLaVenta()[i])
            }
        }
    }

}

  



console.log(concesionaria.autos)
console.log(concesionaria.buscarAuto("APL123"))
console.log(concesionaria.venderAuto("APL123"))
console.log(concesionaria.autosParaLaVenta())
console.log(concesionaria.autosNuevos())
console.log(concesionaria.listaDeVentas())
console.log(concesionaria.totalDeVentas())
console.log(concesionaria.puedeComprar("APL123", {capacidadDePagoEnCuotas: 30000, capacidadDePagoTotal:500000}))
concesionaria.autosQuePuedeComprar({capacidadDePagoEnCuotas: 500000, capacidadDePagoTotal:500000})






