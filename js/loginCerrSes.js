//let usuarioSesion = obtener();
let iniciarSes= document.getElementById("sesIni");

console.log (usuarioSesion);
let usuarioSesion = [];

if (usuarioSesion.length != 0){
    iniciarSes.innerHTML=`
    <a class="nav-link" href="#">
        Cerrar sesión
    </a>` 
}
// El else sobra pues no modifica el código
//else {
    // iniciarSes.innerHTML=`
    // <a class="nav-link dropdown-toggle" href="./../pages/catalogo.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
    //     Iniciar sesión
    // </a>
    // <div class="dropdown-menu" aria-labelledby="navbarDropdown">
    //     <a class="dropdown-item navAttar_listDes" href="./../pages/loginUser.html">Usuario</a>
    //     <a class="dropdown-item navAttar_listDes" href="./../pages/loginArte.html">Artesano</a>
    // </div>`
//}

function obtener(){
    let objetoJSON = localStorage.getItem("usuarioSesion");
    let usuarios = JSON.parse(objetoJSON);

    return usuarios;
}