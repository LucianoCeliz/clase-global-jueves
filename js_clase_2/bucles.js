/* Los bucles son estructuras que nos permiten repetir las instrucciones muchas veces hasta
   una condicion se cumple y corta el proceso */

   // Tipos de bucles:
       // While - Mientras
       // Do while - Hacer mientras
       // For - Para

 // WHILE      
 // Primerp se evalua y despues se ejecuta
 // Se va a ir sumando por el "contador++" de a 1, hasta llegar al 9 que es el ultimo numero menor a 10
       
/* var contador = 0; */

/* while (contador < 10) {      
    console.log (contador + "while");  
    contador++
} */

// DO WHILE
// Ejecuta despues evalua
 // En este caso va a ejecutar hasta 10 y despues se frena

/* do {
    console.log (contador + "do while");  
    contador++                           

} while (contador < 10) */

// FOR
// Esta compuesto por 3 partes: variable inicial, condicion, incrementador.
 var contador=0; //Variable
 contador <10; //condicion
 contador++ // Incrementador

 for(var contador=0; contador <10 ; contador++)
    console.log(contador);






