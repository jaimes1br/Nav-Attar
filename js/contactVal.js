
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

