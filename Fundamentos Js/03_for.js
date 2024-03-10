// For

for (let i = 0; i < 10; i++) {
    console.log(i);
}


// For - in para iterar objetos
let person = { 
    name: 'John', 
    age: 25
};
for (let key in person) {
    console.log(key, person[key]);
}


// For - of para iterar arrays y strings
let colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}
 