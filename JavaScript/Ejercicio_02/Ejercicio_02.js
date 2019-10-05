/*Traspaso de datos a traves de JSon */
let object = {
    "squirrel": false,
    "events": ["work", "touched tree", "pizza", "running"]
  }
  
  let string = JSON.stringify({squirrel: false,
                               events: ["weekend"]});
  console.log(string);
  console.log(JSON.parse(string));
/*Abstracting*/
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
//1.
let departments = [];
repeat(5, i => departments.push(`Department ${i}`));
console.log({departments}); // Only for get a name of the var
//2.
/*let par = [];
repeat(1001, n => {
    if (n % 2 === 0) {
        par.push(n);
    }
});
console.log(par);*/
/*High-order functions: functions that operate on other functions*/
//1.
function lessThan(n) {
    return m => m < n;
}
let lessThan10 = lessThan(10);
console.log(lessThan10(4));
//2. 
function unless(test, then) {
    if (!test) then();
}
  
unless( 2 > 3, n => console.log("ok"))
/*Array higher-order functions*/
//['A', 'B'].forEach(i => console.log(i));

//Ejercicio_01
let arrayOne = [9,6,5,4,3,2,1,0];
let even = [];
//arrayOne.forEach(evenNumber);
/*function evenNumber(num, index, array) { 
    if(num % 2 === 0) {
        even.push(num);
        console.log(even);
    }
}*/
function filter(array, test) {
    let passed = [];
    for (let element of array) {
      if (test(element)) {
        passed.push(element);
      }
    }
    return passed;
}
filter([1,3,5,6,7,10], e => e % 2 == 0);

//Ejercicio_02
let journal = [
    {
        events: ['cut','sleep'],
        accident: true
    },
    {
        events: ['dance', 'cook'],
        accident: false
    },
    {
        events: ['cut', 'cook'],
        accident: true
    }
];

function Transform(array, event) {
    let arrayEvent = [];
    for(let element of array) {
        arrayEvent.push(event(element));
    }
    return arrayEvent;
}

Transform(journal, event => event.events);

//Ejercicio_03
let arrayNum = [1,2,3,4,5];

function Reduce(array, combine, start) {
    let current = start;
    for(let element of array) {
        current = combine(current, element);
    }
    return current;
}
Reduce(arrayNum, (a,b) => {
    return a+b;
}, 0);



