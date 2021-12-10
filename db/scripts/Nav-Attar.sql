CREATE DATABASE nav_attar;
USE nav_attar;


CREATE TABLE `artesano` (
  `IDartesano` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `contrasena` varchar(200) NOT NULL,
  `correo_electronico` varchar(100) NOT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`IDartesano`)
);

CREATE TABLE `cliente` (
  `IDusuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `contrasena` varchar(200) NOT NULL,
  `correo_electronico` varchar(100) NOT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`IDusuario`)
);

CREATE TABLE `productos` (
  `IDproducto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `precio` decimal(5,2) NOT NULL,
  `medida` int DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `imagen` varchar(300) NOT NULL,
  `categoria` varchar(300) NOT NULL,
  PRIMARY KEY (`IDproducto`)
);

CREATE TABLE `pedido` (
  `IDpedido` int NOT NULL AUTO_INCREMENT,
  `fecha_pedido` date NOT NULL,
  `fecha_entrega` date NOT NULL,
  `estado_pedido` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`IDpedido`)
);

CREATE TABLE `carrito` (
  `IDcarrito` int NOT NULL AUTO_INCREMENT,
  `precio_total` decimal(7,2) DEFAULT NULL,
  `cantidad_producto` int DEFAULT NULL,
  `subtotal` decimal(7,2) NOT NULL,
  PRIMARY KEY (`IDcarrito`)
);



INSERT INTO artesano (nombre, contrasena,correo_electronico, telefono) 
VALUES
("Paola",  "866e7d9861babf8298ee5924ece202262bf91a3a60585acbccae97194c24af5f", "paola.rod.quiroz@gmail.com","5512345678"), 
("Alejandro", "866e7d9861babf8298ee5924ece202262bf91a3a60585acbccae97194c24af5f", "ale.rodriguez@gmail.com", "5578654321"), 
("Erik", "866e7d9861babf8298ee5924ece202262bf91a3a60585acbccae97194c24af5f", "erik.ramirez@gmail.com", "5534678976"), 
("Pablo", "866e7d9861babf8298ee5924ece202262bf91a3a60585acbccae97194c24af5f", "pablo-perez@gmail.com", "55512637849"), 
("Fabiola", "866e7d9861babf8298ee5924ece202262bf91a3a60585acbccae97194c24af5f", "fabiolayt1@gmail.com", "5565478965");



INSERT INTO cliente (nombre,contrasena, correo_electronico, telefono)
VALUES 

("Brandon", "866e7d9861babf8298ee5924ece202262bf91a3a60585acbccae97194c24af5f","brandon.jaimes@gmail.com", "5543456234" ),
("Ilan", "866e7d9861babf8298ee5924ece202262bf91a3a60585acbccae97194c24af5f","illan@mailfalso.com", "5544332211"),
("Pat", "866e7d9861babf8298ee5924ece202262bf91a3a60585acbccae97194c24af5f","pat.ella@gmail.com","1122334455"),
("Daniel", "866e7d9861babf8298ee5924ece202262bf91a3a60585acbccae97194c24af5f","danny.phantom@gmail.com","5599668844"),
("Mario","866e7d9861babf8298ee5924ece202262bf91a3a60585acbccae97194c24af5f","cantinfleando@hotmail.com","1111155555");



INSERT INTO productos (`IDproducto`,`nombre`,`precio`,`medida`,`descripcion`,`imagen`,`categoria`) VALUES (1,'Batman',200.00,25,'Batman es un superhéroe que te acompañará en todos tus aventuras, recuerda que puedes personalizarlo a tu gusto','batman.jpg','Superhéroes');

INSERT INTO productos (`IDproducto`,`nombre`,`precio`,`medida`,`descripcion`,`imagen`,`categoria`) VALUES (2,'Baby Yoda',350.00,20,'Si cool quieres ser, un baby Yoda debes tener, recuerda que puedes personalizarlo a tu gusto','bby.jpg','Superhéroes');

INSERT INTO productos (`IDproducto`,`nombre`,`precio`,`medida`,`descripcion`,`imagen`,`categoria`) VALUES (3,'Carlitos',350.00,20,'¿Recuerdas los momentos en familia cuando veían a los Rugrats? Como olvidar al olvidar al adorable Carlitos','carlitos.jpg','Caricaturas');

INSERT INTO productos (`IDproducto`,`nombre`,`precio`,`medida`,`descripcion`,`imagen`,`categoria`) VALUES (4,'Coraline',420.00,22,'Muñequita de Coraline tejida, recuerda que puedes personalizarlo a tu gusto ','carol.jpg','Caricaturas');

INSERT INTO productos (`IDproducto`,`nombre`,`precio`,`medida`,`descripcion`,`imagen`,`categoria`) VALUES (5,'Iron Maiden',420.00,22,'El regalo perfecto para los Iron Maiden Lover 💕, recuerda que puedes personalizarlo a tu gusto','iron.jpg','Celebridades');

INSERT INTO productos (`IDproducto`,`nombre`,`precio`,`medida`,`descripcion`,`imagen`,`categoria`) VALUES (6,'Homero',120.00,15,'Desde Springfield hasta tus manos, este llavero ta hará decir ¡Woohoo!','homero.jpg','Caricaturas');

INSERT INTO productos (`IDproducto`,`nombre`,`precio`,`medida`,`descripcion`,`imagen`,`categoria`) VALUES (7,'Eladoscuro',600.00,20,'Luchador inspirado en una e-commerce basada en la venta online de souvenirs mexicanas con diseños originales, recuerda que puedes personalizarlo a tu gusto','luchador.jpg','Personalizados');

INSERT INTO productos (`IDproducto`,`nombre`,`precio`,`medida`,`descripcion`,`imagen`,`categoria`) VALUES (8,'Ketzal',600.00,20,'Quetzal inspirado en una e-commerce para una cafetería, recuerda que puedes personalizarlo a tu gusto','quetzal.jpg','Personalizados');

INSERT INTO productos (`IDproducto`,`nombre`,`precio`,`medida`,`descripcion`,`imagen`,`categoria`) VALUES (9,'Nav-Attar',600.00,20,'Inspirado en una e-commerce basada en la venta muñecos de crochet, recuerda que puedes personalizarlo a tu gusto','sata.jpg','Personalizados');

INSERT INTO productos (`IDproducto`,`nombre`,`precio`,`medida`,`descripcion`,`imagen`,`categoria`) VALUES (10,'TremendaMexa',600.00,20,'Inspirado en la e-commerce basada en la venta de mandiles de cuero personalizados y café, recuerda que puedes personalizarlo a tu gusto','mndil.jpg','Personalizados');

INSERT INTO productos (`IDproducto`,`nombre`,`precio`,`medida`,`descripcion`,`imagen`,`categoria`) VALUES (11,'Never Dies Co.',600.00,20,'Inspirado en una e-commerce basada en la venta de playeras, recuerda que puedes personalizarlo a tu gusto','metal.jpg','Personalizados');

INSERT INTO productos (`IDproducto`,`nombre`,`precio`,`medida`,`descripcion`,`imagen`,`categoria`) VALUES (12,'Gato programador',600.00,20,'Recordemos a nuestras mascotas con algo pequeñito pero con mucho amor, recuerda que puedes personalizarlo a tu gusto','Gato-Cafe.jpg','Mascotas');

INSERT INTO productos (`IDproducto`,`nombre`,`precio`,`medida`,`descripcion`,`imagen`,`categoria`) VALUES (13,'Harry Potter Team',600.00,20,'\'Este trio de amigos magicos te van a encantar.','hp.jpg','Personajes');




INSERT INTO pedido(fecha_pedido, fecha_entrega, estado_pedido) 
VALUES
('2021-11-15', '2021-11-19', "Entregado"),
('2021-11-25', '2021-12-03', "En proceso"),
('2021-11-29', '2021-12-07', "En proceso"),
('2021-11-08', '2021-11-13', "Entregado"),
('2021-11-28', '2021-11-05', "Pausado");

INSERT INTO carrito(precio_total, cantidad_producto, subtotal) 
VALUES
(1000.00, 3, 900.00),
(230.00, 1, 200.00),
(550.00, 2, 520.00),
(1600.00, 4, 1400.00),
(160.00, 1, 150.00);



