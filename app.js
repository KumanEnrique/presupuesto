const fecha = document.getElementById("fecha");
const display = document.getElementById("display");
const totalEntrada = document.getElementById("totalEntrada");
const totalSalida = document.getElementById("totalSalida");
const form = document.getElementById("form");
const listaEntrada = document.getElementById("listaEntrada");
const listaSalida = document.getElementById("listaSalida");
const select = document.getElementById("select");
const descripcion = document.getElementById("descripcion");
const valor = document.getElementById("valor");
const contenido = document.getElementById("contenido");

const btnEliminar = document.getElementById("eliminar");

let total = 0;
let entrada = 0;
let salida = 0;
display.textContent = `$${total}`;
totalEntrada.textContent = `$${entrada}`;
totalSalida.textContent = `$${salida}`;

fecha.innerText = `CARTERA DEL ${new Date().toLocaleDateString()}`

function elementoLista(descripcion,valor){
    const elemento = document.createElement("li");
    elemento.className = 'list-group-item d-flex justify-content-between';
    elemento.innerHTML = `<p onload='console.log(22)'>${descripcion}</p>
    <p>$${valor}</p>`;
    return elemento
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const elemento = elementoLista(descripcion.value,valor.value);
    if(select.value === 'Entrada'){
        listaEntrada.appendChild(elemento);
        total += Number(valor.value);
        display.textContent = '$' + total;
        entrada += Number(valor.value);
        totalEntrada.textContent = '$' + entrada;
    }else{
        listaSalida.appendChild(elemento);
        total -= Number(valor.value);
        display.textContent = '$' + total;
        salida += Number(valor.value);
        totalSalida.textContent = '$' + salida;
    }
    form.reset();
})

// btnEliminar.style.display = 'none'
btnEliminar.addEventListener('click',()=>{
    total = 0;
    entrada = 0;
    salida = 0;
    listaEntrada.innerHTML = "";
    listaSalida.innerHTML = "";
    display.textContent = '$0';
    totalEntrada.textContent = '$0';
    totalSalida.textContent = '$0';
})