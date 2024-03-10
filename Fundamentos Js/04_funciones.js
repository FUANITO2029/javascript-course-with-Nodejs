/*
* Funciones
*/

// Declaración de función
function greet() {
    console.log('Hello World!');
}
greet();

// Función anónima
let greet = function() {
    console.log('Hello World!');
};
greet();

// Función flecha
let greet = () => {
    console.log('Hello World!');
};
greet();

// Función con parámetros
let greet = (name) => {
    console.log('Hello ' + name);
};
greet('John');

// Función con valor de retorno
let greet = (name) => 'Hello ' + name;
console.log(greet('John'));


