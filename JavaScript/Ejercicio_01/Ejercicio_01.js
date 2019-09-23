//Normal function
function drawPyramid() {
    let listPyramid = ['*'];
    for (let I = 0; I < 5; I++) {
        console.log(listPyramid);
        listPyramid.unshift('*');
        listPyramid.push('*');
    }
}
//Arrow function
let sqrtMultiply = (x,y) => {
    return Math.sqrt(x) * y;
}
//Objects
let person = {
    name: 'Pipo',
    age: 19
};

console.log(`Nombre: ${person.name}. Edad: ${person.age}`);
person.name = 'Perla';
console.log(`Nombre: ${person.name}. Edad: ${person.age}`);
delete person.age;
console.log('age' in person);
console.log('name' in person);
Object.assign(person, {age: 20, name: 'Pipo', lastName: 'Perla'});
console.log(person);

//Ejercicio_01
let diary = {
    event: ['cook', 'dance', 'sing', 'drink'],
    accident: false
};
let journal = [
    {
        event: ['cut', 'dance', 'sing', 'clean'],
        accident: true
    },
    {
        event: ['sleep', 'drink', 'eat', 'cook'],
        accident: false
    },
    {
        event: ['drink', 'cut', 'watch', 'sing'],
        accident: true
    }
];
journal.push(
    {
        event: ['sleep', 'eat', 'watch', 'sing'],
        accident: false
    }
);
console.log(journal);
//Mutability
let objectA = {
    value: 15
};
let objectB = objectA;
let objectC = {
    value: 15
};
console.log(objectA == objectB);
console.log(objectA == objectC);

//Ejercicio_02
function addEntry(journal, event, accident) {
   journal.push({event, accident});
}

let num = [5,4,3,2,1];
//Method 1
num.forEach(output);
function output(n, index, num) {
    console.log(`Position ${index}: ${n}`);
}
//Method 2
num.forEach((n, I) => {
    console.log(`Position ${I}: ${n}`);
});
//Other example
journal.forEach(entryPut);
function entryPut(entry, index, journal) {
    console.log(`Entry: ${index}: ${entry}`);    
}
journal.forEach((entry, index) => {
    console.log(`Entry: ${index}: ${entry}`);
});

//Rest parameters
function min(...numbers) {
    let result = Infinity;
    for (let number of numbers) {
      if (number < result) result = number;
    }
    return result;
}
let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
