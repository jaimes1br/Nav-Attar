
/*-----------------------------------------------------------------
 ||  Función addItem        
 -----------------------------------------------------------------*/
 
 function addItem(item){
    const itemHTML = 
    `
    <div class="card mb-3 vistaproducto">
    <div class="row no-gutters">
      <div class="col-md-6 vistaproductoimg">
        <img src="./../img/muñequitos/${item.imagen}" alt="...">
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



let url = window.location;
let idUrl = url.search.split('=')[1];


let endPoint = `http://127.0.0.1:8085/api/productos/${idUrl}`;

fetch(endPoint, {
    method: 'get'
}).then(function(data){
    return data.json()
}).then(function(data){
    addItem(data)
})

