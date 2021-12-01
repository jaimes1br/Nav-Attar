document.getElementById("myHeadpage").innerHTML = `<div class="container-fluid px-0">
<nav class="navbar navbar-expand-lg navbar-light navAttar">
  
  <a class="navbar-brand" href="./../index.html" >
    <img src="./../img/logos/logoNombre.png"  width="170px" alt="Nav-Attar" class="d-inline-block align-top ">
  </a> <!--logoNavAttar-->

  <div class = "navBarUsuarioLista">
    <ul class="">
      
      <li class="nav-item navBar-item">
          <a href="" aling="right"><img src="./../img/iconos/basket1.png"  aling="right" alt="">  <span class="badge badge-danger navBarUsuarioContador">100</span></a>
      </li><!--artesanos-->

    </ul><!--listaNAvUsuario-->
  </div><!--elementosUsuarios-->  
  
  <button class="navbar-toggler navAttar-hamburgerTam" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon navAttar-hamburgerTam"></span>
  </button> <!--buttonHamburguesa-->

  <div class="collapse navbar-collapse" id="navbarNav"> 
    <ul class="navbar-nav ml-auto navAttar_list">
      <li class="nav-item dropdown mr-5">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
          Contacto
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item navAttar_listDes" href="./../pages/contactoNav.html"> Nav-Attar</a>
          <a class="dropdown-item navAttar_listDes" href="./../pages/contactoEquipo.html">Equipo de desarrollo</a>                            
        </div>
      </li> <!--contactos-->

      <li class="nav-item mr-5">
        <a class="nav-link" href="./../pages/nosotros.html">Nosotros</a>
      </li> <!--nosotros-->

      <li class="nav-item mr-5">
        <a class="nav-link" href="./../pages/artesanosCard.html">Artesanos</a>
      </li><!--artesanos-->

      <li class="nav-item dropdown mr-5">
        <a class="nav-link dropdown-toggle" href="./../pages/catalogo.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
          Catálogo
        </a>
       <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item navAttar_listDes" href="./../pages/catalogo.html?cat=Todos">Todos</a>
        <a class="dropdown-item navAttar_listDes" href="./../pages/catalogo.html?cat=Caricaturas">Caricaturas</a>
        <a class="dropdown-item navAttar_listDes" href="./../pages/catalogo.html?cat=Celebridades">Celebridades</a>
        <a class="dropdown-item navAttar_listDes" href="./../pages/catalogo.html?cat=Mascotas">Mascotas</a>
        <a class="dropdown-item navAttar_listDes" href="./../pages/catalogo.html?cat=Personajes">Personajes</a>
        <a class="dropdown-item navAttar_listDes" href="./../pages/catalogo.html?cat=Personalizados">Personalizados</a>
        <a class="dropdown-item navAttar_listDes" href="./../pages/catalogo.html?cat=Superheroes">Superhéroes</a>
      </div>
      </li> <!--catalogo-->

      
      <li class="nav-item dropdown mr-4" id="sesIni">
        <a class="nav-link dropdown-toggle" href="./../pages/catalogo.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
          Iniciar sesión
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item navAttar_listDes" href="./../pages/loginUser.html">Usuario</a>
          <a class="dropdown-item navAttar_listDes" href="./../pages/loginArte.html">Artesano</a>
        </div>
      </li> <!--Iniciar Sesión-->

    </ul><!--listaNAv-->
    </div><!--divHamburguesa--> 
</nav><!--navBar-->
</div><!--navBarContaier-->`;

let usuarioSesion = obtener();
let iniciarSes= document.getElementById("sesIni");

console.log (usuarioSesion);
//let usuarioSesion = [];

if (usuarioSesion.length != 0){
    iniciarSes.innerHTML=`
    <a class="nav-link" href="#">
        Cerrar sesión
    </a>` 
}
function obtener(){
  let objetoJSON = localStorage.getItem("usuarioSesion");
  let usuarios = JSON.parse(objetoJSON);

  return usuarios;
}