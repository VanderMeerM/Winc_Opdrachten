
let person = {
    name: 'Marcel',
    age: 44,
    evaluations: [7, 10, 9]
}
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person['name']);
console.log(person['age']);

console.log(person['evaluations']);

let kleuren = ['groen','blauw','rood'];
console.log (kleuren);
console.log (kleuren.length);
console.log(kleuren[0]);
console.log(kleuren[kleuren.length-1]);
kleuren.push('geel');
kleuren.push(5);
kleuren.push({greeting: "hi ik ben een object"});
console.log(kleuren[kleuren.length-1]);
