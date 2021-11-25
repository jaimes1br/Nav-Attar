let form = document.getElementById('formPersonalizado');
let nombre = document.getElementById("nombre");
let telefono = document.getElementById('tel');
let correo = document.getElementById('correo');
let tam = document.getElementById('tam');
let artesano = document.getElementById('artesanos');
let mensaje = document.getElementById('mensaje');

let alertDiv = document.getElementById('alerta');
let imagen = document.getElementById('product_img');




function formValidation(e){
    e.preventDefault();
    
    
    console.log('validando');

    console.dir(imagen);
    

    
    let valido = false;
    let erroneo = true;
    let alerta = "";
    alertDiv.innerHTML = "";

    let regexpNombre = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    let regexpTel =/^[0-9]*$/
    let regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(!regexpNombre.test(nombre.value) || nombre.value.length <= 2 || nombre.value.length == 0 || nombre.value.length > 20){
        alerta += `<h3>¡Nombre no valido!</h3> <br>`;
        valido = true;
    }
    
    if(!regexpTel.test(telefono.value)  || telefono.value.length < 10 || telefono.value.length >= 12){
        alerta += `<h3>¡Número no valido! </h3><br>`;
        valido = true;
    }

    if(!regexpEmail.test(correo.value) || correo.value.length == 0 || correo.value.length >= 200){
        alerta += `<h3>¡Correo electrónico no valido!</h3> <br>`;
        valido = true;
    }

    if(tam.value == 'Tamaño'){
        alerta += `<h3>¡Selecciona un tamaño!</h3> <br>`;
        valido = true;
    }

    if(artesano.value == 'Seleciona'){
        alerta += `<h3>¡Selecciona un artesano!</h3> <br>`;
        valido = true;
    }
    
    // if(imagen.src == "http://127.0.0.1:5500/pages/perzonalizado.html"){
    //     alerta += `<h3>¡Selecciona una imagen!</h3> <br>`;
    //     valido = true;     
    // }
   

    if(valido){
        alertDiv.innerHTML += `
        <div class="alert alert-danger" role="alert">
            ${alerta}
        </div>`;
        
    }

    if(!valido){
        alertDiv.innerHTML += `
        <div class="alert alert-success" role="alert">
            <h3> ¡Formulario enviado! </h3>
        </div>`;
        let myWidget = cloudinary.createUploadWidget({
            
            cloudName: 'dndhg2pgz',
            uploadPreset: 'bo6jeclt'
    
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                console.log('Imagen subida con éxito', result.info);
                console.log(result.info)
                imagen.src = result.info.secure_url;
                console.log(result.info.secure_url);
                enviarCorreo(nombre,telefono,correo,tam,artesano,mensaje,result.info.secure_url);
    
            }
        }
        )
        document.getElementById("upload_widget").addEventListener("click", function(){
            myWidget.open();
          }, false);
    
          
   
    }

}


function enviarCorreo(nombre,telefono,correo,tam,artesano,mensaje,url){
    console.log('aqui');
    var dir = document.createElement("a");
    dir.href = `mailto:nav.attar.contact@gmail.com?Subject=Cotizacion ${nombre.value} 
    &body=${nombre.value}%20%0D%0A %20%0D%0A
    ${mensaje.value} %20%0D%0A %20%0D%0A %20%0D%0A 
    Correo cliente: ${correo.value} %20%0D%0A %20%0D%0A %20%0D%0A 
    Teléfono cliente: ${telefono.value}
    Tamaño: ${tam.value}%20%0D%0A %20%0D%0A
    Artesano: ${artesano.value} %20%0D%0A %20%0D%0A
    Imagen: ${url}`;
    dir.click()
    
}


    


window.onload = function(){
    //permite que carge todos los recursos externos
    form.addEventListener('submit', formValidation);
    
    
}

