/*
** OPERADORES
*/

// OPERADORES ARITMÉTICOS
// +, -, *, /, %, ++, --

// OPERADORES DE ASIGNACIÓN
// =, +=, -=, *=, /=, %=
let x = 5;
x += 3; // x = x + 3
console.log(x); // 8

// OPERADORES DE COMPARACIÓN
// ==, ===, !=, !==, >, <, >=, <=
let y = 5;
console.log(x == y); // true
console.log(x === y); // true

// OPERADORES LÓGICOS &&, ||, !
// && (AND)
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// || (OR)
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// ! (NOT)
console.log(!true); // false
console.log(!false); // true


// OPERADORES CONDICIONAL
// ?:
let age = 25;
let isAdult = (age >= 18) ? 'Yes' : 'No';


// OPERADORES DE CONCATENACIÓN
// +
let firstName = 'John';
let lastName = 'Doe';
console.log(firstName + ' ' + lastName); // John Doe


// OPERADORES DE TIPO
// typeof
console.log(typeof x); // number
console.log(typeof firstName); // string
console.log(typeof fun); // function
console.log(typeof object); // object
console.log(typeof array); // object
console.log(typeof nullValue); // object
console.log(typeof undefinedValue); // undefined


// Operadores de Desplazamiento
// <<, >>, >>>
let z = 5;
console.log(z << 1); // 10 
console.log(z >> 1); // 2
console.log(z >>> 1); // 2


// Operadores de Exponenciación
// **
let a = 2;
let b = 3;
console.log(a ** b); // 8


// Operadores de In
// in
console.log('name' in object); // true


// OPERADOR DE DESESTRUCTURACIÓN
let { name:nombre, lastName, age } = object;
console.log(nombre, lastName, age); // John Doe 25


// DESTRUCTURACIÓN DE ARRAYS
let [first, second, third] = [1, 2, 3, 4];
console.log(first, second, third); // 1 2 3
