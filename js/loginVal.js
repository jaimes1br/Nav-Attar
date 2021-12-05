
let form = document.getElementById('form');
let correo = document.getElementById("correo");
let pass = document.getElementById('pass');
let alertaLogin = document.getElementById('alertaLogin');

let usuarioSesion = [];
let usuarioSesionJSON = JSON.stringify(usuarioSesion); //produtos a JSON
localStorage.setItem("usuarioEnSesion", usuarioSesionJSON);


form.addEventListener('submit', e => {
    e.preventDefault();
    
    let valido = false;
    let erroneo = true;
    let alerta = "";
    alertaLogin.innerHTML = "";
    

    if(correo.value == ''){
        alerta += `<h3>Introduzca una dirrección de correo</h3> <br>`;
        valido = true;
    }//validaciónCorreoElectrónioEsVacío

    if(pass.value == ''){
        alerta += `<h3>Introducir una contraseña</h3> <br>`;
        valido = true;
    }//validaciónContraseñaVacía


    
    if(!valido){
        
        /**Consolta del arreglo y checamos elemento por elemento si conicide*/
        let usuarios = obtener();
        
        usuarios.forEach(usuario => {
            if(usuario.correo == correo.value && usuario.contrasena == encriptar(pass.value)){
                alertaLogin.innerHTML += `
                    <div class="alert alert-success" role="alert">
                        <h3>Bienvenid@ ${usuario.nombre}</h3> <br>
                    </div>`;
                erroneo = false;

                // Poner usuaario en el local
                iniciarSesion(usuario);
                window.setTimeout(() => {window.location.href = './../index.html';}, 2000);  
                
            }//validaciónExistaElUsuarioEnElLocal

        });

        if(erroneo){
            alerta = `<h3>No pudimos encontrar tu cuenta o </h3> <br>
                      <h3>la contraseña es incorrecta. Vuelve a intentarlo</h3> <br>
                      <h3>o haz clic en "¿Olvidaste tu contraseña?"</h3> <br>`
            valido = true;    
        }//validaciónSiHayProblemasConCorreoOCntraseña
    }

   
   
    if(valido){
        alertaLogin.innerHTML += `
        <div class="alert alert-danger" role="alert">
            ${alerta}
        </div>`;
        pass.value = '';
    
    }


});


function obtener(){
    let objetosJSON = localStorage.getItem("usuarios");
    let usuarios = JSON.parse(objetosJSON);
    
    return usuarios;
}//TomamosDatosDelStorage

function encriptar(palabra){
    return btoa(palabra);
}//encriptamosLaContraseñaIngresada

function iniciarSesion(usuario){

    let usuarioJSON = JSON.stringify(usuario); //produtos a JSON
    localStorage.setItem("usuarioEnSesion", usuarioJSON);
    return
}//siLosDatosSonValidosColocamosEnLocal