/******* FUNCIONES DE ORDEN SUPERIOR *******/ 
/* 
     Tipo de funcion que recibe otra funcion como argumento.
*/

// function saludar(usuario){
//     return `Hola ${usuario}`
//  }

//  function despedir(usuario){
//     return `Adios ${usuario}`
//  }

//  function crearSaludo (usuario, saludo){
//     return saludo(usuario)
//  }

//  console.log(crearSaludo("Jorge", despedir))

/* 
METODOS QUE NOS BRINDA JS PARA SIMPLIFICAR FUNCIONES
    .filter () -> Devuelve un nuevo arreglo con los elementos que pasaron la condicion.
    .find () -> Devuelve el primer elemento que haya pasado una condicion.
    .forEach() -> Recorre un arreglo y ejecuta una accion o varias a cada posicion. No devuevle nada.
    .map() -> Recorre un arreglo, ejecuta acciones en cada posicion y al final retorna al nuevo arreglo.
    .reduce() -> Recorre un arreglo y va operando sobre todos los elementos hasta que devuelve un unico valor.
*/

/**** .FILTER ***/

// Quiero un filtro que solo me muestre las frutas con 4 letras.

// const frutas = ["Mora","Piña", "Manzana","Pera", "Melon", "Banana"]

// function filter(arreglo, condicion){
//     const nuevoArr = []

//     for( let i = 0; i < arreglo.length; i++)
//         if(condicion(arreglo[i])){
//             nuevoArr.push(arreglo[i])
//         }

//         return nuevoArr
// }

// console.log(filter(frutas, function(elemento){
//     return elemento.length == 4
// }))
// // Es lo mismo que arriba pero de otro metodo mas ordenado.
// console.log(filter(frutas , (elemento) => elemento.length == 4 ))

/* Java nos brinda un metodo filter para ahorrarnos todo lo que hicimos
anteriormente en una version simplificada. Como el ejemplo de a continuación. */

// frutas.filter(elemento => elemento.length == 4)
// console.log (frutas.filter(elemento => elemento.length == 4))

const frutas = ["Mora","Piña", "Manzana","Pera", "Melon", "Banana"]

/***** FIND *****/

//console.log(frutas.find(fruta => fruta.length == 4))



/******** FOREACH "Realiza un cambio en la funcion" *******/

// frutas.forEach( fruta => console.log (`${fruta} podrida`))




/******** .MAP "Recorre un arreglo, ejecuta acciones en cada posicion y al final retorna al nuevo arreglo." ********/

//console.log (frutas.map( fruta => `${fruta} podrida.`))




/********* .RETURN "Recorre un arreglo y va operando sobre todos los elementos hasta que devuelve un unico valor." *******/  









