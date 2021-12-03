
function canasta(num){
    let contador = document.getElementById('contadorCanasta');
    contador.innerHTML = num;
}

let usuarioJSON = localStorage.getItem("usuarioSesion");
let usuario = JSON.parse(usuarioJSON);

if( usuario.length != 0){
    canasta(usuario.carrito.length);
}


let btnsAgregarCar = document.querySelectorAll('.anadirACarrito');

btnsAgregarCar.forEach(function(boton) {
    boton.addEventListener('click',function(e){
        
        let divAviso = document.getElementById('alertaCarrito');
        let usuarioJSON = localStorage.getItem("usuarioSesion");
        let usuario = JSON.parse(usuarioJSON);

        if(usuario.length != 0){
            
            if(usuario.carrito.indexOf(parseInt(boton.value)) == -1){
                
                usuario.carrito.push(parseInt(boton.value));
                canasta(usuario.carrito.length);
                
                let usuarioJSON = JSON.stringify(usuario); 
                localStorage.setItem("usuarioSesion", usuarioJSON);
                
                divAviso.innerHTML = `
                <div class="alert alert-success" role="alert">
                    <h3>¡ Producto añadido a tu carrito !</h3>
                </div>`;
            }
            else{
                divAviso.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <h3>¡ El producto ya se ha añadido a tu carrito !</h3>
                </div>`;
            }





        }else{
            divAviso.innerHTML = `
            <div class="alert alert-danger" role="alert">
                <h3>¡ Accede a una cuenta para agregar productos al carrito !</h3>
            </div>`;
            

        }


    });
});

