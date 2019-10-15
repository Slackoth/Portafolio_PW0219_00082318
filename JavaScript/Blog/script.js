
(function() {
    const btnNext = document.querySelector('#next');
    const btnPrev = document.querySelector('#prev');
    const liDay = document.getElementsByClassName('list');

    /*liDay.array.forEach(element => {
        element.addEventListener('click', () => {
            let day = element.id;
        });
    }); NO SIRVE????*/
    //addLi(liDay, 'click', changeDay);

    for (let i = 0; i < liDay.length; i++) {
        let day = liDay[i].id.split('-');
        liDay[i].addEventListener('click', () => {
            changeDay(day);
        });
    }
    
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
    let arrayCode = document.getElementsByClassName('code');
    let arrayDay = document.getElementsByClassName('day');
    let cont = 0;
    for (let i = 0; i < arrayDay.length; i++) {
        if(arrayDay[i].className == 'day show') {
            break;
        }
        cont++;
    }
    arrayCode[cont].classList.remove('show');
    arrayDay[cont].classList.remove('show');
    arrayCode[cont-1].classList.add('show')
    arrayDay[cont-1].classList.add('show');
    let day = document.getElementById('title-day');
    day.innerText = `DÍA: ${arrayDay[cont-1].id.toUpperCase()}`;
}

function nextPage() {
    let arrayDay = document.getElementsByClassName('day');
    let arrayCode = document.getElementsByClassName('code');
    let cont = 0;
    for (let i = 0; i < arrayDay.length; i++) {
        if(arrayDay[i].className == 'day show') {
            break;
        }
        cont++;
    }
    arrayCode[cont].classList.remove('show');
    arrayDay[cont].classList.remove('show');
    arrayCode[cont+1].classList.add('show')
    arrayDay[cont+1].classList.add('show');
    let day = document.getElementById('title-day');
    day.innerText = `DÍA: ${arrayDay[cont+1].id.toUpperCase()}`;
}

/*function addLi(arrayObject, event, functionDo) {
    for(var i = 0; i < arrayObject.length; i++) {
        let day = arrayObject[i].id.split('-');
        console.log(day[1]);
        arrayObject[i].addEventListener(event, () =>{
            functionDo(day[1]);
        });
    }

}*/

function changeDay(day) {
    let arrayDay = document.getElementsByClassName('day');
    let arrayCode = document.getElementsByClassName('code');
    let cont = 0;
    for (let i = 0; i < arrayDay.length; i++) {
        if(arrayDay[i].className == 'day show') {
            break;
        }
        cont++;
    }

    arrayDay[cont].classList.remove('show');
    arrayCode[cont].classList.remove('show');
    cont = 0;
    for (let i = 0; i < arrayDay.length; i++) {
        if(arrayDay[i].id.toLowerCase() == day[1].toLowerCase()) {
            break;
        }
        cont++;
    }
    arrayDay[cont].classList.add('show');
    arrayCode[cont].classList.add('show');
    let dayId = document.getElementById('title-day');
    dayId.innerText = `DÍA: ${day[1].toUpperCase()}`;
    
}