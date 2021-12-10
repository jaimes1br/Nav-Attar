
let form = document.getElementById('form');
let nombre = document.getElementById("nombre");
let telefono = document.getElementById('telefono');
let correo = document.getElementById('correo');
let pass = document.getElementById('pass');
let confpass = document.getElementById('confpass');
let alertaDiv = document.getElementById('alertaRegistro');


let usuarios = [];
let usuariosJSON = JSON.stringify(usuarios); //produtos a JSON
localStorage.setItem("usuarios", usuariosJSON); //En localStorage



form.addEventListener('submit', e => {
    e.preventDefault();

    let valido = false;
    let alerta = "";
    alertaDiv.innerHTML = "";
    
    let regexpNombre = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    let regexpTel =/^[0-9]*$/
    let regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-_])[A-Za-z\d@$!%*?&-_]{8,}$/;

    if(!regexpNombre.test(nombre.value) || nombre.value.length <= 2 || nombre.value.length == 0 || nombre.value.length > 20){
        alerta += `<h3>¡Nombre no válido!</h3> <br>`;
        valido = true;
    }//validaciónNombre

    if(!regexpTel.test(telefono.value)  || telefono.value.length < 10 || telefono.value.length >= 12){
        alerta += `<h3>¡Número no válido! </h3><br>`;
        valido = true;
    }//validaciónTeléfono

    if(!regexpEmail.test(correo.value) || correo.value.length == 0 || correo.value.length >= 200){
        alerta += `<h3>¡Correo electrónico no válido!</h3> <br>`;
        valido = true;
    }//validaciónCorreoElectrónico

    if(!regexPass.test(pass.value) || pass.value.length == 0 || pass.value.length > 20){
        alerta += `<h3>¡Contraseña no válida! </h3><br>`;
        valido = true;
    }//validaciónContraseña

    if(pass.value != confpass.value ){
        alerta += `<h3> ¡Las contraseñas no coinciden!</h3>`;
        valido = true;    
    }//validaciónConfirmaciónContraseña



    if(valido){
        alertaDiv.innerHTML += `
        <div class="alert alert-danger" role="alert">
            ${alerta}
        </div>`;
    
    }

    if(!valido){
        guardarRegistro();
        alertaDiv.innerHTML += `
        <div class="alert alert-success" role="alert">
            <h3> ¡Tu registro ha sido exitoso! </h3>
        </div>`;
    }


})


function guardarRegistro(){
    

    let usuario = {
        nombre : nombre.value,
        telefono :  telefono.value,
        correo_electronico : correo.value,
        contrasena : pass.value
    };
    

    let endPoint = 'http://127.0.0.1:8085/api/registro';
    fetch(endPoint, {
	    method: 'post', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
        
    }).then(function(e){
    
    }).catch(function(error){
    })


    usuario['id'] = 100;
    let usuarios = obtener();
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    nombre.value = '';
    telefono.value = '';
    correo.value = '';
    pass.value = '';
    confpass.value = '';
    window.setTimeout(() => {window.location.href = './../pages/loginUser.html';}, 2000);
}//guardamosElRegistroDeUnNuevoUsuario

  
function obtener(){
    
    let objetosJSON = localStorage.getItem("usuarios");      
    let usuarios = JSON.parse(objetosJSON);
   
    return usuarios;
}//obtenerDatosDelLocal

