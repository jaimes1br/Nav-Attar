
/*-----------------------------------------------------------------
 ||  Función addItem        
 -----------------------------------------------------------------*/
 
 function addItem(item){
    const itemHTML = 
    `
    <div class="card mb-3 vistaproducto">
    <div class="row no-gutters">
      <div class="col-md-6 vistaproductoimg">
        <img src="${item.imagen}" alt="...">
      </div>
      <div class="col-md-6">
        <div class="card-body cardvistaproducto">
          <h4 class="card-title">${item.nombre} </h4>
          <p id="preciovistaProducto">$ ${item.precio}</p>
          <p class="card-text" id="descvistaproducto">${item.descripcion}</p>
          <p class="card-tex" id="infovistaproducto"> <br> Medida: ${item.medida} cm <br> Categoría: ${item.categoria}</p>
         
          <div class="btn-vistaproducto">
            <button type="button" class="btn botonvistaproducto">¡ agregar al carrito!</button>
            </div>

            <h3 class="card-text"> <br> Hecho con amor ❤️ de Nav-attar. </h3>   
        </div>
      </div>
    </div>
   </div> 
    `
   ;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}//addItem


let productosJSON = localStorage.getItem("objetos"); //Lo tomamos del local
let productos = JSON.parse(productosJSON);

let url = window.location;
let idUrl = url.search.split('=')[1];

productos.forEach(element => {
    if(element.id == idUrl){
        addItem(element)
    }
});


