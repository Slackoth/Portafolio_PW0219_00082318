let carne_campo = document.querySelector("#carnet_field");
let schedule_dropdown = document.querySelector("#schedule_field");
let checkbox = document.querySelector("#late_switch");
let submit_btn = document.querySelector("#submit_btn");

let table_body = document.querySelector("#table_body");
let carne_regex = new RegExp('[0-9]{8}'); //Expresion regular (solo puede del 0-9 y 8 digitos nada mas)

let student_list = [];
let serial = 0;

let printArray  = () => {
        table_body.innerHTML="";

        student_list.forEach(elem => {
        let new_row = document.createElement('tr');

        new_row.className = 'table-active'; //agregamos una clase al tag tr
        new_row.innerHTML = 
        `<th scope = 'row'>${elem.carne}</th>
        <td>${elem.horario}</td>
        <td>${elem.ingreso}</td>
        <td>${elem.tarde}</td>`;
    
        let new_btn = document.createElement("button");
        let new_input = document.createElement("input");

        let new_cell = document.createElement("td");
        let new_cell_confirm = document.createElement("td");
    
        //Personalizacion del boton
        new_btn.className = 'btn btn-danger';
        new_btn.innerText = "not wapo enough :v"
        new_btn.value = elem.id;
        
        //Columna confirmar
        new_input.type = "text";
        new_input.id = elem.id;
        

        /*Evento click para eliminar*/ 
        new_btn.addEventListener('click', (event) => {
            let id_actual = event.target.value;
            let inputText = document.getElementById(event.target.value);
    
            student_list.forEach((element, position) => {
                if(id_actual == element.id && inputText.value == element.carne) {
                    student_list.splice(position, 1);
                    printArray();
                }
            });
        });
    
        new_cell.appendChild(new_btn);
        new_cell_confirm.appendChild(new_input);
        new_row.appendChild(new_cell);
        new_row.appendChild(new_cell_confirm);
        table_body.appendChild(new_row); //lo coloca de ultimo  

    });
}

let  agregarEstudiante = (carne, schedule, late) => {
    let date = new Date();
    let datetime_string = date.toLocaleString();
        
    student_list.push({
        "id": serial,
        "carne": carne,
        "horario": schedule,
        "tarde": late,
        "ingreso": datetime_string
    });   
    serial++;
    printArray();
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
        alert('Formato de carne no valido >:v');
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


