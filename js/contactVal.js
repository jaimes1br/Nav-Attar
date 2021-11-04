let nombre = document.getElementById("nombre");
let email = document.getElementById("correo");
let asunto = document.getElementById("asunto");
let mensaje = document.getElementById("mensaje");
let form = document.getElementById("form");
let alertaDiv = document.getElementById("alerta");

form.addEventListener("submit", e=>{
 e.preventDefault()
  
 let valido = false
 let alerta = ""
 alertaDiv.innerHTML = ""
 let Temail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if(nombre.value.length <= 2 || nombre.value.length == 0){
      alerta += `Nombre no valido <br>`
      valido = true
  }
  if(!Temail.test(email.value) || email.value.length==0){
    
    alerta += `Email no valido <br>`
    valido = true
  }

  if(asunto.value.length >= 50 || asunto.value.length == 0){

    alerta += `Asunto no valido <br>`
    valido = true
  }

  if(mensaje.value.length >= 150 || mensaje.value.length==0){

    alerta += `Mensaje no valido <br>`
    valido = true

  }

  if(valido){

    alertaDiv.innerHTML = ` 
        <div class="alert alert-dark" role="alert"> 
        ${alerta}
          
        </div>`;

  }else{

    var correo = document.createElement("a");
    correo.href = `b1jaimes89@gmail.com?subject=${asunto.value}
    &body=Nombre:\n\n ${nombre.value}
    \n\nMensaje: \n\n ${mensaje.value}
    \n\n Correo Cliente: ${correo.value}`;

    correo.click();
  }

})





