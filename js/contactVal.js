const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");

<<<<<<< HEAD
let valName = document.getElementById("nombre");
valName.addEventListener("click", function(e){
    let validContac;
    function validContac(){

        const nombre;
    
        nombre=document.getElementById("nombre").value;
    
        if(nombre == "")   
    {
        div_error.innerHTML="El campo del nombre esta vacío";
        return false;
        }else if (nombre.length>50 ){
            div_error.innerHTML="El campo del nombre es muy large"; 
        return false;
        }
        else{
            div_error.innerHTML = "Campo validado";
        }
    }
});

=======
form.addEventlistener("submit", e=>{
  e.preventDefault()
  if(nombre.ariaValueMax.length <6){
    alert("Nombre corto")
  }
})
>>>>>>> 2e67459e63843a32531c7f14e45b1155c43b63fc
