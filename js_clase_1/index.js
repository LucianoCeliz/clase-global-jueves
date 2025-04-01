

/* console.log() : Por medio de este comando voy a hacer conextion entre la hoja de java js y la consola del navegador */
                   //Depuracion
/* console.log(32)

console.log("me gusta el queso") */

// JavaScript es un lenguaje de programación.
// JS originalmente se creo para la WEB. Y solo para la web.
// Cambio en el 2008 con la salida de Node.js
// Node.js es un entorno para ejecutar JS del lado del servidor.
// Nacio en el año 1995 -> Creador : Brendan Eich
// Cuando se creo el lenguaje mas popular del mercado era Java .
/* 
    ¿Que podemos hacer con JS:
    - Desarrollo web
    - Desarrollo Mobile
    - App de escritorio
    - Inteligencia Articial
    - Machine Learning
    - Desarollo de videojuegos
    - Modelaje 3D
    - Programar y controlar hardware
    - Robotica 
*/


//Otros lenguajes:
       /* Java
          Phyton
          PHP
          C#
          C++
          C
          Ruby
          Go
          Rust
          Cobol*/

// Lenguajes utilizados mayormente para realizar:
                  // Inteligencia artificial o Machine Learning > Python
                  // Sitios Web, aplicaciones moviles o videojuegos para la web -> Java Scrips -> Phaser
                  // Videojuegos de tipo INDIE (2D) -> C# -> Unity        
                  // Videosjuegos de gran escala -> C++ -> Unreal Engine
                  // Contratos de blockchain -> Solidity


///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Los lenguajes de programacion utilizan tipos de datos.
// Cada tipo de dato tienen sus propias caracteristicas.
// Vamos a ver los primeros 3:
// 1. Numericos (number) ->  Numeros hechos y derechos (naturales, enteros, etc) Ej: 13
// 2. Cadenas de texto (string) -> Caracteres encadenados Ej: "Dale B" 
// 3. Booleanos (booleans) -> Lo que proviene de algebra de boole. Que nos da falsedad o verdad Ej: true, false


/* BOOLEANOS */


/* var numero = 2; */ //Nace en la linea 62. Le estamos asignando a la variable "numero" el 1.


/* console.log(2 + numero + numero) */

// Operadores aritmeticos  - Valen por un numero
     // Suma + 
     // Resta - 
     // Multiplicación *
     // División / 
     // Modulo % - Resto de una división (Sirve para saber si un numero es par, primo, etc)
     // Incrementadores ++ - Instruccion con objetivo de repetición 
     // Decrementadores --  - Instruccion con objetivo de repetición

// Operadores de comparación - Valen por un booleano
     // Mayor que >
     // Menor que <
     // Menor o igual que ≤
     // Mayor o igual que ≥

     // Igualdad estricta ===
     //console.log (3 === "3")  // Compara valor y tipo

     // Igualdad no estricta ==
     //console.log (3 == "3") // Compara solo valor

     // Desigualdad estricta !==
     //console.log (3 !== 2)

     // Desigualdad no estricta != 
     //console.log (3 != "3")

 // Operadores logicos
     // Expresion simple - Es un valor. Ej: 32 - True
     // Expresion compuesta - Combinamos expresiones simples. Ej: 3>2
     // Expresion compuesta por expresiones compuestas.

// Y - and - &&  Ambas expresiones deben ser verdaderas para ser True Ej: 3>2 Y 5>4
// O - or  - ||   Basta con que una de las dos expresiones sea verdadera Ej: 3>2 O 5<4
// Negación - NOT - ! Niega un resultado y lo invierte Ej: !3>2

//JavaScript es un lenguaje bastante particular. que nos permite realizar operaciones bizzarras que otros lenguajes no.

//COERCION DE TIPOS DE DATO - Forzar, Obligar

var numero = 1 ;
var cadena = "hola" ;
var booleano = true ;

console.log(numero + cadena)   // Consola opera de izquierda a derecha

//NaN es un valor de tipo number pero no representable como numero. Ej: console.log(numero - cadena)

//Valores vacios - Representan una inexistencia de valor
// null - Inexistencia puesta agrede
// undefined - Inexistencia por defecto

var nohayvalor;

console.log(nohayvalor)

var color = null;

console.log(color)




