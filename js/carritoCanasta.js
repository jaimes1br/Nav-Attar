function botonesCarrito(){
    let bntsAgregar = document.querySelectorAll('.anadirACarrito');
    let alertaModal = document.getElementById('alertaCarrito');

   
    bntsAgregar.forEach(function(boton){
        
        boton.addEventListener('click',function(e){

            let usuarioEnSesion = obtenerUsuarioSesion();

            if( usuarioEnSesion.length != 0){
               
                anadirProductoCarrito(usuarioEnSesion,boton.value);
            
            }//loPodriamosañadir
            else{
               alertaModal.innerHTML = '';
               alertaModal.innerHTML = `
               <div class="alert alert-danger" role="alert">
                    <h3>¡ Accede a una cuenta para agregar productos al carrito ! <br>
                </div>`;
            }//Inicia Sesión

        });// listener de botones        
    }); //forEach
}//botonesCarrito


function obtenerUsuarioSesion(){
    let objetosJSON = localStorage.getItem("usuarioEnSesion");      
    let usuario = JSON.parse(objetosJSON);
   
    return usuario;
}//obtener UsuarioEnSesion


function anadirProductoCarrito(usuario,idProducto){
    
    // usuario // <-- usuario en sesión lo utilizamos para conocer el id y abrir su carrito  
    // idProducto // <-- para obtener el producto que seleccionamos 
    let alertaModal = document.getElementById('alertaCarrito');
    let miCarrito = obtenerMiCarrito(usuario.email);
    
    if (Object.keys(miCarrito).length === 0){
   
        let carrito = {
            'idEmail' : usuario.email,
            'productos' : []
        }


        let endPoint = `http://127.0.0.1:8085/api/productos/${idProducto}`;
        fetch(endPoint, {
            method: 'get'
        }).then(function(data){
            return data.json()
        }).then(function(data){
            carrito.productos.push(data)
            agregarCarroBD(carrito);
            alertaModal.innerHTML = '';
            alertaModal.innerHTML = `
            <div class="alert alert-success" role="alert">
                <h3>Agregado a carrito <br>
            </div>`;
            
            canasta(1);
            actualizarCanasta();
        })


    }else{
        
        let flagAgregar = true;
    
        miCarrito.productos.forEach(function(elementoCarrito){
            if(elementoCarrito.idproducto == idProducto){
                flagAgregar = false;
                alertaModal.innerHTML = '';
                alertaModal.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <h3>¡ El producto ya se ha añadido a tu carrito ! </h3>
                </div>`;
            }

        })

        if(flagAgregar){
            
            let endPoint = `http://127.0.0.1:8085/api/productos/${idProducto}`;
            fetch(endPoint, {
                method: 'get'
            }).then(function(data){
                return data.json()
            }).then(function(data){
                miCarrito.productos.push(data)
                actualizarCarroBD(miCarrito,usuario.email);
                alertaModal.innerHTML = '';
                alertaModal.innerHTML = `
                <div class="alert alert-success" role="alert">
                    <h3>Agregado a carrito <br>
                </div>`;
                actualizarCanasta();
        })

        }
    }
}//anadirProductoCarrito


function obtenerMiCarrito(email){
    let objetosJSON = localStorage.getItem("carroBD");      
    let carroBD = JSON.parse(objetosJSON);
    let tuCarrito = {};

    carroBD.forEach(function(carrito){
        if(carrito.idEmail == email){
            tuCarrito = carrito;        
        }
    });

    return tuCarrito;

}// obtenerMiCarrito


function obtenerProducto(idProducto){
    let objetosJSON = localStorage.getItem("objetos");      
    let productos = JSON.parse(objetosJSON);
    
    let eleccion = {};
    
    productos.forEach(function(producto){
        if(producto.id == idProducto){
            eleccion = producto;
        }
    });
    
    return eleccion;
}//obtenerProducto


function agregarCarroBD(nuevoCarrito){
    let objetosJSON = localStorage.getItem("carroBD");      
    let carroBD = JSON.parse(objetosJSON);

    carroBD.push(nuevoCarrito);

    localStorage.setItem("carroBD", JSON.stringify(carroBD));
}//nuevoCarrito


function actualizarCarroBD(carrito,id){

    let objetosJSON = localStorage.getItem("carroBD");      
    let carroBD = JSON.parse(objetosJSON);
    
    carroBD.forEach(function(carritoBD){
        if(carritoBD.idEmail == carrito.idEmail){
            carritoBD.productos = carrito.productos;
            localStorage.setItem("carroBD", JSON.stringify(carroBD));
        }
    });


}//actualizamosProductos de un carrito


function canasta(num){
    let contador = document.getElementById('contadorCanasta');
    contador.innerHTML = num;
}//canasta


function actualizarCanasta(){
    
    let usuarioEnSesion = obtenerUsuarioSesion();

    if( usuarioEnSesion.length != 0){
       
        let misProductos = obtenerMiCarrito(usuarioEnSesion.email);
        if (Object.keys(misProductos).length === 0){
            canasta(0)
        }
        else{
            canasta(misProductos.productos.length);

        }
    
    }//loPodriamosañadir
    
}

export { actualizarCanasta, botonesCarrito, obtenerUsuarioSesion, obtenerMiCarrito, obtenerProducto, actualizarCarroBD};







actualizarCanasta();
botonesCarrito();
