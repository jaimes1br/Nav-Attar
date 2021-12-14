

import { botonesCarrito } from './carritoCanasta.js';
import { checarSesion } from './loginCerrarSesion.js';


/*-----------------------------------------------------------------
 ||  Función addItem        
 -----------------------------------------------------------------*/
 
function addItem(item){
    const itemHTML = 
    `
    <div class=" col-sm-12 col-md-6 col-lg-4 col-xl-4">
      <div class="card tamañoCartProducto" >
          <a href="./vistaProducto.html?id=${item.id}">
             <img src="${item.imagen}" class="card-img-top" alt="image">  
          </a>
          <div class="card-body elementosCardProducto">
              <a href="./vistaProducto.html?id=${item.id}"><h2 class="card-title">${item.nombre}</h2></a>
              <div class="cardPrecio">
                <a href="./vistaProducto.html?id=${item.id}"><h3 class="card-title">$${item.precio} MXN</h3></a>
                <h3>${item.medida}cm</h3>
              </div>
              <h3>${item.categoria} </h3>
              <p class="card-text">${item.descripcion}</p>
              
          </div>

          <div class="btn_comprar">
            <a href="./vistaProducto.html?id=${item.id}" class="btn elementosCardProducto_btn" id="btnComprar"> ¡ Detalles ! </a>
            <button type="button" class="btn anadirACarrito" value = '${item.id}' data-toggle="modal" data-target="#aleLogin"><img src="./../img/iconos/anadir.png" alt=""></button>
          </div>

      </div>
      </div> `
   ;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}//addItem



/*-----------------------------------------------------------------
 ||  Función filtrado     
 -----------------------------------------------------------------*/
function filtrado(productos,filtro){
    const itemsContainer = document.getElementById("list-items");
        
    if( filtro === 'Todos'){
        itemsContainer.innerHTML = '';
        productos.forEach(objeto => {
            addItem(objeto);
        });
        botonesCarrito();
    }
    else{
        itemsContainer.innerHTML = '';
        productos.forEach(objeto => {
            if ((objeto.categoria).normalize('NFD').replace(/[\u0300-\u036f]/g,"") === filtro) {
                addItem(objeto);
            }//if
        });//forEach
        
        botonesCarrito();
    }

}//filtrado

/*-----------------------------------------------------------------
 ||  Función menú de cuadro        
 -----------------------------------------------------------------*/
function cuadro(){
    let div = document.getElementById('contenedorCategorias');
    div.innerHTML = '';
    div.innerHTML = `
    <div id="menuCambio" class="card " style="width: 20em;">
        <div class="card-header" id="menuCategorias"><h3>Categorías</h3></div>
        <ul class="list-group list-group-flush ">
            
            <li class="listaCategorias"><button type="button" class="btn categoria">Todos</button></li>
            <li class="listaCategorias"><button type="button" class="btn categoria">Caricaturas</button></li>
            <li class="listaCategorias"><button type="button" class="btn categoria">Celebridades</button></li>
            <li class="listaCategorias"><button type="button" class="btn categoria">Mascotas</button></li>
            <li class="listaCategorias"><button type="button" class="btn categoria">Personajes</button></li>
            <li class="listaCategorias"><button type="button" class="btn categoria">Personalizados</button></li>
            <li class="listaCategorias"><button type="button" class="btn categoria">Superhéroes</button></li>
            
            
        </ul>
    </div><!---->`;
    
    checarSesion();
        
    const menu = document.querySelectorAll('.categoria');
    
    menu.forEach(function(categoria){
    categoria.addEventListener('click', (e) =>{
        let seleccion = e.currentTarget.innerHTML; 
        seleccion = seleccion.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
        filtrado(productos,seleccion);
    })
    });

}//menuCuadro

/*-----------------------------------------------------------------
 ||  Función menú de dropdown        
 -----------------------------------------------------------------*/
function lista(){
    let div = document.getElementById('contenedorCategorias');
    div.innerHTML = '';
    div.innerHTML = `
    <div class="dropdown listaCategoriasDrop ">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
            Categorías
        </button>
        <div class="dropdown-menu menuListaCategorias" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item elementoMenuListaCategorias" href="#">Todos</a>
            <a class="dropdown-item elementoMenuListaCategorias" href="#">Caricaturas</a>
            <a class="dropdown-item elementoMenuListaCategorias" href="#">Celebridades</a>
            <a class="dropdown-item elementoMenuListaCategorias" href="#">Mascotas</a>
            <a class="dropdown-item elementoMenuListaCategorias" href="#">Personajes</a>
            <a class="dropdown-item elementoMenuListaCategorias" href="#">Personalizados</a>
            <a class="dropdown-item elementoMenuListaCategorias" href="#">Superhéroes</a>
        </div>
    </div>`;

    const lista = document.querySelectorAll('.elementoMenuListaCategorias');

    lista.forEach(function(categoria){
        categoria.addEventListener('click', (e) =>{
            let seleccion = e.currentTarget.innerHTML; 
            seleccion = seleccion.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
            filtrado(productos,seleccion);
        })
    });
}//menuLista

//dependiendo la pantalla se muestra un elemento
function elementoCategoria(){
    let pantallaw = screen.width;
    
    if (pantallaw < 481){
        lista();
    }else if( pantallaw < 769){
        lista();
    }else if(pantallaw < 1025){
        cuadro();        
    }else if(pantallaw < 1281){
        cuadro();
    }else{
        cuadro();
    }
}//elementoCategoria


/*-----------------------------------------------------------------
 ||  Lista de objetos         
 -----------------------------------------------------------------*/
/**
 * objetosTexto: datos duros de productos
 * objetosJSON: datos de productos en JSON
 * productosJSON: datos de producto en JSON desde el local
 * productos: datos de producto en array 
*/

 let objetosTexto = [
    {
        'id': 1,
        "nombre":"Batman",
        'imagen':'../img/muñequitos/batman.jpg',
        'medida':'25',
        'categoria':'Superhéroes',
        'precio':'200.00',
        'descripcion':'Batman es un superheroe que te acompañara en todas tus aventuras, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id': 2 ,
        'nombre':'Baby Yoda',
        'imagen':'../img/muñequitos/bby.jpg',
        'medida':'20',
        'categoria':'Superhéroes',
        'precio':'350.00',
        'descripcion':'Si cool quieres ser, Baby Yoda debes tener, recuerda que puedes personalizarlo a tu gusto'},
    { 
        'id':3,
        'nombre':'Carlitos',
        'imagen':'../img/muñequitos/carlitos.jpg',
        'medida':'20',
        'categoria':'Caricaturas',
        'precio':'350.00',
        'descripcion':'¿Recuerdas los momentos en familia cuando veian juntos los Rugrats? Como olvidar al adorable Carlitos, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id': 4,
        'nombre':'Coraline',
        'imagen':'../img/muñequitos/carol.jpg',
        'medida':'22',
        'categoria':'Caricaturas',
        'precio':'420.00',
        'descripcion':'Muñequito de Coraline tejido, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id': 5,
        'nombre':'Homero',
        'imagen':'../img/muñequitos/homero.jpg',
        'medida':'15',
        'categoria':'Personajes',
        'precio':'120.00',
        'descripcion':'Desde Sprinfield hasta tus manos, este llavero te hara decir "WooHoo".'},
    {
        'id': 6,
        'nombre':'Harry Potter Team',
        'imagen':'../img/muñequitos/hp.jpg',
        'medida':'20',
        'categoria':'Personajes',
        'precio':'600.00',
        'descripcion':'Este trio de amigos magicos te van a encantar.'},
    {
        'id': 7,
        'nombre':'Perrito',
        'imagen':'../img/muñequitos/dog2.jpg',
        'medida':'25',
        'categoria':'Mascotas',
        'precio':'420.00',
        'descripcion':'Una forma mas de recordar y llevar contigo a tu mascota a donde sea.'},
    {
        'id': 8,
        'nombre':'Gato programador',
        'imagen':'../img/muñequitos/Gato-Cafe.jpg',
        'medida':'20',
        'categoria':'Mascotas',
        'precio':'300.00',
        'descripcion':'Recordemos a nuestras mascotas con algo pequeñito pero con mucho amor, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id': 9,
        'nombre':'Arnold y Helga',
        'imagen':'../img/muñequitos/heyh.jpg',
        'medida':'25',
        'categoria':'Caricaturas',
        'precio':'380.00',
        'descripcion':'¿Alguna vez amaste a alguien en secreto como Helga? No hay mejor presente que Arnold y Helga, los muñecos se venden por separado, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id': 10,
        'nombre':'Iron Maiden',
        'imagen':'../img/muñequitos/iron.jpg',
        'medida':'20',
        'categoria':'Celebridades',
        'precio':'420.00',
        'descripcion':'El regalo perfecto para los Iron Maiden Lover 💕, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id': 11,
        'nombre':'Friend',
        'imagen':'../img/muñequitos/friend.jpg',
        'medida':'18',
        'categoria':'Personalizados',
        'precio':'200.00',
        'descripcion':'Regala algo a tus seres queridos, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id': 12,
        'nombre':'Muñequita de Chinos',
        'imagen':'../img/muñequitos/chinos.jpg',
        'medida':'20',
        'categoria':'Personalizados',
        'precio':'600.00',
        'descripcion':'Muñequita con mejillas sonrojadas y cabello chino, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id': 13,
        'nombre':'Eladoscuro',
        'imagen':'../img/muñequitos/luchador.jpg',
        'medida':'20',
        'categoria':'Personalizados',
        'precio':'600.00',
        'descripcion':'Luchador inspirado en una e-commerce basada en la venta online de souvenirs mexicanas con diseños originales, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id': 14,
        'nombre':'Ketzal',
        'imagen':'../img/muñequitos/quetzal.jpg',
        'medida':'20',
        'categoria':'Personalizados',
        'precio':'600.00',
        'descripcion':'Quetzal inspirado en una e-commerce para una cafetería, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id': 15,
        'nombre':'Nav-Attar',
        'imagen':'../img/muñequitos/sata.jpg',
        'medida':'20',
        'categoria':'Personalizados',
        'precio':'600.00',
        'descripcion':'Inspirado en una e-commerce basada en la venta muñecos de crochet, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id': 16,
        'nombre':'TremendaMexa',
        'imagen':'../img/muñequitos/mndil.jpg',
        'medida':'20',
        'categoria':'Personalizados',
        'precio':'600.00',
        'descripcion':'Inspirado en la e-commerce basada en la venta de mandiles de cuero personalizados y café, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id': 17,
        'nombre':'Never Dies Co.',
        'imagen':'../img/muñequitos/metal.jpg',
        'medida':'20',
        'categoria':'Personalizados',
        'precio':'600.00',
        'descripcion':'Inspirado en una e-commerce basada en la venta de playeras, recuerda que puedes personalizarlo a tu gusto'}
                            



    ];

/**Descomentar líneas de abajo para generar el local de los productos iniciales
 * comentar la siguiente vez
 */

 let objetosJSON = JSON.stringify(objetosTexto); //produtos a JSON
 localStorage.setItem("objetos", objetosJSON); //En localStorage
// console.log('aqui')

let productosJSON = localStorage.getItem("objetos"); //Lo tomamos del local
let productos = JSON.parse(productosJSON);

/*-----------------------------------------------------------------
 ||  Elementos para filtrar dependiento la categoría seleccionada desde la nav       
 -----------------------------------------------------------------*/

let url = window.location;
let catUrl = url.search.split('=')[1];
filtrado(productos,catUrl);


/*-----------------------------------------------------------------
 ||  Saber que elemento pongo, cuadro o lista       
 -----------------------------------------------------------------*/
elementoCategoria();

/*-----------------------------------------------------------------
 ||  Redimensión de panalla   
 -----------------------------------------------------------------*/

window.addEventListener("resize", function(e){
    elementoCategoria();
});


