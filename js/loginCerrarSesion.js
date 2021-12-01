let usuarioSesion = obtener();
let iniciarSes= document.getElementById("sesIni");

// console.log (usuarioSesion);
// let usuarioSesion = [7];

if (usuarioSesion.length != 0){
    iniciarSes.innerHTML=`
    <a class="nav-link" id="cerrarSesion">
        Cerrar sesión
    </a>` 
    let cerrarSesion = document.getElementById("cerrarSesion");
    cerrarSesion.addEventListener("click", function(e){
        e.preventDefault();
        console.log("Hey me apachurraste");
        usuarioSesion = [];
        let cerrarJSON = JSON.stringify(usuarioSesion); //produtos a JSON
        localStorage.setItem("usuarioSesion", cerrarJSON);
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

function obtener(){
    let objetoJSON = localStorage.getItem("usuarioSesion");
    let usuarios = JSON.parse(objetoJSON);

    return usuarios;
}