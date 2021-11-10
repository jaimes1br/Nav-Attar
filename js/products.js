function addItem(item){
    const itemHTML = 
    '<div   class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">' +
        '<div class="card" style="width: 18rem;">' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">' +
        '    <div class="card-body">' +
        '        <h3 class="card-title">'+item.name+'</h5>' +
        '        <h5 class="card-title">Medida: '+item.size+'</h5>' +
        '        <h5 class="card-title">Categoria: '+item.category+'</h5>' +
        '        <h5 class="card-title">$'+item.price+'</h5>' +
        '        <p class="card-text">'+item.description+'</p>' +
        '        <a href="#" class="btn btn-primary">Add</a>' +
        '    </div>' +
        '</div>'
        '</div>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({'name':'Batman',
    'img':'../img/muñequitos/batman.jpg',
    'size':'25 cm',
    'category':'Super heroes',
    'price':'200',
    'description':'Un pequeño Super heroe que salva vidas durante la noche.'});

addItem({'name':'Homero',
    'img':'../img/muñequitos/homero.jpg',
    'size':'15 cm',
    'category':'Personajes',
    'price':'120',
    'description':'Desde Sprinfield hasta tus manos, este llavero te hara decir "WooHoo".'});

addItem({'name':'Harry Potter Team',
    'img':'../img/muñequitos/hp.jpg',
    'size':'20 cm',
    'category':'Personajes',
    'price':'600',
    'description':'Este trio de amigos magicos te van a encantar.'});
    
addItem({'name':'Perrito',
    'img':'../img/muñequitos/dog2.jpg',
    'size':'25 cm',
    'category':'Mascotas',
    'price':'420',
    'description':'Una forma mas de recordar y llevar contigo a tu mascota a donde sea.'});    



// addItem({'name':'juice',
//     'img':'https://www.gs1india.org/media/Juice_pack.jpg',
//     'description':'Orange and Apple juice fresh and delicious'});

// addItem({'name':'Tayto',
//     'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
//     'description':'Cheese & Onion Chips'})

// addItem({'name':'Jarrito',
//     'img':'https://www.jarritos-shop.es/wp-content/uploads/2020/05/Jarritos-Lima.jpg',
//     'description':'Lime Soda'})