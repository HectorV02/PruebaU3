let tiempo = 0;
let timerInterval;

function iniciarTemporizador() {
  timerInterval = setInterval(actualizarTemporizador, 1000);
}

function actualizarTemporizador() {
  tiempo++;
  document.getElementById("timer").textContent = tiempo;
}

function detenerTemporizador() {
  tiempo=0;
  clearInterval(timerInterval);
}

function GenerarF(){
  alert("Usted Seleccionado el Nivel Facil : ");
  var tabla="<table border=\"0\">";
  for(i=0;i<9;i++){
  tabla+="<tr>";
  for(j=0;j<9;j++){
  tabla+="<td>"+"<a href=\"#\" onClick = \"disapear();\">"+"<IMG src=\"Bloque.ico\" id = \"block\">"+"</a>" +"</td>";
  }
  tabla+="</tr>";
  }
  tabla+="</table>";
  document.getElementById("Resultado").innerHTML=tabla;
  
};

function GenerarM(){
  alert("Usted Seleccionado el Nivel Medio : ");
  var tabla="<table border=\"0\">";
  for(i=0;i<16;i++){
  tabla+="<tr>";
  for(j=0;j<16;j++){
    tabla+="<td>"+"<a href=\"#\" onClick = \"disapear();\">"+"<IMG src=\"Bloque.ico\" id = \"block\">"+"</a>" +"</td>";
  }
  tabla+="</tr>";
  }
  tabla+="</table>";
  document.getElementById("Resultado").innerHTML=tabla;
  
};
function disapear(id){
  document.getElementById(id).style.opacity = "0";
}
function GenerarD(){
  alert("Usted Seleccionado el Nivel Dificil : ");
  var tabla="<table border=\"0\">";
  for(i=0;i<32;i++){
  tabla+="<tr>";
  for(j=0;j<32;j++){
    tabla+="<td>"+"<a href=\"#\" onClick = \"disapear();\">"+"<IMG src=\"Bloque.ico\" id = \"block\">"+"</a>" +"</td>";
  }
  tabla+="</tr>";
  }
  tabla+="</table>";
  document.getElementById("Resultado").innerHTML=tabla;
  
};

function CrearTabla() {
  var Op1 = document.getElementById("Facil");
  var Op2 = document.getElementById("Medio");
  var Op3 = document.getElementById("Dificil");

  if (Op1.checked == true) {
    GenerarF();
  }
  if (Op2.checked == true) {
    GenerarM();
  }
  if (Op3.checked == true) {
    GenerarD();
  }
}

function Crear2() {
  // Resto de tu código para salir del juego

  detenerTemporizador();
}