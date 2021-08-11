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
        let precioAuto = auto.precio
        let cuotas = auto.cuotas
        if (persona.capacidadDePagoTotal >= precioAuto && persona.capacidadDePagoEnCuotas >= precioAuto/cuotas) {
            return true
            }

        else {
            return false
        }
    
    },

    autosQuePuedeComprar:
    function(persona){
        let autosPuedeComprar=[]
        for (let i=0; i < this.autosParaLaVenta().length; i++){
            if ((this.puedeComprar(this.autosParaLaVenta()[i], persona))==true){
                autosPuedeComprar.push(this.autosParaLaVenta()[i])
            }
        } return autosPuedeComprar
    } 

}

  



console.log(concesionaria.autos)
console.log(concesionaria.buscarAuto("APL123"))
/*console.log(concesionaria.venderAuto("APL123"))*/
console.log(concesionaria.autosParaLaVenta())
console.log(concesionaria.autosNuevos())
console.log(concesionaria.listaDeVentas())
console.log(concesionaria.totalDeVentas())
console.log(concesionaria.puedeComprar({marca: "Toyota",modelo: "Corolla", precio: 100000, km: 0,color: "Blanco",cuotas: 14,anio: 2019,patente: "JJK116",vendido: false}, {capacidadDePagoEnCuotas: 30000, capacidadDePagoTotal:500000}))
console.log(concesionaria.autosQuePuedeComprar({capacidadDePagoEnCuotas: 500000, capacidadDePagoTotal:500000}))

























