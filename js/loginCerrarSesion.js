import { actualizarCanasta } from './carritoCanasta.js';

actualizarCanasta();
checarSesion();

function checarSesion(){

    let usuarioSesion = obtener();  
    // let usuarioSesion = obtener();
    let iniciarSes = document.getElementById("sesIni");

    if(usuarioSesion != null){
        console.log('ensesion')
        iniciarSes.innerHTML=`
        <a class="nav-link" id="cerrarSesion">
            Cerrar sesión
        </a>` 
        let cerrarSesion = document.getElementById("cerrarSesion");
        cerrarSesion.addEventListener("click", function(e){
            e.preventDefault();
            
            sessionStorage.removeItem('sessionToken');
            window.setTimeout(() => {window.location.href = './../index.html';}, 1000);
        });        
    }



}

export{ checarSesion }


function obtener(){
    let dato = sessionStorage.getItem('sessionToken');
    
    return dato;
}