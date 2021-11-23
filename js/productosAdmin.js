
/*-----------------------------------------------------------------
 ||  Funcion addItem        
 -----------------------------------------------------------------*/
 
function addItem(item){
    console.log(item.nombre);
    const itemHTML = `
    <div class="cardcom">                                        
        <div class="pIndividual1">
            <img src="${item.imagen}" class="card-img-top" alt="image" id="imago">
        </div><!--pIndividual-->
        
        <div class="cardInfo">
            <h5 class="card-title">Nombre: ${item.nombre}</h5>
            <h5 class="card-title">Medida: ${item.medida}cm</h5>
            <h5 class="card-title">Categoría: ${item.categoria}</h5>
            <h5 class="card-title">Precio: $${item.precio}</h5>
        </div><!--cardInfo-->
        
        <div class="ap">
            <div class="eliminar">
                <a href="#" class="btn"><img src="./../img/iconos/social/Eliminar-btn.jpg" id="eliminar-btn" alt=""></a>
            </div><!--Eliminar-->
            <div class="descript">
                <p class="card-text">${item.descripcion}</p>
            </div><!--descript-->
        </div><!--ap-->
    </div><!--cardcom--> `
   ;
    const itemsContainer = document.getElementById("listaProductosArtesano");
    itemsContainer.innerHTML += itemHTML;
}//addItem


function obtener(){
    
    let objetosJSON = localStorage.getItem("objetos");      
    let productos = JSON.parse(objetosJSON);
   
    return productos;
  
}//hacer consulta desde el local


/*-----------------------------------------------------------------
 ||  Lista de objetos         
 -----------------------------------------------------------------*/

let productos = obtener();
console.log(productos);

(productos.reverse()).forEach(objeto => {
    addItem(objeto);
});

