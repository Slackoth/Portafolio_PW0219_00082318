let carne_campo = document.querySelector("#carnet_field");
let schedule_dropdown = document.querySelector("#schedule_field");
let checkbox = document.querySelector("#late_switch");
let submit_btn = document.querySelector("#submit_btn");

let table_body = document.querySelector("#table_body");
let carne_regex = new RegExp('[0-9]{8}'); //Expresion regular (solo puede del 0-9 y 8 digitos nada mas)

let  agregarEstudiante = (carne, shcedule, late) => {
    let new_row = document.createElement('tr');
    let date = new Date();


    new_row.className = 'table-active'; //agregamos una clase al tag tr
    new_row.innerHTML = 
    `<th scope = 'row'>${carne}</th>
    <td>${shcedule}</td>
    <td>${date.toLocaleString()}</td>
    <td>${late}</td>`;
    table_body.appendChild(new_row); //lo coloca de ultimo
}

let parseLateSwitch = (value) => {
    if(value) {
        return 'Tarde >:v pero wapo ;v';
    }
    return 'Justo a tiempo wapeton ;v';
}

submit_btn.addEventListener("click",()=>{
    let carne = carne_campo.value;
    let shcedule = schedule_dropdown.options[schedule_dropdown.selectedIndex].text;
    let late = parseLateSwitch(checkbox.checked);

    if(carne_regex.test(carne)) {
        agregarEstudiante(carne,shcedule,late);
    }
    else {
        alert('Formato de carne no valido');
    }
});

carne_campo.addEventListener("keyup", (event) => {
    let keyCode = event.keyCode;
    let carne = carne_campo.value;

    if(keyCode == 13) {
        submit_btn.click();
    }

    if(carne_regex.test(carne)) {
        submit_btn.disabled = false;
    }
    else {
        submit_btn.disabled = true;
    }
});


