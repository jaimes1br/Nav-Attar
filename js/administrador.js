let Nombre = document.getElementById("Nombre_prod");
let Medida = document.getElementById("Medida_prod");
let Categoria = document.getElementById("Categoria_prod");
let Precio = document.getElementById("Precio_prod");
//let Imagen = "";
let Imagen = document.getElementById("Imagen_prod");
let Descripcion = document.getElementById("Descripcion_prod");
//let Subir = document.getElementById("Subir");
let alertas = document.getElementById("alerta");

function SubirNuevo(){
  console.log('Atendiendo formulario');
  console.log(Imagen.value);


  let validar = false;
  let NuevaAlerta = [];
  let tnombre = /^[a-zA-Z ]*$/
  let tPrecio =/^[0-9]*$/
  
  //--------------------------Campo Nombre
  if(!tnombre.test(Nombre.value) || Nombre.value.length <= 2 || Nombre.value.length == 0){
    NuevaAlerta.push('¡Nombre no valido! <br>');
    console.log('Nombre');
    validar = true;
  }

  //--------------------------Campo Medida
  if(!tPrecio.test(Medida.value) || Medida.value < 5 || Medida.value.length == 0 || Medida.value >= 40){
    NuevaAlerta.push('¡Especificar una Medida! <br>');
    console.log('Medida');
    validar = true;
  }
  
  //--------------------------Campo Categoria
  if(Categoria.value=="Categoria:"||Categoria.value==""){
    NuevaAlerta.push('¡Favor de Elegir una Categoria! <br>');
    validar = true;
    }

  //--------------------------Campo Precio
  if(!tPrecio.test(Precio.value) || Precio.value <= 50 || Precio.value.length == 0 || Precio.value >= 500){
    NuevaAlerta.push('¡Especificar Precio! <br>');
    console.log('Precio');
    validar = true;
  }

  //---------------------------------------Campo Imagen
  
  if(Imagen.value=="0"){
    NuevaAlerta.push('¡Favor de Seleccionar una Imagen! <br>');
    console.log('Imagen');
    validar = true;
    }
  

  //--------------------------Campo Descripcion
  if(!tnombre.test(Descripcion.value) || Descripcion.value.length ==0 || Descripcion.value.length == 0 || Descripcion.value.length > 200){
    NuevaAlerta.push('¡Agregar una descripcion! <br>');
    console.log('Descripcion');
    validar = true;
  }

  if(validar)
  {
    alertas.innerHTML = NuevaAlerta.join('');
    return false;
  }
  if(!validar){
    NuevaAlerta.push('¡Formulario Correcto! <br>');
    alertas.innerHTML = NuevaAlerta.join('');


    Guardar();
    function Guardar(){

      let Producto = {
        nombre: Nombre.value,
        medida: Medida.value,
        categoria: Categoria.value,
        precio: Precio.value,
        imagen: Imagen.value,
        Descripcion: Descripcion.value
      };
      localStorage.setItem("Producto", JSON.stringify(Producto));
    }

    Nombre.value = "";
    Medida.value = "";
    Categoria.value = "";
    Precio.value = "";
    Imagen.value = "";
    Descripcion.value = "";
    console.log(Nombre.value);

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