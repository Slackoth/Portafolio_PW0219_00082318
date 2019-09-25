let radius = 5;
function area(r) {
    let area;
    if(r <= 0) {
        area = -1;
    } else {
        area = Math.PI*Math.pow(r,2);
    }
    return area;
}