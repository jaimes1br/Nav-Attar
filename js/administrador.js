let Nombre = document.getElementById("Nombre_prod");
let Medida = document.getElementById("Medida_prod");
let Categoria = document.getElementById("Categoria_prod");
let Precio = document.getElementById("Precio_prod");
// let Imagen = document.getElementById("Imagen_prod");
// let Img = Imagen.value;
// let extImagen = /(.pdf)$/i;
let Descripcion = document.getElementById("Descripcion_prod");
//let Subir = document.getElementById("Subir");
let alertas = document.getElementById("alerta");

function SubirNuevo(){
  console.log('Atendiendo formulario');


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

  //--------------------------Campo Imagen
  
  function validarExt(){
    let ArchivoInput = document.getElementById('Imagen_prod');
    let ArchivoRuta = ArchivoInput.value;
    let extImagen = /(.PDF|.PNG|.JPG)$/i;

    if(!extImagen.exec(ArchivoRuta))
    {
      NuevaAlerta.push('¡Formato de imagen no valido! <br>');
      console.log('Imagen');
      return false;
    }
    else
    {
      if(ArchivoInput.files && ArchivoInput.files[0]){
        let visor = new FileReader();
        visor.onload = function(e){
          document.getElementById('Visor_Imagen').innerHTML=
          '<embed src="'+e.target.result+'" width="500" height="500" >';
        };
        visor.readAsDataURL(ArchivoInput.files[0]);
      }
    }
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
    Nombre.value = "";
    Medida.value = "";
    Categoria.value = "";
    Precio.value = "";
    Descripcion.value = "";
    return false;
  }



  
}



//-----------------------------------------------------------------------


// Subir.addEventListener("click", function(event){

// // Subir.addEventListener("click", e=>{
// //  e.preventDefault()
  
//  let valido = false
//  let alerta = ""
//  alertas.innerHTML = ""



//  let temail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//  let tnombre = /^[a-zA-Z ]*$/
//  let ttel =/^[0-9]*$/

//   if(!tnombre.test(Nombre_prod.value) || Nombre_prod.value.length <= 2 || Nombre_prod.value.length == 0){
//       alerta += `¡Nombre no valido! <br>`
//       valido = true
//   }
//   if(!temail.test(email.value) || email.value.length==0 || email.value.length >= 320){
    
//     alerta += `¡Email no valido! <br>`
//     valido = true
//   }

//   if(!ttel.test(tel.value) || tel.value.length < 10 || tel.value.length == 0 || tel.value.length >= 12){

//     alerta += `¡Teléfono no valido! <br>`
//     valido = true
//   }

//   if(mensaje.value.length >= 150 || mensaje.value.length == 0){

//     alerta += `¡Mensaje no valido! <br>`
//     valido = true

//   }

//   if(valido){

//     alertas.innerHTML = alerta;

//   }

//   if(!valido){

//     alerta +=`¡Formulario Correcto!`
//     alertas.innerHTML = alerta;
//     var dir = document.createElement("a");
//     dir.href = `mailto:nav.attar.contact@gmail.com?&body=${nombre.value}%20%0D%0A %20%0D%0A${mensaje.value} %20%0D%0A %20%0D%0A %20%0D%0A Correo cliente: ${email.value} %20%0D%0A %20%0D%0A %20%0D%0A Teléfono cliente: ${tel.value}`;
//     dir.click();
//   }

//   // var dir = document.createElement("a");
//   // dir.href = `mailto:nav.attar.contact@gmail.com?subject=${asunto.value}&body=${nombre.value}%20%0D%0A %20%0D%0A${mensaje.value} %20%0D%0A %20%0D%0A %20%0D%0A Correo cliente: ${email.value}`;
//   // dir.click();
// })

