let nombre = document.getElementById("Nombre_prod"); //input
let medida = document.getElementById("Medida_prod"); //input
let categoria = document.getElementById("Categoria_prod"); //select
let precio = document.getElementById("Precio_prod"); //input
let imagen = document.getElementById("Imagen_prod"); //select
let descripcion = document.getElementById("Descripcion_prod"); //input
let alertas = document.getElementById("alerta"); //div

function SubirNuevo(){
  
//----------------------------Expresiones regulares
  let validar = false;
  let nuevaAlerta = "";
  alertas.innerHTML = "";

  let tnombre = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
  let tdescripcion = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
  let tPrecio =/^[0-9]*$/;


  //--------------------------Campo Nombre
  if(!tnombre.test(nombre.value) || nombre.value.length <= 2 || nombre.value.length == 0){
    nuevaAlerta += ('<h3>¡Nombre no válido!</h3>  <br>');
    validar = true;
  }

  //--------------------------Campo Medida
  if(!tPrecio.test(medida.value) || medida.value < 5 || medida.value.length == 0 || medida.value >= 50){
    nuevaAlerta += ('<h3>¡Especifica una medida entre 5-50cm!</h3> <br>');
    validar = true;
  }
  
  //--------------------------Campo Categoría
  if(categoria.value=="Categoria:"||categoria.value==""){
    nuevaAlerta += ('<h3>¡Elige una categoría!</h3> <br>');
    validar = true;
  }

  //--------------------------Campo Precio
  if(!tPrecio.test(precio.value) || precio.value <= 50 || precio.value.length == 0 || precio.value >= 500){
    nuevaAlerta += ('<h3>¡Especifica un precio entre $50-500 MXN!</h3> <br>');
    validar = true;
  }

  //---------------------------------------Campo Imagen
  
  if(imagen.value == "0"){
    nuevaAlerta += ('<h3>¡Selecciona una imagen!</h3> <br>');
    validar = true;
  }
  

  //--------------------------Campo Descripción
  if(!tdescripcion.test(descripcion.value) || descripcion.value.length == 0 || descripcion.value.length > 200){
    nuevaAlerta += ('<h3> ¡Agrega una descripción!</h3>  <br>');
    validar = true;
  }
  
  //------------------------------Validación de formulario correcto

  if(validar){
    alertas.innerHTML += `
        <div class="alert alert-danger" role="alert">
            ${nuevaAlerta}
        </div>`;
    
  }
  if(!validar){
           
        
    let nuevoProducto = {
     

      "nombre": nombre.value,
      "precio": parseFloat(precio.value),
      "medida":  parseInt(medida.value) ,
      "descripcion": descripcion.value,
      "imagen": imagen.value,
      "categoria": categoria.value,
      
    };
    
    let token = sessionStorage.getItem('sessionToken')
    token = "Bearer " + token
    console.log(token)

  if(token != undefined){
    console.log('Lo enviaremos')


    let endPoint = 'http://127.0.0.1:8085/api/productos';
    fetch(endPoint, {
	    method: 'post', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': token
        },
        body: JSON.stringify(nuevoProducto)
        
    }).then(function(e){
      console.log()
      if(e.status == 200){
        alertas.innerHTML += `
        <div class="alert alert-success" role="alert">
            <h3> ¡Formulario Correcto! </h3>
        </div>`;
      }else if(e.status == 500){
        alertas.innerHTML += `
        <div class="alert alert-danger" role="alert">
            <h3> ¡El nombre ya exite, prueba con otro! </h3>
        </div>`;
      }

    })
    .catch(function(error){
      console.log(error)
    })

  }else{
    console.log('no mano')
  }

    nombre.value = "";
    medida.value = "";
    categoria.value = "";
    precio.value = "";
    imagen.value = "";
    descripcion.value = "";
        
    // location.reload();
  }
}

function eliminar(){
  let idElminiar = 20;
  
  let token = sessionStorage.getItem('sessionToken')
  token = "Bearer " + token

  let endPoint = `http://127.0.0.1:8085/api/productos/${idElminiar}`;
    fetch(endPoint, {
	    method: 'delete', 
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': token
      }      
    }).then(function(e){
      console.log(e)
    })
    .catch(function(error){
      console.log(error)
    })
}


// eliminar()
