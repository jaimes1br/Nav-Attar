package com.navattar.producto_usuarios;


import com.navattar.producto_usuarios.modelos.productos;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class serviciosProductos {

    public final ArrayList<productos> lista = new ArrayList<>();

    public serviciosProductos(){
        lista.add(new productos(1,"Batman", 200, 25, "Batman es un superhéroe que te acompañará en todos tus aventuras, recuerda que puedes personalizarlo a tu gusto", "batman.png", 1, 6, 2));
        lista.add(new productos(2,"Baby Yoda", 350.00f, 20, "Si cool quieres ser, un baby Yoda debes tener, recuerda que puedes personalizarlo a tu gusto", "babyyoda.png", 1, 6, 5));
        lista.add(new productos(3,"Carlitos", 350.00f, 20, "¿Recuerdas los momentos en familia cuando veían a los Rugrats? Como olvidar al olvidar al adorable Carlitos", "carlitos.png", 1, 1, 1));
        lista.add(new productos(4,"Coraline", 420.00f, 22, "Muñequita de Coraline tejida, recuerda que puedes personalizarlo a tu gusto ", "coraline.png", 1, 1, 5));
        lista.add(new productos(5, "Homero", 120.00f, 15, "Desde Springfield hasta tus manos, este llavero ta hará decir ¡Woohoo!", "homero.png", 1, 1, 3));
    }//serviciosProductos

    public List<productos> getProductosT(){
        return lista;
    }//getProductosT

    public productos getProducto(Long idProducto){
        if (idProducto <= lista.size()){
            return lista.get(idProducto.intValue()-1);
        }//if >= size
        return new productos(0, "No encontrado", 0.00f, 0, "No encontrado", "No encontrado", 0, 0, 0);
    }//getProducto

    public boolean deleteProducto(Long idProducto){
        boolean pro = false;
        if (idProducto <= lista.size()){
            lista.remove(idProducto.intValue()-1);
            pro = true;
        }//if <= size
        return pro;
    }//deleteProducto

    public void updateProducto(Long idProducto, String nombreProducto, float nuevoPrecio, int nuevaMedida, String nuevaDescripcion, String nuevaImagen, int existenciaActual, int actCategoria_IDcategoria){
        if (idProducto <= lista.size()){
            productos producto = lista.get(idProducto.intValue()-1);
            if (nombreProducto != null)
                if ((!nombreProducto.isEmpty()) && (!nombreProducto.equals(producto.getNombre()))) {
                    producto.setNombre(nombreProducto);
                }//nombreProducto
            if ((nuevoPrecio > 0) && (nuevoPrecio != producto.getPrecio())) {
                producto.setPrecio(nuevoPrecio);
                }//nuevo precio
            if ((nuevaMedida > 0) && (nuevaMedida != producto.getMedida())){
                producto.setMedida(nuevaMedida);
                }//Nueva medida
            if (nuevaDescripcion != null)
                if ((!nuevaDescripcion.isEmpty()) && (!nuevaDescripcion.equals(producto.getDescripcion()))) {
                    producto.setDescripcion(nuevaDescripcion);
                }//Nueva descripcion
            if (nuevaImagen != null)
                if ((!nuevaImagen.isEmpty()) && (!nuevaImagen.equals(producto.getImagen()))){
                    producto.setImagen(nuevaImagen);
                }//Nueva imagen
            if ((existenciaActual >= 0 ) && (existenciaActual != producto.getExistencia())){
                producto.setExistencia(existenciaActual);
            }//Actualizacion de existencia producto

            if ((actCategoria_IDcategoria > 0) && (actCategoria_IDcategoria <= 5)){
                producto.setCategoria_IDcategoria(actCategoria_IDcategoria);
            }//Actualizacion de la categoria
        }
    }

    public void addProducto(productos producto){
        lista.add(producto);
    }// addUser

}
