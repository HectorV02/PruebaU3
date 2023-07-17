function GenerarF(){
    alert("Usted Seleccionado el Nivel Facil : ");
    var tabla="<table border=\"0\">";
    for(i=0;i<9;i++){
    tabla+="<tr>";
    for(j=0;j<9;j++){
    tabla+="<td>"+"<a href=\"#\" oncontextmenu = \"disapear();\">"+"<IMG   src=\"Bloque.ico\" id = \"block\">"+"</a>" ++"<a href=\"#\" oncontextmenu = \">"+"<IMG   src=\"bandera.png\" id = \"block\">"+"</a>""</td>";
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
    tabla+="<td>"+"<a href=\"#\" oncontextmenu = \"disapear();\">"+"<IMG   src=\"Bloque.ico\" id = \"block\">"+"</a>" ++"<a href=\"#\" oncontextmenu = \">"+"<IMG   src=\"bandera.png\" id = \"block\">"+"</a>""</td>";
    }
    tabla+="</tr>";
    }
    tabla+="</table>";
    document.getElementById("Resultado").innerHTML=tabla;
    
  };
  
  function GenerarD(){
    alert("Usted Seleccionado el Nivel Dificil : ");
    var tabla="<table border=\"0\">";
    for(i=0;i<32;i++){
    tabla+="<tr>";
    for(j=0;j<32;j++){
    tabla+="<td>"+"<a href=\"#\" oncontextmenu = \"disapear();\">"+"<IMG   src=\"Bloque.ico\" id = \"block\">"+"</a>" ++"<a href=\"#\" oncontextmenu = \">"+"<IMG   src=\"bandera.png\" id = \"block\">"+"</a>""</td>";
    }
    tabla+="</tr>";
    }
    tabla+="</table>";
    document.getElementById("Resultado").innerHTML=tabla;
    
  };
  
  function generarCovid(tabla, tamanio){
    var Covid1 = [Math.random*9, Math.random*9];
    var Covid2 = [Math.random*9, Math.random*9];
    var Covid3 = [Math.random*9, Math.random*9];
    if (tamanio>=16){
      var Covid4 = [Math.random*9, Math.random*9];
      var Covid5 = [Math.random*9, Math.random*9];
      var Covid6 = [Math.random*9, Math.random*9];
      if (tamanio==32){
        var Covid7 = [Math.random*9, Math.random*9];
        var Covid8 = [Math.random*9, Math.random*9];
        var Covid9 = [Math.random*9, Math.random*9];
      }
    }
  }
  
  function CrearTabla(){
  
    var Op1=document.getElementById("Facil");
    var Op2=document.getElementById("Medio");
    var Op3=document.getElementById("Dificil");
  
  
    if (Op1.checked==true){
    tabla=GenerarF();
    generarCovid(tabla, 9);
    }
    else if (Op2.checked==true){
    tabla=GenerarM(tabla, 16);
    generarCovid(tabla, 16);
    } 
    else if (Op3.checked==true){
    tabla=GenerarD(tabla, 32);
    generarCovid(tabla, 32);
    }
    
  };
