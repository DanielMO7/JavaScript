/*
Ejemplos de tipos de datos en JavaScript
*/
// Dato tipo String
var nombre = "Juan";
console.log(nombre);

// En javascript las variables son dinamicas, pueden tomar cualquier tipo de dato.
nombre = 10

console.log(typeof nombre);

// Dato tipo numerico

var numero = 1000;
console.log(numero);

// Dato tipo object

var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "32254654"
}

console.log(typeof objeto)

// Dato tipo boolean
var bandera = true;

console.log(bandera)

// Dato tipo function
function miFuncion(){}
console.log(typeof miFuncion)

// Dato de tipo Symbol
var simbolo= Symbol("Mi simbolo");
console.log(typeof simbolo);

// Dato de tipo clase es una funcion
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona)

// Dato tipo undefined
var x;
console.log(typeof x);

// null = ausencia de valor
var y = null
console.log(typeof y);

x = undefined;
console.log(typeof x);

var autos= ['BMW', 'Audi', 'Volvo'];

//Un arreglo es un tipo object
console.log(autos);
console.log(typeof autos)

// Cadenas vacia
var z = '';
console.log(z);
console.log(typeof z);


