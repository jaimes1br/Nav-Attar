let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let asunto = document.getElementById("asunto");
let mensaje = document.getElementById("mensaje");
let form = document.getElementById("form");

// form.addEventlistener("submit", e=>{
//   e.preventDefault()
//   if(nombre.ariaValueMax.length > 50){
//     alert("Nombre corto")
//   }
// })

nombre.addEventListener("click", function(e){
    let validContac;
    function validContac(){
    
        if(nombre == "")   
    {
        return div_error.innerHTML="El campo del nombre esta vacío";
        }else if (nombre.length>50 ){
            return div_error.innerHTML="El campo del nombre es muy large"; 
        }
        else{
            return div_error.innerHTML = "Campo validado";
        }
    }
});
