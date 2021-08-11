let autos = [{
    marca: "Ford",
    modelo: "Fiesta",
    precio: 150000,
    km: 200,
    color: "Azul",
    cuotas: 12,
    anio: 2019,
    patente: "APL123",
    vendido: false
},
{   marca: "Toyota",
    modelo: "Corolla",
    precio: 100000,
    km: 0,
    color: "Blanco",
    cuotas: 14,
    anio: 2019,
    patente: "JJK116",
    vendido: false

}
]

module.exports = autos;

/*
Todo esto estará en la función principal app.js
*/
/*let autoBuscado = {}
function patente (patente) {
    for (i=0; i<autos.length; i++) {
    if (autos[i].patente.includes(patente) === true){
     return   autoBuscado = autos[i];
    }
}
}

console.log(patente("JJK116")); */

