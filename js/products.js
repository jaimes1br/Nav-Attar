function addItem(item){
    const itemHTML = 
    
    `<div class=" col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 sinP">
        <div class="card cardTam">
            <a href="#"><img src="${item.img}" class="imgProducto" alt="..."></a>  
            <div class="card-body">
                <div class="nombreProducto">
                    <a href="#"><h3 class="card-title nombreProducto__titulo">${item.name}</h3></a>
                </div><!--nombre-->
                <div class="datosProducto">
                    <a href=""><h2 class="card-text">$${item.price}°°</h2></a>
                    <a href=""> <h4 class="card-text">Medida: ${item.size}</h4> </a>
                </div><!--datos-->
                <div class="descripcion">
                    <a href=""><h5 class="card-text descripcion_a">${item.category}</h5></a>
                    <p class="card-text">${item.description}</p>    
                </div><!--descripcion-->
                <div class="botonesProducto">
                    <a href="#" class="btn btn-primary">¡ Comprar !</a> 
                </div><!--comprar-->
            </div><!--cardBody-->
        </div><!--card-->
     </div><!--colProducto-->
    `;

    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({
    'id':'1',
    'name':'Batman',
    'img':'../img/muñequitos/batman.jpg',
    'size':'25 cm',
    'category':'Super heroes',
    'price':'200',
    'description':'Batman es un superheroe que te acompañara en todas tus aventuras, recuerda que puedes personalizarlo a tu gusto'});

addItem({
    'id':'2',
    'name':'Baby Yoda',
    'img':'../img/muñequitos/bby.jpg',
    'size':'20 cm',
    'category':'Super heroes',
    'price':'350',
    'description':'Si cool quieres ser, Baby Yoda debes tener, recuerda que puedes personalizarlo a tu gusto'});

addItem({
    'id':'3',
    'name':'Carlitos',
    'img':'../img/muñequitos/carlitos.jpg',
    'size':'20 cm',
    'category':'Caricaturas',
    'price':'350',
    'description':'¿Recuerdas los momentos en familia cuando veian juntos los Rugrats? Como olvidar al adorable Carlitos, recuerda que puedes personalizarlo a tu gusto'});

addItem({
    'id':'4',
    'name':'Coraline',
    'img':'../img/muñequitos/carol.jpg',
    'size':'22 cm',
    'category':'Caricaturas',
    'price':'420',
    'description':'Muñequito de Coraline tejido, recuerda que puedes personalizarlo a tu gusto'});

addItem({
    'id':'5',
    'name':'Homero',
    'img':'../img/muñequitos/homero.jpg',
    'size':'15 cm',
    'category':'Personajes',
    'price':'120',
    'description':'Desde Sprinfield hasta tus manos, este llavero te hara decir "WooHoo".'});

addItem({
    'id':'6',
    'name':'Harry Potter Team',
    'img':'../img/muñequitos/hp.jpg',
    'size':'20 cm',
    'category':'Personajes',
    'price':'600',
    'description':'Este trio de amigos magicos te van a encantar.'});
    
addItem({
    'id':'7',
    'name':'Perrito',
    'img':'../img/muñequitos/dog2.jpg',
    'size':'25 cm',
    'category':'Mascotas',
    'price':'420',
    'description':'Una forma mas de recordar y llevar contigo a tu mascota a donde sea.'});    

 addItem({
    'id':'8',
    'name':'Erizo',
    'img':'../img/muñequitos/erizo.jpg',
    'size':'20 cm',
    'category':'Mascotas',
    'price':'130',
    'description':'Recordemos a nuestras mascotas con algo pequeñito pero con mucho amor, recuerda que puedes personalizarlo a tu gusto'}); 

  
addItem({
    'id':'9',
    'name':'Arnols y Helga',
    'img':'../img/muñequitos/heyh.jpg',
    'size':'25 cm',
    'category':'Caricaturas',
    'price':'380',
    'description':'¿Alguna vez amaste a alguien en secreto como Helga? No hay mejor presente que Arnold y Helga, los muñecos se venden por separado, recuerda que puedes personalizarlo a tu gusto'}); 
   

addItem({
    'id':'10',
    'name':'Iron Maiden',
    'img':'../img/muñequitos/iron.jpg',
    'size':'20 cm',
    'category':'Celebridades',
    'price':'420',
    'description':'El regalo perfecto para los Iron Maiden Lover 💕, recuerda que puedes personalizarlo a tu gusto'}); 


addItem({
    'id':'11',
    'name':'Friend',
    'img':'../img/muñequitos/friend.jpg',
    'size':'18 cm',
    'category':'Personalizado',
    'price':'200',
    'description':'Regala algo a tus seres queridos, recuerda que puedes personalizarlo a tu gusto'}); 


addItem({
    'id':'12',
    'name':'Muñequita de Chinos',
    'img':'../img/muñequitos/chinos.jpg',
    'size':'20 cm',
    'category':'Personalizado',
    'price':'600',
    'description':'Muñequita con mejillas sonrojadas y cabello chino, recuerda que puedes personalizarlo a tu gusto'}); 
                