/******** OBJETOS ********/
 // Colecciones compuestas por sistemas clave - valor
 // Usamos objetos para representar elementos de la realidad, o bien, de la ficcion.

 const detective = {     //Las propiedades de los objetos se ponen entre "{"
    nombre: "Sherlock Holmes",
    edad: 60,
    genero: "Masculino",
    intereses: ["Boxeo","Violin","Opio"],
    decirFrase: function(nombre){
        return "Elemental mi querido" + nombre + "!"
    }
 };

console.log(detective.decirFrase("Watson"))

 // Bracket notation (Anotacion de corchetes)
 //console.log(detective["nombre"])

 //DotWalking (Camina entre puntos)
 //console.log(detective.nombre)

 //Anotacion de corchetes es maleable, mientras que la de puntos es literal.
/*  function agregarPropiedad(objeto, propiedad, valor){
    objeto[propiedad] = valor 
 }
 agregarPropiedad(detective, "id", 151148943)
console.log (detective) */
 // Tablas de datos no relacionales
 // Base de datos de carrito de compra - Son arreglos de objetos.
 /* const carrito = [
    {id: 1, nombre: "Termo Stanley", precio:100000},
    {id: 2, nombre: "Termo Robertito", precio:200000}
 ] */


/* EJEMPLO DE LO VISTO */

const productos = [
    {id:1 , name: "Xayah", price: "10"},
    {id:2, name: "Garen", price: "20"},
    {id:3 , name: "Twitch", price: "30"},
    {id:4 , name: "Yasuo", price: "40"},
    {id:5 , name: "Nasus", price: "50"},
]

function crearTarjetas(listaProductos){
    for ( let i = 0; i< listaProductos.length; i++ ){  //Aca le digo a la funcion que reccorra todo el arreglo.
          console.log(`
            ${listaProductos [i].name}
              ${listaProductos [i]. price}
              - 0 +
              AGREGAR
            `)
    }
}
crearTarjetas(productos)