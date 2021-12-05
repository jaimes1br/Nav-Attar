import { obtenerUsuarioSesion, obtenerMiCarrito, obtenerProducto, actualizarCarroBD, actualizarCanasta} from './carritoCanasta.js';



function mostrarPedidos(usuario){

 

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
    let usuario = obtenerUsuarioSesion();
    let miCarrito = obtenerMiCarrito(usuario.id);
    let indice = '';

    btnsCarritoEliminar.forEach( function(button){
    button.addEventListener('click',function(e){
        const target = e.currentTarget

        for (let i = 0; i < miCarrito.productos.length; i++) {
            const element = miCarrito.productos[i];
            
            if(element.id == target.value){
                indice = i;
                break;
            }
        }
        
       
        miCarrito.productos.splice(indice,1);
       
        actualizarCarroBD(miCarrito,usuario.id);
        
        actualizarCanasta();
        desplegar();
        

    });
}); 
}


function desplegar(){

    let usuario = obtenerUsuarioSesion();   

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
        
        let miCarrito = obtenerMiCarrito(usuario.id);

        if(miCarrito.productos == 0){ 
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


            let divProductos = document.getElementById("listaCarritoProd"); // <-- div para listar mis productos
            
            divProductos.innerHTML = '';


            miCarrito.productos.forEach(producto => {
     
                let tempProduc = obtenerProducto(producto.id)

                divProductos.innerHTML += `
                    <tr class="sepCarritoComprasTr productoCarrito">
                        <td class = "imagenCarrito">  
                            <img src="${tempProduc.imagen}" alt="">
                        </td><!--imagenProducto-->
                        <td class = "nombre"> 
                            ${tempProduc.nombre}
                        </td><!--nombreProducto-->
                        <td class = "precio precioCarrito">
                           $ ${tempProduc.precio} MXN 
                        </td><!--precioProducto-->
                        <td class= "cantidad">
                            <button class= 'cantidadBtn' value="menos">-</button>
                            <p id = 'cantidadValor' >1</p>
                            <button class= 'cantidadBtn' value="mas">+</button>
                        </td><!--cantidodaPrdocuto-->
                        <td class="subTotal">
                            $ ${tempProduc.precio} MXN
                        </td>
                        <td class="carritoEliminar">
                            <button type="button" class="btn btnCarritoEliminar" value = ${tempProduc.id}><img src="./../img/iconos/trashWhite.svg" alt=""></button>
                        </td>
                    </tr>
                    `;

            })
                
            cuentaTotal();
            actualizarBotonesEliminar();   
        }//elementos en carrito
        
    }//else Hay usuario en sesion
    
    let finalizarBtn = document.getElementById('btnComprar');
    finalizarBtn.addEventListener('click',function(e){
        console.log('apretado')
        let miCarrito = obtenerMiCarrito(usuario.id);
        let alertaDiv = document.getElementById('alertaFin');
        alertaDiv.innerHTML = `
        <div class="alert alert-success" role="alert">
            <h3>¡Felicidades acabas de realizar tu compra!</h3> <br>
        </div>`;

        miCarrito.productos = []
        actualizarCarroBD(miCarrito,usuario.id);

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





desplegar();

