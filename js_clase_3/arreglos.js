/********** ARRAYS ****************/

/* Colecciones de valores, donde cada valor 
   tiene una posicion indexada dentro de la colección */

//const estudiantes = ["Miguel", "Pedro" , "Sara", "Jorge", "Alma","Leandro"]
                   //    0        1          2       3       4        5    
//console.log (estudiantes)

//console.log(estudiantes[2])

/* Resulta que quiero agregar a Patricia en la comision de estudiantes */

//estudiantes[estudiantes.length]= "Patricia"
// Length me permite agregar un nuevo valor al final de la colección.

// Puedo crear una funcion para que cada vez que ponga el comando se añada un estudiante automaticamente al final

/* function agregarEstudianteALaLista (lista, estudiante){
    lista[lista.length] = estudiante
}
agregarEstudianteALaLista(estudiantes, "Patri")
agregarEstudianteALaLista(estudiantes, "Roberto")

console.log(estudiantes) */

// Metodos nativos (Arreglos prefabricados)
// .push (Agrega al arreglo)
// .pop (quita del arreglo)

//estudiantes.push("Patricia") //Agrega a Patricia al final.
//estudiantes.unshift("Patricia") // Agrega al comienzo de la lista.
//estudiantes.pop() // Quita del final de la lista
//estudiantes.shift // Quita del comienzo de la lista
// .append() // Python
// .add() // Wollok 

const estudiantes = ["Miguel", "Pedro" , "Sara", "Jorge", "Alma","Leandro"]

// FORMA LARGA DE AGREGAR SIN METODO NATIVO

function agregarEstudianteAlComienzoDeLaLista (lista, estudiante){
    const nuevoArreglo = [estudiante];

    for(let i =0; i < lista.length ; i++){
        nuevoArreglo.push(estudiantes[i])
    }

    return nuevoArreglo 
}

agregarEstudianteAlComienzoDeLaLista(estudiantes, "Patricia")

console.log(agregarEstudianteAlComienzoDeLaLista(estudiantes, "Roberto"))