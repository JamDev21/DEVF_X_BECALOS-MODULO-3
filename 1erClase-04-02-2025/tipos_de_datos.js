//Tipos de datos en javascript

/*////////////////////////////////////////////////////////////////////////////////////////////////////////
Agrega uno o varios ejemplos para los siguientes valores y que se imprima a qué tipo de dato pertenecen //
dichos valores, justo como en el ejemplo anterior. Los valores son:                                     //
*/////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    ¿Qué es typeof?
    typeof nos permite conocer el tipo de dato de una variable.
    Es útil para depuración y validaciones de código.
*/

// Number
console.log(typeof 42);

// String
console.log(typeof 'Veinticinco');

// Number
console.log(typeof -666);

//Boolean
console.log(typeof true);

// Number
console.log(typeof 0);

// String
console.log(typeof "");

// Object
console.log(typeof null);

// Undefined
console.log(typeof undefined);

// Undefined
console.log(typeof FALSE);

/*
    Agrego algunos otros vistos en clase:
*/

//Tipo: BigInt (Números muy grandes)
var numeroGrande = 347485734583490584390n //Notar la "n" al final del número
console.log(typeof numeroGrande);

/*
Por que la "n" al final de el numero grande?
indica que el número es un BigInt. BigInt es un
tipo de dato que permite representar números enteros
de tamaño arbitrario, más allá de las limitaciones 
del tipo Number. Esto es útil cuando necesitas trabajar
con números extremadamente grandes que no pueden ser
representados con precisión usando el tipo Number.
*/

//Tipo NaN (Not a Number - Un no Número , esto pasa cuando una operación no es un número válido)
var resultadoInvalido = "Hola" * 10;

console.log(resultadoInvalido);
