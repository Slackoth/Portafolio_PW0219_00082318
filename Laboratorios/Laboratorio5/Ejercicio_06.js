function order(array) {
    let tmp;
    for (let I = 0; I < array.length; I++) {
        for (let J = 1; J < array.length - I; J++) {
            if(array[J-1] < array[J]) {
                tmp = array[J-1];
                array[J-1] = array[J];
                array[J] = tmp;
            }
        }
    }
    return array;
}