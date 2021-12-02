
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
    let totalNum =  parseFloat(total.innerHTML.split(" ")[1]);

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
        }//elementos en carrito
        
    }//else Hay usuario en sesion
    
    let btnsCantidad = document.querySelectorAll('.cantidadBtn');
    btnsCantidad.forEach( function(boton){
        boton.addEventListener('click', function (e) {
            const target = e.currentTarget;
            contador(target.value,target.parentNode.children[1],target.parentNode.parentNode.children[2],target.parentNode.parentNode.children[4])
        })
    })  

}



// prueba();

desplegar();
cuentaTotal();
actualizarBotonesEliminar();



function prueba(){
    
    let usuario = {
        'id' : 5,
        'nombre': 'Prueba',
        'telefono': '555555555555',
        'correo': 'prueba@gmail.com',
        'contrasena': 'una',
        'carrito': []
    };
    
    let usuarioJSON = JSON.stringify(usuario); //produtos a JSON
    localStorage.setItem("usuarioSesion", usuarioJSON);

}