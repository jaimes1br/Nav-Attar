
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
          <a href="./vistaProducto.html?id=${item.idproducto}">
             <img src="./../img/muñequitos/${item.imagen}" class="card-img-top" alt="image">  
          </a>
          <div class="card-body elementosCardProducto">
              <a href="./vistaProducto.html?id=${item.idproducto}"><h2 class="card-title">${item.nombre}</h2></a>
              <div class="cardPrecio">
                <a href="./vistaProducto.html?id=${item.idproducto}"><h3 class="card-title">$${item.precio} MXN</h3></a>
                <h3>${item.medida}cm</h3>
              </div>
              <h3>${item.categoria} </h3>
              <p class="card-text">${item.descripcion}</p>
              
          </div>

          <div class="btn_comprar">
            <a href="./vistaProducto.html?id=${item.idproducto}" class="btn elementosCardProducto_btn" id="btnComprar"> ¡ Detalles ! </a>
            <button type="button" class="btn anadirACarrito" value = '${item.idproducto}' data-toggle="modal" data-target="#aleLogin"><img src="./../img/iconos/anadir.png" alt=""></button>
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
function filtrado(filtro){
    const itemsContainer = document.getElementById("list-items");
     

    if( filtro === 'Todos'){
    
        let endPoint = `http://127.0.0.1:8085/api/productos`;
        fetch(endPoint, {
            method: 'get'
        }).then(function(data){
            return data.json()
        }).then(function(data){
            itemsContainer.innerHTML ='';
            data.forEach(function(objeto){
                addItem(objeto);
            })
                botonesCarrito();
            })
    }else{
        let endPoint = `http://127.0.0.1:8085/api/productos/cat?categoria=${filtro}`;
        
        fetch(endPoint, {
	        method: 'get'
         }).then(function(data){
            return data.json()
        }).then(function(data){
            
            itemsContainer.innerHTML ='';
            data.forEach(function(objeto){
                addItem(objeto);
            })
            botonesCarrito();
        })


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
    
    // checarSesion();
        
    const menu = document.querySelectorAll('.categoria');
    
    menu.forEach(function(categoria){
    categoria.addEventListener('click', (e) =>{
        let seleccion = e.currentTarget.innerHTML; 
        seleccion = seleccion.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
        filtrado(seleccion);
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
 ||  Elementos para filtrar dependiento la categoría seleccionada desde la nav       
 -----------------------------------------------------------------*/

let url = window.location;
let catUrl = url.search.split('=')[1];
filtrado(catUrl);
// let productosArreglo = ;

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


