/* DOM -> Document Object Model */

// console.log(document)  -> Me permite ingresar a los elementos que tiene por defecto el documento.




// SELECTORES
// Etiqueta -> .getElementByTagName(Elemento) 
// Clase -> .getElementByClassName(cla se)
// Id -> .getElementById(Id)

/* Busqueda usando los selectores de arriba
console.log(document.getElementsByTagName(`section`))
console.log(document.getElementsByClassName(`perritos`))
console.log(document.getElementById(`gatitos`)) 
*/




// RASTREADORES UNIVERSALES
// Rastrea 1 -> querySelector()
// Rastrea todas -> querySelectorAll()

/* Busqueda usando rastreadores 
console.log(document.querySelectorAll(`section`))
console.log(document.querySelectorAll(`.perritos`))
console.log(document.querySelector(`#gatitos`)) 
*/



// Insertar elementos en mi HTML desde JS.
/* 
const $articulo = document.querySelector(`#articulo`);  // $ = Se lo relaciona con "Documento"

let texto = `Hola chicos como les va a todos`

$articulo.innerHTML = texto; 
*/