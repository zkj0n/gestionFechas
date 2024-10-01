
const limite = document.getElementById("limite");
const mesElement = document.getElementById("mes");
const diaElement = document.getElementById("dia");
const horaElement = document.getElementById("hora");
const minutoElement = document.getElementById("minuto");
const segundoElement = document.getElementById("segundo");
const fechaInput = document.getElementById("fechaInput");
const actualizarBtn = document.getElementById("actualizar");

let fechaLimite = null;
let intervalo = null;


function actualizarFechaLimite() {
  if (fechaLimite) {
    const dd = String(fechaLimite.getDate());
    const mm = String(fechaLimite.getMonth() + 1); 
    const yy = String(fechaLimite.getFullYear()); 
    const hh = String(fechaLimite.getHours());
    const min = String(fechaLimite.getMinutes()).padStart(2, "0");

    limite.innerText = `${dd}-${mm}-${yy}, ${hh}:${min}`;
  }
}


function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const distancia = fechaLimite - ahora;
  

    if (distancia <= 0) {
      clearInterval(intervalo);
      mesElement.innerText = "0";
      diaElement.innerText = "0";
      horaElement.innerText = "0";
      minutoElement.innerText = "0";
      segundoElement.innerText = "0";

      cambiarColorContador("text-danger");
      return;
    }
  
    function cambiarColorContador(claseColor) {

      mesElement.classList.remove("text-success", "text-warning", "text-danger");
      diaElement.classList.remove("text-success", "text-warning", "text-danger");
      horaElement.classList.remove("text-success", "text-warning", "text-danger");
      minutoElement.classList.remove("text-success", "text-warning", "text-danger");
      segundoElement.classList.remove("text-success", "text-warning", "text-danger");
    
  
      mesElement.classList.add(claseColor);
      diaElement.classList.add(claseColor);
      horaElement.classList.add(claseColor);
      minutoElement.classList.add(claseColor);
      segundoElement.classList.add(claseColor);
    }

    const meses = Math.floor(distancia / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((distancia % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
  

    mesElement.innerText = meses;
    diaElement.innerText = dias;
    horaElement.innerText = horas;
    minutoElement.innerText = minutos;
    segundoElement.innerText = segundos;
  

    if (dias > 14) {
      cambiarColorContador("text-success");
    } else if (dias <= 14 && dias > 7) {

      cambiarColorContador("text-warning");
    } else if (dias <= 7) {

      cambiarColorContador("text-danger");
    }
  }
  
function actualizar() {
  const fechaIngresada = fechaInput.value;
  const nuevaFecha = new Date(fechaIngresada);

  if (isNaN(nuevaFecha.getTime())) {
    alert("Fecha inválida. Introduzca en el formato correcto: mm-dd-yyyy hh:mm");
  }

  fechaLimite = nuevaFecha;
  actualizarFechaLimite();

  if (intervalo) {
    clearInterval(intervalo);
  }
  
  intervalo = setInterval(actualizarCuentaRegresiva, 1000);
}

actualizarBtn.addEventListener("click", actualizar);
