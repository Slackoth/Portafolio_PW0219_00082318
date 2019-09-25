let arrayN
function sumAverage(array) {
    let cont = 0;
    let sum = 0;
    array.forEach(number => {
        sum += number;
        cont++;        
    });
    console.log(sum);
    return (sum/cont);
}