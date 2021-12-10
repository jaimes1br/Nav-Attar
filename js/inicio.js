/**
 * Este archivo es unicamente para preparar los arreglos y objetos para 
 * poder utilizar  el local sin problemas
 */


if(localStorage.getItem('usuarios') === null){
    localStorage.setItem('usuarios',JSON.stringify([]))
}

if (localStorage.getItem('carroBD') === null){
    localStorage.setItem('carroBD',JSON.stringify([]))
}

if (localStorage.getItem('usuarioEnSesion') === null){
    localStorage.setItem('usuarioEnSesion',JSON.stringify([]))
}

if (localStorage.getItem('pedidosBD') === null){
    localStorage.setItem('pedidosBD',JSON.stringify([]))
}

