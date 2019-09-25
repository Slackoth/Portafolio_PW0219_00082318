let arrayRan = [];
let n = 55;
function fillArray(array, n) {
    let flag = 'No adivinaste~';
    for(let I = 0; I < 20; I++) {
        array.push(Math.floor(Math.random() * 100));
    }
    console.log(array);
    for (let I = 0; I < array.length; I++) {
        if(n == array[I]) {
            flag = 'Adivinaste!';
        }
    }
    return flag;
}