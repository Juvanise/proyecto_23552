//defino valor de ticket
const valorTicket = 200;

//Defino porcentaje de descuento
let descEstudiante= 80;
let descTrainee = 50;
let descJunior= 15;

//Elementos en variable
let nombre = document.getElementById("nombre");
let divErrorNombre = document.getElementById("mensajeErrorNombre");
let apellido = document.getElementById("apellido");
let divErrorApellido = document.getElementById("mensajeErrorApellido");
let mail = document.getElementById("mail");
let divErrorMail = document.getElementById("mensajeErrorMail")
let cantidadTickets = document.getElementById("cantidadTickets");
let divErrorTickets = document.getElementById("mensajeErrorTickets");
let categoria = document.getElementById("categoriaSelect");
let divErrorCategoria = document.getElementById("mensajeErrorCategoria");
//Funcion para quitar estilo de error
const quitarClaseError = ()=> {
    let listaNodos = document.querySelectorAll(".form-control,.form-select");
    for (let i = 0; i < listaNodos.length; i++) {
        listaNodos[i].classList.remove('is-invalid');
        }
    let listaNodosDiv = document.querySelectorAll(".invalid-feedback");
    for (let i = 0; i < listaNodosDiv.length; i++) {
        listaNodosDiv[i].classList.remove('.propia');
        }   
}
//calculo total a pagar
const totalAPagar = ()=> {
    quitarClaseError();
    
    if (nombre.value === "") {
        /*alert("Por favor ingrese su nombre");*/
        nombre.classList.add('is-invalid');
        divErrorNombre.classList.add("propia");
        nombre.focus();
        return;
    }
    if (apellido.value === "") {
        /*alert("Por favor ingrese su apellido");*/
        apellido.classList.add('is-invalid');
        divErrorApellido.classList.add("propia");
        apellido.focus();
        return;
    }
    if (mail.value === "") {
        /*alert("Por favor ingrese su mail");*/
        mail.classList.add('is-invalid');
        divErrorMail.classList.add("propia");
        mail.focus();
        return;
    }
    const emailValido = mail =>{
        return  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(mail);
    }
    if (!emailValido(mail.value)) {
        alert("Escribe un mail valido");
        mail.classList.add('is-invalid');
        mail.focus();
        return;
    }
//verifico que esta ingresado al menos un ticket
if ((cantidadTickets.value == 0)|| (isNaN(cantidadTickets.value))) {
    /*alert("Ingrese los ticket correctamente");*/
    cantidadTickets.classList.add("is-invalid");
    divErrorTickets.classList.add('propia');
    cantidadTickets.focus();
    return;
}
//verifico que haya seleccionado una categoria
if (categoria.value == "") {
    alert("seleccione una categoria")
    categoria.classList.add("is-invalid");
    categoria.focus();
    return;
}
//multiplico cantidad de tickets por el valor
let totalValorTickets = (cantidadTickets.value) * valorTicket;
switch (categoria.value) {
    case "0":
         totalValorTickets = totalValorTickets
        break;
    case "1": 
        totalValorTickets = totalValorTickets - (descEstudiante/100 * totalValorTickets);
        break;
    case "2":
        totalValorTickets = totalValorTickets - (descTrainee/100 * totalValorTickets);
        break;
    case "3":
        totalValorTickets = totalValorTickets - (descJunior/100 * totalValorTickets);
        break;       
}
totalPago.innerHTML = totalValorTickets;   
}
btnResumen.addEventListener('click',totalAPagar);
//funcion para el boton borrar
const resetTotalAPagar = ()=>{
    quitarClaseError();
    totalPago.innerHTML = "";
}
btnBorrar.addEventListener('click',resetTotalAPagar);