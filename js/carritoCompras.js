function mostrarPedidos(usuario){

    console.log(usuario.pedidos);

    if(usuario.pedidos.length != 0){
        let divPedidos = document.getElementById('pedidosCarDiv');
        divPedidos.innerHTML = `
        <div class="row carritoCompras_tituloPedidos">
            <h1>Pedidos</h1>
        </div>
        <hr class="sepCarritoCompras">
        <div id = "pedidosLista">
        </div>`;

        let listaPedidos = document.getElementById('pedidosLista');
        listaPedidos.innerHTML = '';
        usuario.pedidos.forEach(pedido =>{
            listaPedidos.innerHTML += `
            <div class="card elementoPedido" style="width: 80rem;">
                <img src="${pedido.imagen}" class="card-img-top" alt="...">
                <div class="card-body elementoTexPedido">
                    <h3> Artesan@ que realiza tu pedido: ${pedido.artesano}  </h3>
                    <h3> Estado: Pendiete </h3>
                </div>
            </div>`;
        })

        


    }

}


function contador(accion, cantidadObj,precioObj,subTotalObj){

    
    let valor = cantidadObj.innerHTML;
    let precio = parseFloat((precioObj.innerText).split(" ")[1]);

    (accion == 'mas') ? valor++ : valor--;

    (valor <= 0) ? valor = 1 : valor = valor;

    let sub = precio * valor;

    cantidadObj.innerHTML = valor;
    subTotalObj.innerHTML = "$ " + (sub).toLocaleString('en') + ".00 MXN"

    cuentaTotal();
}


function cuentaTotal(){

    let total = document.getElementById('totalCarrito');
    // let totalNum =  parseFloat(total.innerHTML.split(" ")[1]);

    const productos = document.querySelectorAll('.subTotal');

    let totalSubCuenta = 0;

    for (let index = 0; index < productos.length; index++) {
        const subProducto = parseFloat((productos[index].innerText).split(" ")[1].replace(',',""));
        totalSubCuenta += subProducto;
    }

    total.innerHTML = "$ " + (totalSubCuenta).toLocaleString('en') + ".00 MXN";
    actualizarBotonesEliminar();
}


function actualizarBotonesEliminar(){
    
    let btnsCarritoEliminar = document.querySelectorAll('.btnCarritoEliminar')
    let usuarioJSON = localStorage.getItem("usuarioSesion");
    let usuario = JSON.parse(usuarioJSON);


    btnsCarritoEliminar.forEach( function(button){
    button.addEventListener('click',function(e){
        const target = e.currentTarget

        usuario.carrito.splice(usuario.carrito.indexOf(parseInt(target.value)),1);
        
        let usuarioJSON = JSON.stringify(usuario); //produtos a JSON
        localStorage.setItem("usuarioSesion", usuarioJSON);
        
        target.parentNode.parentNode.remove();
        if (usuario.carrito.length == 0){
            desplegar();
            canasta(0);
        }else{
            canasta(usuario.carrito.length);
            cuentaTotal();
        }
    });
}); 
}


function desplegar(){

    let usuarioJSON = localStorage.getItem("usuarioSesion");
    let usuario = JSON.parse(usuarioJSON);
   

    if (usuario.length == 0){
        let divAnuncio = document.getElementById('contenidoCarritoCompras');
        divAnuncio.innerHTML = `
        
        <div class="vacioCarritoCompras">
            <h2>Tu carrito está vacío    <img src="./../img/iconos/triste.png"  class='tristeCarrito' alt="triste"></h2>
            <a href="./../pages/catalogo.html?cat=Todos" class="btn elementosCardProducto_btn" id="btnComprar">Volver a catálogo</a>
        </div>`;
    
        let divTotal = document.getElementById('divTotal');
        divTotal.innerHTML = '';
    
    }else{
        
        mostrarPedidos(usuario);
        canasta(usuario.carrito.length);

        if(usuario.carrito == 0){ 
            let divAnuncio = document.getElementById('contenidoCarritoCompras');
            divAnuncio.innerHTML = `
            
            <div class="vacioCarritoCompras">
                <h2>Tu carrito está vacío. <img src="./../img/iconos/triste.png"  class='tristeCarrito' alt="triste"></h2>
                <a href="./../pages/catalogo.html?cat=Todos" class="btn elementosCardProducto_btn" id="btnComprar">Volver a catálogo</a>
            </div>`;
        
            let divTotal = document.getElementById('divTotal');
            divTotal.innerHTML = '';
        } //sin elementos en el carrito
        else{
          
            let divProductos = document.getElementById("listaCarritoProd");
            
            let productosJSON = localStorage.getItem("objetos"); //Lo tomamos del local
            let productos = JSON.parse(productosJSON);

            divProductos.innerHTML = '';

            productos.forEach( producto => {
                if ( usuario.carrito.indexOf(producto.id) != -1 ){
                    divProductos.innerHTML += `
                    <tr class="sepCarritoComprasTr productoCarrito">
                        <td class = "imagenCarrito">  
                            <img src="${producto.imagen}" alt="">
                        </td><!--imagenProducto-->
                        <td class = "nombre"> 
                            ${producto.nombre}
                        </td><!--nombreProducto-->
                        <td class = "precio precioCarrito">
                           $ ${producto.precio} MXN 
                        </td><!--precioProducto-->
                        <td class= "cantidad">
                            <button class= 'cantidadBtn' value="menos">-</button>
                            <p id = 'cantidadValor' >1</p>
                            <button class= 'cantidadBtn' value="mas">+</button>
                        </td><!--cantidodaPrdocuto-->
                        <td class="subTotal">
                            $ ${producto.precio} MXN
                        </td>
                        <td class="carritoEliminar">
                            <button type="button" class="btn btnCarritoEliminar" value = '${producto.id}'><img src="./../img/iconos/trashWhite.svg" alt=""></button>
                        </td>
                    </tr>
                    `;
                }}); //forEach

                
        cuentaTotal();
        actualizarBotonesEliminar();   
        }//elementos en carrito
        
    }//else Hay usuario en sesion
    
    let finalizarBtn = document.getElementById('btnComprar');
    finalizarBtn.addEventListener('click',function(e){
        let alertaDiv = document.getElementById('alerta');
        alertaDiv.innerHTML = `
        <div class="alert alert-success" role="alert">
            <h3>¡Felicidades acabas de realizar tu compra!</h3> <br>
        </div>`;

        usuario.carrito = [];
        localStorage.setItem("usuarioSesion", JSON.stringify(usuario));

        window.setTimeout(() => {window.location.reload();}, 2000);
        
    })

    let btnsCantidad = document.querySelectorAll('.cantidadBtn');
    btnsCantidad.forEach( function(boton){
        boton.addEventListener('click', function (e) {
            const target = e.currentTarget;
            contador(target.value,target.parentNode.children[1],target.parentNode.parentNode.children[2],target.parentNode.parentNode.children[4])
        })
    })  

}



function desplegarPequeño(){

    let divTarjetas = document.getElementById('divContenidoCarrito');
    divTarjetas.innerHTML = '';
    let divTotal = document.getElementById('divCenterTotal');
    divTotal.classList = [];

    let usuarioJSON = localStorage.getItem("usuarioSesion");
    let usuario = JSON.parse(usuarioJSON);
   
    if (usuario.length == 0){
    
        let divAnuncio = document.getElementById('contenidoCarritoCompras');
        divAnuncio.innerHTML = `
        
        <div class="vacioCarritoCompras">
            <h2>Tu carrito está vacío    <img src="./../img/iconos/triste.png"  class='tristeCarrito' alt="triste"></h2>
            <a href="./../pages/catalogo.html?cat=Todos" class="btn elementosCardProducto_btn" id="btnComprar">Volver a catálogo</a>
        </div>`;
    
        let divTotal = document.getElementById('divTotal');
        divTotal.innerHTML = '';
    
    }if(usuario.carrito == 0){ 
        let divAnuncio = document.getElementById('contenidoCarritoCompras');
        divAnuncio.innerHTML = `
        
        <div class="vacioCarritoCompras">
            <h2>Tu carrito está vacío. <img src="./../img/iconos/triste.png"  class='tristeCarrito' alt="triste"></h2>
            <a href="./../pages/catalogo.html?cat=Todos" class="btn elementosCardProducto_btn" id="btnComprar">Volver a catálogo</a>
        </div>`;
    
        let divTotal = document.getElementById('divTotal');
        divTotal.innerHTML = '';
    }

}





function desplegarCarrito(){
    let pantallaw = screen.width;
    
    if (pantallaw < 481){
        console.log('motgo')
        desplegarPequeño();
    }else {
        desplegar();     
    }
}//elementoCategoria



desplegarCarrito();


/*-----------------------------------------------------------------
 ||  redimension de panalla   
 -----------------------------------------------------------------*/

 window.addEventListener("resize", function(e){
    desplegarCarrito();
});



function obtener(){
    let usuarioJSON = localStorage.getItem("usuarioSesion");
    let usuario = JSON.parse(usuarioJSON);

    return usuario;
}