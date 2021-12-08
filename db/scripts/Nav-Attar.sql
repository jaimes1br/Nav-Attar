CREATE DATABASE nav_attar;
USE nav_attar;


CREATE TABLE `artesano` (
  `IDartesano` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `correo_electronico` varchar(100) NOT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`IDartesano`),
);

CREATE TABLE `cliente` (
  `IDusuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `correo_electronico` varchar(100) NOT NULL,
  `contrasena` varchar(50) NOT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`IDusuario`),
);

CREATE TABLE `productos` (
  `IDproducto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `precio` decimal(5,2) NOT NULL,
  `medida` int DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `imagen` varchar(300) NOT NULL,
  `categoria` varchar(300) NOT NULL,
  PRIMARY KEY (`IDproducto`),
);

CREATE TABLE `pedido` (
  `IDpedido` int NOT NULL AUTO_INCREMENT,
  `fecha_pedido` date NOT NULL,
  `fecha_entrega` date NOT NULL,
  `estado_pedido` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`IDpedido`),
);

CREATE TABLE `carrito` (
  `IDcarrito` int NOT NULL AUTO_INCREMENT,
  `precio_total` decimal(7,2) DEFAULT NULL,
  `cantidad_producto` int DEFAULT NULL,
  `subtotal` decimal(7,2) NOT NULL,
  PRIMARY KEY (`IDcarrito`),
);



INSERT INTO artesano (nombre, correo_electronico, telefono) 
VALUES
("Paola", "paola.rod.quiroz@gmail.com","5512345678"), 
("Alejandro", "ale.rodriguez@gmail.com", "5578654321"), 
("Erik", "erik.ramirez@gmail.com", "5534678976"), 
("Pablo", "pablo-perez@gmail.com", "55512637849"), 
("Fabiola", "fabiolayt1@gmail.com", "5565478965");



INSERT INTO cliente (nombre, correo_electronico, telefono, contrasena)
VALUES 

("Brandon", "brandon.jaimes@gmail.com", "5543456234", "bran1234"),
("Ilan", "illan@mailfalso.com", "5544332211", "noTu_illan"),
("Pat", "pat.ella@gmail.com","1122334455", "pat.to.happiness"),
("Daniel", "danny.phantom@gmail.com","5599668844","danny_PHA"),
("Mario","cantinfleando@hotmail.com","1111155555","Cantinflas");



INSERT INTO productos (nombre, precio, medida, descripcion, imagen,categoria) 
VALUES 

("Batman", 200, 25, "Batman es un superhéroe que te acompañará en todos tus aventuras, recuerda que puedes personalizarlo a tu gusto", "batman.png", "Superhéroes"),
("Baby Yoda", 350.00, 20, "Si cool quieres ser, un baby Yoda debes tener, recuerda que puedes personalizarlo a tu gusto", "babyyoda.png", "Superhéroes"),
("Carlitos", 350.00, 20, "¿Recuerdas los momentos en familia cuando veían a los Rugrats? Como olvidar al olvidar al adorable Carlitos", "carlitos.png", "Caricaturas"),
("Coraline", 420.00, 22, "Muñequita de Coraline tejida, recuerda que puedes personalizarlo a tu gusto ", "coraline.png", "Caricaturas"),
("Homero", 120.00, 15, "Desde Springfield hasta tus manos, este llavero ta hará decir ¡Woohoo!", "homero.png", "Caricatura");



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



