

function contador(accion, cantidadObj,precioObj,subTotalObj){

    
    let valor = cantidadObj.innerHTML;
    let precio = parseFloat((precioObj.innerText).split(" ")[1]);

    console.log(precio);



    (accion == 'mas') ? valor++ : valor--;

    (valor <= 0) ? valor = 1 : valor = valor;

    let sub = precio * valor;

    cantidadObj.innerHTML = valor;
    subTotalObj.innerHTML = "$ " + (sub).toLocaleString('en') + ".00 MXN"
}


/**Botones de cantinadas en las tarjetas  */
let btnsCantidad = document.querySelectorAll('.cantidadBtn');


btnsCantidad.forEach( function(boton){
    boton.addEventListener('click', function (e) {
        const target = e.currentTarget;
        
        contador(target.value,target.parentNode.children[1],target.parentNode.parentNode.children[2],target.parentNode.parentNode.children[4])

    })
})



