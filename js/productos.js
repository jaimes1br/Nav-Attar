

/*-----------------------------------------------------------------
 ||  Funcion addItem        
 -----------------------------------------------------------------*/
function addItem(item){
    const itemHTML = 
    
    '<div   class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">' +
    '<div class="card" style="width: 22rem;">' +
    '    <img src="'+item.img +'" class="card-img-top" alt="image">' +
    '    <div class="card-body">' +
    '        <h3 class="card-title">'+item.name+'</h5>' +
    '        <h5 class="card-title">Medida: '+item.size+'</h5>' +
    '        <h5 class="card-title">Categoria: '+item.category+'</h5>' +
    '        <h5 class="card-title">$'+item.price+'</h5>' +
    '        <p class="card-text">'+item.description+'</p>' +
    '        <a href="#" class="btn btn-primary">Comprar</a>' +
    '    </div>' +
    '</div>'
    '</div>';

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
        'price':'200',
        'description':'Batman es un superheroe que te acompañara en todas tus aventuras, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id':'2',
        'name':'Baby Yoda',
        'img':'../img/muñequitos/bby.jpg',
        'size':'20 cm',
        'category':'Superhéroes',
        'price':'350',
        'description':'Si cool quieres ser, Baby Yoda debes tener, recuerda que puedes personalizarlo a tu gusto'},
    { 
        'id':'3',
        'name':'Carlitos',
        'img':'../img/muñequitos/carlitos.jpg',
        'size':'20 cm',
        'category':'Caricaturas',
        'price':'350',
        'description':'¿Recuerdas los momentos en familia cuando veian juntos los Rugrats? Como olvidar al adorable Carlitos, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id':'4',
        'name':'Coraline',
        'img':'../img/muñequitos/carol.jpg',
        'size':'22 cm',
        'category':'Caricaturas',
        'price':'420',
        'description':'Muñequito de Coraline tejido, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id':'5',
        'name':'Homero',
        'img':'../img/muñequitos/homero.jpg',
        'size':'15 cm',
        'category':'Personajes',
        'price':'120',
        'description':'Desde Sprinfield hasta tus manos, este llavero te hara decir "WooHoo".'},
    {
        'id':'6',
        'name':'Harry Potter Team',
        'img':'../img/muñequitos/hp.jpg',
        'size':'20 cm',
        'category':'Personajes',
        'price':'600',
        'description':'Este trio de amigos magicos te van a encantar.'},
    {
        'id':'7',
        'name':'Perrito',
        'img':'../img/muñequitos/dog2.jpg',
        'size':'25 cm',
        'category':'Mascotas',
        'price':'420',
        'description':'Una forma mas de recordar y llevar contigo a tu mascota a donde sea.'},
    {
        'id':'8',
        'name':'Erizo',
        'img':'../img/muñequitos/erizo.jpg',
        'size':'20 cm',
        'category':'Mascotas',
        'price':'130',
        'description':'Recordemos a nuestras mascotas con algo pequeñito pero con mucho amor, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id':'9',
        'name':'Arnols y Helga',
        'img':'../img/muñequitos/heyh.jpg',
        'size':'25 cm',
        'category':'Caricaturas',
        'price':'380',
        'description':'¿Alguna vez amaste a alguien en secreto como Helga? No hay mejor presente que Arnold y Helga, los muñecos se venden por separado, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id':'10',
        'name':'Iron Maiden',
        'img':'../img/muñequitos/iron.jpg',
        'size':'20 cm',
        'category':'Celebridades',
        'price':'420',
        'description':'El regalo perfecto para los Iron Maiden Lover 💕, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id':'11',
        'name':'Friend',
        'img':'../img/muñequitos/friend.jpg',
        'size':'18 cm',
        'category':'Personalizados',
        'price':'200',
        'description':'Regala algo a tus seres queridos, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id':'12',
        'name':'Muñequita de Chinos',
        'img':'../img/muñequitos/chinos.jpg',
        'size':'20 cm',
        'category':'Personalizados',
        'price':'600',
        'description':'Muñequita con mejillas sonrojadas y cabello chino, recuerda que puedes personalizarlo a tu gusto'},
];



/*-----------------------------------------------------------------
 ||  Mandar a imprimir en pag cada elemento        
 -----------------------------------------------------------------*/
objetos.forEach(objeto => {
    addItem(objeto);
});
                



/*-----------------------------------------------------------------
 ||  conocer filtro        
 -----------------------------------------------------------------*/
const menu = document.querySelectorAll('.categoria');

menu.forEach(function(categoria){
    categoria.addEventListener('click', (e) =>{
        let seleccion = e.currentTarget.innerHTML; 
        filtrado(objetos,seleccion);
    })
});
