let nombre = document.getElementById("Nombre_prod"); //input
let medida = document.getElementById("Medida_prod"); //input
let categoria = document.getElementById("Categoria_prod"); //select
let precio = document.getElementById("Precio_prod"); //input
//let Imagen = "";
let imagen = document.getElementById("Imagen_prod"); //select
let descripcion = document.getElementById("Descripcion_prod"); //input
let alertas = document.getElementById("alerta"); //div

function SubirNuevo(){
  
//----------------------------Expresiones regulares
  let validar = false;
  let nuevaAlerta = [];
  let tnombre = /^[a-zA-Z0-9!.,?¿¡ ]*$/
  let tPrecio =/^[0-9]*$/
  
  //--------------------------Campo Nombre
  if(!tnombre.test(nombre.value) || nombre.value.length <= 2 || nombre.value.length == 0){
    nuevaAlerta.push('¡Nombre no válido! <br>');
    validar = true;
  }

  //--------------------------Campo Medida
  if(!tPrecio.test(medida.value) || medida.value < 5 || medida.value.length == 0 || medida.value >= 40){
    nuevaAlerta.push('¡Especifica una medida! <br>');
    validar = true;
  }
  
  //--------------------------Campo Categoria
  if(categoria.value=="Categoria:"||categoria.value==""){
    nuevaAlerta.push('¡Elige una categoría! <br>');
    validar = true;
  }

  //--------------------------Campo Precio
  if(!tPrecio.test(precio.value) || precio.value <= 50 || precio.value.length == 0 || precio.value >= 500){
    nuevaAlerta.push('¡Especifica precio! <br>');
    validar = true;
  }

  //---------------------------------------Campo Imagen
  
  if(imagen.value=="0"){
    nuevaAlerta.push('¡Selecciona una imagen! <br>');
    validar = true;
  }
  

  //--------------------------Campo Descripcion
  if(!tnombre.test(descripcion.value) || descripcion.value.length ==0 || descripcion.value.length == 0 || descripcion.value.length > 200){
    nuevaAlerta.push('¡Agrega una descripción! <br>');
    validar = true;
  }
  
  //------------------------------Validacion de formulario correcto

  if(validar)
  {
    alertas.innerHTML = nuevaAlerta.join('');
    return false;
  }
  if(!validar){
    nuevaAlerta.push('¡Formulario Correcto! <br>');
    alertas.innerHTML = nuevaAlerta.join('');

    //----------------------------Llamada a funciones para subir y descargar informacion del local Storage

    datos = obtener();
    guardar(datos);
    
    //............................Declaracion de las funciones para Obtener y Guardar informacion de LocalStorage

    function obtener(){
    
      let objetosJSON = localStorage.getItem("objetos");      
      let productos = JSON.parse(objetosJSON);
      return productos;
    
    }


    function guardar(productos){
    
      let nuevoProducto = {
        
        'id': (productos.length + 1),
        'name': nombre.value,
        'img': imagen.value,
        'size': medida.value + ' cm',
        'category': categoria.value,
        'price':precio.value + '.00',
        'description': descripcion.value
      };

      productos.push(nuevoProducto);
      
      let productosJSON = JSON.stringify(productos); //produtos a JSON
      localStorage.setItem("objetos", productosJSON);
    }



    //-------------------------Regresa los campos a blanco

    nombre.value = "";
    medida.value = "";
    categoria.value = "";
    precio.value = "";
    imagen.value = "";
    descripcion.value = "";

    return false;
  }

}

//-------------------------------------Funcion chida, no borrar porfavor.--------------
// function load(){                                                                   |
// console.log("Load");                                                               |
// document.getElementById("Imagen_prod").addEventListener("change",function(a){      |
//   console.log("onchange");                                                         | 
//   let files = a.target.files;                                                      |
//   let reader = new FileReader();                                                   |
//   reader.onload = function(){                                                      |
//     //console.log(reader.result);                                                  |
//     Imagen = reader.result;                                                        |
//     let img = new Image();                                                         |
//     img.onload = function(){                                                       |
//       let cnv = document.getElementById("imgCanvas");                              |
//       cnv.width = img.width;                                                       | 
//       cnv.height = img.height;                                                     |
//       console.log(img.width);                                                      |
//       console.log(img.height);                                                     |
//       let ctx = cnv.getContext("2d");                                              |
//       ctx.drawImage(img,0,0);                                                      |
//     };                                                                             |
//     img.src = reader.result;                                                       |
//   };                                                                               |
//   reader.readAsDataURL(files[0]);                                                  |
// });                                                                                |
// }                                                                                  |
//data:image/jpeg;base64                                                              |
//-------------------------------------------------------------------------------------
