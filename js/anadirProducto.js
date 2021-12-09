let nombre = document.getElementById("Nombre_prod"); //input
let medida = document.getElementById("Medida_prod"); //input
let categoria = document.getElementById("Categoria_prod"); //select
let precio = document.getElementById("Precio_prod"); //input
let imagen = document.getElementById("Imagen_prod"); //select
let descripcion = document.getElementById("Descripcion_prod"); //input
let alertas = document.getElementById("alerta"); //div


function addItem(item){
  console.log(item)
  const itemHTML = 
  `
  <div class="cardcom">
                                      
  <div class="pIndividual1">
    <img src="./../img/muñequitos/${item.imagen}" class="card-img-top" alt="image" id="imago">
  </div><!--pIndividual-->
      <div class="cardInfo">
        <h5 class="card-title"> ${item.nombre}</h5>
        <h5 class="card-title"> ${item.medida}cm</h5>
        <h5 class="card-title"> ${item.categoria}</h5>
        <h5 class="card-title"> $${item.precio}.00 mxn</h5>
      </div><!--cardInfo-->
      <div class="ap">
        <!-- <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"> -->
        <div class="eliminar">
        // <a href="#" class="btn"><img src="./../img/iconos/social/Eliminar-btn.jpg" id="eliminar-btn" alt=""></a>
        </div><!--Eliminar-->
        <div class="descript">
        <p class="card-text">${item.descripcion}</p>
      </div><!--descript-->
      <!-- </div> -->
      </div><!--ap-->
      <!-- <div id="list-items">
  
      </div> -->
  </div><!--cardcom-->
  `
 ;
  const itemsContainer = document.getElementById("Productos");
  itemsContainer.innerHTML += itemHTML;
}//addItem





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

  if(token != undefined){
    

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
      
      console.log(nuevoProducto)
      
      if(e.status == 200){
        alertas.innerHTML += `
        <div class="alert alert-success" role="alert">
            <h3> ¡Formulario Correcto! </h3>
        </div>`;
        addItem(nuevoProducto)

      }else if(e.status == 500){
        alertas.innerHTML += `
        <div class="alert alert-danger" role="alert">
            <h3> ¡El nombre ya exite, prueba con otro! </h3>
        </div>`;
      }

    })
    .catch(function(error){
      
    })

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
  let idElminiar = 29;
  
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
      
    })
    .catch(function(error){
      
    })
}


// eliminar()
