
(function() {
    const btnNext = document.querySelector('#next');
    const btnPrev = document.querySelector('#prev');
    
    btnPrev.addEventListener('click', () => {
        let monday = document.getElementById('lunes');
        if(monday.className == 'day show') {
            btnPrev.disabled = true;
        }
        else {
            btnPrev.disabled = false;
            btnNext.disabled = false;
            prevPage();
        }
    });
    btnNext.addEventListener('click', () => {
        let friday = document.getElementById('viernes');
        if(friday.className == 'day show') {
            btnNext.disabled = true;
        }
        else {
            btnPrev.disabled = false;
            btnNext.disabled = false;
            nextPage();
        }
    });
})();

function prevPage() {
    let arrayDay = document.getElementsByClassName('day');
    let cont = 0;
    for (let i = 0; i < arrayDay.length; i++) {
        if(arrayDay[i].className == 'day show') {
            break;
        }
        cont++;
    }
    arrayDay[cont].classList.remove('show');
    arrayDay[cont-1].classList.add('show');
    let day = document.getElementById('title-day');
    day.innerText = `DÍA: ${arrayDay[cont-1].id.toUpperCase()}`;
}

function nextPage() {
    let arrayDay = document.getElementsByClassName('day');
    let cont = 0;
    for (let i = 0; i < arrayDay.length; i++) {
        if(arrayDay[i].className == 'day show') {
            break;
        }
        cont++;
    }
    arrayDay[cont].classList.remove('show');
    arrayDay[cont+1].classList.add('show');
    let day = document.getElementById('title-day');
    day.innerText = `DÍA: ${arrayDay[cont+1].id.toUpperCase()}`;
}