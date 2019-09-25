let arrayNu = [1,2,3,1,5,4,7,8,9,3,5,1,9];
function ocurrence(array, n) {
    let cont = 0;
    array.forEach(number => {
        if(number == n) {
            cont++;
        }
    });
    return cont;
}