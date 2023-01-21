/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   return nombre[0].toUpperCase() + nombre.slice(1)  // La propiedad slice es para que me cuente el ario , y quede Mario, el slice hace un corte , arrancaria desde el 1
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb()
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(n1,n2)
   function sumar(n1,n2){
      return numero1-numero2;
   }
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var suma = numeros.reduce(function( acc, curr) {   // var suma=0; for(let i=0; i<numeros.length;i++){ suma = suma + numeros[i] }
      return acc + curr;
   });
   cb(suma);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   //for(let i=0; i<array.length;i++){
   //cb(array[i]);
   //}
   array.forEach(function(element){
      cb(element);
   });
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   var resultado = array.map(function(e){
      return cb(e);
   })
   return resultado;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   //var nuevoArray = [];         
   //for(let i=0; i<nuevoArray.length;i++){
   //if(array[i][0]==="a"){
   //  nuevoArray.push(array[i]);
    // }
   //}
   //return nuevoArray;
   return array.filter(function(palabra){  // var resultado = array.filter(function(palabra){ return palabra[0] === "a"}) return resultado; }
   return palabra[0] === "a";
   });
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
