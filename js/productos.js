

/*-----------------------------------------------------------------
 ||  Funcion addItem        
 -----------------------------------------------------------------*/
function addItem(item){
    const itemHTML = 
    `
    <div class=" col-sm-12 col-md-6 col-lg-4 col-xl-4">
      <div class="card tamañoCartProducto" >
          <a href="./vistaProducto.html">
            <img src="${item.img}" class="card-img-top" alt="image">
          </a>
          <div class="card-body elementosCardProducto">
              <a href="./vistaProducto.html"><h2 class="card-title">${item.name}</h2></a>
              <div class="cardPrecio">
                <a href="./vistaProducto.html"><h3 class="card-title">$${item.price} MN</h3></a>
                <h5 class="card-title">${item.size}</h5>
              </div>
              <h5 class="card-title">${item.category} </h5>
              <p class="card-text">${item.description}</p>
              <a href="./vistaProducto.html" class="btn elementosCardProducto_btn" id="btnComprar"> ¡ Comprar ! </a>
          </div>
      </div>
      </div> `
    
   ;

    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}//addItem


/*-----------------------------------------------------------------
 ||  Funcion addItem        
 -----------------------------------------------------------------*/
function filtrado(objetos,filtro){
    const itemsContainer = document.getElementById("list-items");
        
    if( filtro === 'Todos'){
        itemsContainer.innerHTML = '';
        objetos.forEach(objeto => {
            addItem(objeto);
        });
    }
    else{
        itemsContainer.innerHTML = '';
        objetos.forEach(objeto => {
            if (objeto.category === filtro) {
                addItem(objeto);
            }//if
        });//forEach
    }

}//filtrado

//coloca menu de cuadro 
function cuadro(){
    let div = document.getElementById('contenedorCategorias');
    div.innerHTML = '';
    div.innerHTML = `
    <div id="menuCambio" class="card " style="width: 20em;">
        <div class="card-header" id="menuCategorias"><h3>Categorías</h3></div>
        <ul class="list-group list-group-flush ">
    
            <li class="listaCategorias"><a href="#" class="categoria">Todos</a></li>
            <li class="listaCategorias"><a href="#" class="categoria">Caricaturas</a></li>
            <li class="listaCategorias"><a href="#" class="categoria">Celebridades</a></li>
            <li class="listaCategorias"><a href="#" class="categoria">Mascotas</a></li>
            <li class="listaCategorias"><a href="#" class="categoria">Personajes</a></li>
            <li class="listaCategorias"><a href="#" class="categoria">Personalizados</a></li>
            <li class="listaCategorias"><a href="#" class="categoria">Superhéroes</a></li>
            
        </ul>
    </div><!---->`;
    
    
    const menu = document.querySelectorAll('.categoria');
    
    menu.forEach(function(categoria){
    categoria.addEventListener('click', (e) =>{
        let seleccion = e.currentTarget.innerHTML; 
        filtrado(objetos,seleccion);
    })
    });

}//menuCuadro

//coloca menu en dropdown
function lista(){
    let div = document.getElementById('contenedorCategorias');
    div.innerHTML = '';
    div.innerHTML = `
    <div class="dropdown listaCategoriasDrop ">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
            Categorías
        </button>
        <div class="dropdown-menu menuListaCategorias" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item elementoMenuListaCategorias" href="#">Todos</a>
            <a class="dropdown-item elementoMenuListaCategorias" href="#">Caricaturas</a>
            <a class="dropdown-item elementoMenuListaCategorias" href="#">Celebridades</a>
            <a class="dropdown-item elementoMenuListaCategorias" href="#">Mascotas</a>
            <a class="dropdown-item elementoMenuListaCategorias" href="#">Personajes</a>
            <a class="dropdown-item elementoMenuListaCategorias" href="#">Personalizados</a>
            <a class="dropdown-item elementoMenuListaCategorias"  href="#">Superhéroes</a>
        </div>
    </div>`;

    const lista = document.querySelectorAll('.elementoMenuListaCategorias');

    lista.forEach(function(categoria){
        categoria.addEventListener('click', (e) =>{
            let seleccion = e.currentTarget.innerHTML; 
            console.log(seleccion);
            filtrado(objetos,seleccion);
        })
    });
}//menuLista

//dependiendo la pantalla que se manera se muestra un elemento
function elementoCategoria(){
    let pantallaw = screen.width;
    let pantallah = screen.height;    
    
    if (pantallaw < 481){
        lista();
    }else if( pantallaw < 769){
        lista();
    }else if(pantallaw < 1025){
        cuadro();        
    }else if(pantallaw < 1281){
        cuadro();
    }else{
        cuadro();
    }
}//elementoCategoria

/*-----------------------------------------------------------------
 ||  Lista de objetos         
 -----------------------------------------------------------------*/
objetos = [
    {
        'id':'1',
        'name':'Batman',
        'img':'../img/muñequitos/batman.jpg',
        'size':'25 cm',
        'category':'Superhéroes',
        'price':'200.00',
        'description':'Batman es un superheroe que te acompañara en todas tus aventuras, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id':'2',
        'name':'Baby Yoda',
        'img':'../img/muñequitos/bby.jpg',
        'size':'20 cm',
        'category':'Superhéroes',
        'price':'350.00',
        'description':'Si cool quieres ser, Baby Yoda debes tener, recuerda que puedes personalizarlo a tu gusto'},
    { 
        'id':'3',
        'name':'Carlitos',
        'img':'../img/muñequitos/carlitos.jpg',
        'size':'20 cm',
        'category':'Caricaturas',
        'price':'350.00',
        'description':'¿Recuerdas los momentos en familia cuando veian juntos los Rugrats? Como olvidar al adorable Carlitos, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id':'4',
        'name':'Coraline',
        'img':'../img/muñequitos/carol.jpg',
        'size':'22 cm',
        'category':'Caricaturas',
        'price':'420.00',
        'description':'Muñequito de Coraline tejido, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id':'5',
        'name':'Homero',
        'img':'../img/muñequitos/homero.jpg',
        'size':'15 cm',
        'category':'Personajes',
        'price':'120.00',
        'description':'Desde Sprinfield hasta tus manos, este llavero te hara decir "WooHoo".'},
    {
        'id':'6',
        'name':'Harry Potter Team',
        'img':'../img/muñequitos/hp.jpg',
        'size':'20 cm',
        'category':'Personajes',
        'price':'600.00',
        'description':'Este trio de amigos magicos te van a encantar.'},
    {
        'id':'7',
        'name':'Perrito',
        'img':'../img/muñequitos/dog2.jpg',
        'size':'25 cm',
        'category':'Mascotas',
        'price':'420.00',
        'description':'Una forma mas de recordar y llevar contigo a tu mascota a donde sea.'},
    {
        'id':'8',
        'name':'Erizo',
        'img':'../img/muñequitos/erizo.jpg',
        'size':'20 cm',
        'category':'Mascotas',
        'price':'130.00',
        'description':'Recordemos a nuestras mascotas con algo pequeñito pero con mucho amor, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id':'9',
        'name':'Arnols y Helga',
        'img':'../img/muñequitos/heyh.jpg',
        'size':'25 cm',
        'category':'Caricaturas',
        'price':'380.00',
        'description':'¿Alguna vez amaste a alguien en secreto como Helga? No hay mejor presente que Arnold y Helga, los muñecos se venden por separado, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id':'10',
        'name':'Iron Maiden',
        'img':'../img/muñequitos/iron.jpg',
        'size':'20 cm',
        'category':'Celebridades',
        'price':'420.00',
        'description':'El regalo perfecto para los Iron Maiden Lover 💕, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id':'11',
        'name':'Friend',
        'img':'../img/muñequitos/friend.jpg',
        'size':'18 cm',
        'category':'Personalizados',
        'price':'200.00',
        'description':'Regala algo a tus seres queridos, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id':'12',
        'name':'Muñequita de Chinos',
        'img':'../img/muñequitos/chinos.jpg',
        'size':'20 cm',
        'category':'Personalizados',
        'price':'600.00',
        'description':'Muñequita con mejillas sonrojadas y cabello chino, recuerda que puedes personalizarlo a tu gusto'},
];


/*-----------------------------------------------------------------
 ||  Mandar a imprimir en pag cada elemento        
 -----------------------------------------------------------------*/
objetos.forEach(objeto => {
    addItem(objeto);
});
   

/*-----------------------------------------------------------------
 ||  Saber que elemento pongo, cuadro o ista       
 -----------------------------------------------------------------*/
elementoCategoria();





/*-----------------------------------------------------------------
 ||  redimension de panalla   
 -----------------------------------------------------------------*/

window.addEventListener("resize", function(e){
  
    elementoCategoria();
});

