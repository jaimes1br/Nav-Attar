const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");

form.addEventlistener("submit", e=>{
  e.preventDefault()
  if(nombre.ariaValueMax.length <6){
    alert("Nombre corto")
  }
})