let nombre = document.getElementById("nombre");
let email = document.getElementById("correo");
let asunto = document.getElementById("asunto");
let mensaje = document.getElementById("mensaje");
let form = document.getElementById("form");


form.addEventListener("submit", e=>{
 e.preventDefault()
 
 let Temail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

if(nombre.value.length <= 2 || nombre.value.length == 0){
    alert("nombre invalido") 
}
if(!Temail.test(email.value) || Temail.value.length==0){
   
  alert("Correo invalido")
}

if(asunto.value.length >= 50 || asunto.value.length == 0){

    alert("asunto invalido")

}

if(mensaje.value.length >= 150 || mensaje.value.length==0){

   alert("mensaje invalido") 

}
})



