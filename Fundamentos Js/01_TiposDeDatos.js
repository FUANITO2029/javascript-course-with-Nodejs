/*
** Tipos de datos primitivos
*/

let number = 5;
let string = 'Hello World';
let boolean = true;
let nullValue = null;
let undefinedValue = undefined;


/*
** Tipos de datos estructurales
*/

// 1. Array
let array = [1, 2, 3, 4, 5];
let array2 = new Array('Venezuela', 'Colombia', 'Peru', 'Ecuador');
let array3 = new Array(5); // Crea un array con 5 espacios vacios

// 2. Object
let object = {
  name: 'John',
  lastName: 'Doe',
  age: 25,
  cities: ['New York', 'Los Angeles', 'Miami']
};

// 3. Function
function sum(a, b) {
  return a + b;
}

let fun = (a, b) => a + b;