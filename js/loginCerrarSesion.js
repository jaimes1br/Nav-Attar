import { actualizarCanasta } from './carritoCanasta.js';

actualizarCanasta();
checarSesion();

function checarSesion(){

    let usuarioSesion = obtener();
    let iniciarSes = document.getElementById("sesIni");



    if (usuarioSesion.length != 0){
    iniciarSes.innerHTML=`
    <a class="nav-link" id="cerrarSesion">
        Cerrar sesión
    </a>` 
    let cerrarSesion = document.getElementById("cerrarSesion");
    cerrarSesion.addEventListener("click", function(e){
        e.preventDefault();
        usuarioSesion = [];
        let cerrarJSON = JSON.stringify(usuarioSesion); //produtos a JSON
        localStorage.setItem("usuarioEnSesion", cerrarJSON);
        window.setTimeout(() => {window.location.href = './../index.html';}, 1000);
    });

    }
    else {
    iniciarSes.innerHTML=`
    <a class="nav-link dropdown-toggle" href="./../pages/catalogo.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
        Iniciar sesión
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item navAttar_listDes" href="./../pages/loginUser.html">Usuario</a>
        <a class="dropdown-item navAttar_listDes" href="./../pages/loginArte.html">Artesano</a>
    </div>`
    }


}

export{ checarSesion }


function obtener(){
    let objetoJSON = localStorage.getItem("usuarioEnSesion");
    let usuarios = JSON.parse(objetoJSON);

    return usuarios;
}