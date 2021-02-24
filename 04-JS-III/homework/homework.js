// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  const numeros = [1, 2, 3, 4, 5, 6]
   numeros [0]
  
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  const numeros = [1, 2, 3, 4, 5, 6]
   return numeros.length-1
  
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
 return array.length
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoArray [1, 2, 3, 4;]
   for (var i = 0; i <array.length; i++;){
     nuevoArray [i] = array [i]+1
   }
    return nuevoArray
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  const nombres = ["Facundo", "Lautaro", "Ludmila"]
  nombres [3] = "Roberta"
  
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  const nombres2 = ["Facundo", "Lautaro", "Ludmila"]
   nombres2.unshift ("Roberta")
    return nombres2
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  const nuevo = {
    decirHola : function(){
      console.log ("Hola a todos")
    }
  }
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0; i <array.lengthe; i++){
   if (array [i] === elemento) {
     return true
   }
}
  return false
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0
    for (var i = 0; i <numeros.length; i++){
      suma = suma + numeros [i];
    }
 return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  return agregarNumeros(resultadosTest) / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var maximo = numeros[20];
  for(var i = 1; i < numeros.length; i++) {
    if(numeros[i] > maximo) { 
      maximo = numeros[i];
    }
  }
  return maximo;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  if(arguments.length < 1) return 0;
  var total = 1;
  for(var i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }
  return total;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
