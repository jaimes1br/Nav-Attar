let nombre = document.getElementById("nombre");
let email = document.getElementById("correo");
let asunto = document.getElementById("asunto");
let mensaje = document.getElementById("mensaje");
let form = document.getElementById("form");
let alertas = document.getElementById("alerta");

form.addEventListener("submit", e=>{
 e.preventDefault()
  
 let valido = false
 let alerta = ""
 alertas.innerHTML = ""
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

<<<<<<< HEAD
  alertas.innerHTML = alerta;
=======
    alertaDiv.innerHTML = ` 
        <div class="alert alert-dark" role="alert"> 
        ${alerta}
          
        </div>`;
>>>>>>> 8e0830cda1a76b19d53dc347f0be1e4d1c2c444e

  }else{

<<<<<<< HEAD
  var dir = document.createElement("a");
        dir.href = `mailto:nav.attar.contact@gmail.com?subject=${asunto.value}&body=${nombre.value}%20%0D%0A %20%0D%0A${mensaje.value} %20%0D%0A %20%0D%0A %20%0D%0A Correo cliente: ${correo.value}`;
        dir.click();
}
=======
    var correo = document.createElement("a");
    correo.href = `b1jaimes89@gmail.com?subject=${asunto.value}
    &body=Nombre:\n\n ${nombre.value}
    \n\nMensaje: \n\n ${mensaje.value}
    \n\n Correo Cliente: ${correo.value}`;

    correo.click();
  }
>>>>>>> 8e0830cda1a76b19d53dc347f0be1e4d1c2c444e

})





