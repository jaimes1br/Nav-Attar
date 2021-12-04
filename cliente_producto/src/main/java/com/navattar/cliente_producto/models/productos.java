package com.navattar.cliente_producto.models;

import javax.persistence.*;

@Entity
@Table(name ="productos")
public class productos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="IDproducto")

        private  Long iDProducto;
        private String nombre;
        private Double precio;
        private Long medida;
        private String descripcion;
        private String imagen;
        private Long existencia;
        private Long Categoria_IDcategoria;
        private Long Artesano_IDartesano;

    public productos(Long iDProducto, String nombre, Double precio, Long medida, String descripcion, String imagen, Long existencia, Long categoria_IDcategoria, Long artesano_IDartesano) {
        this.iDProducto = iDProducto;
        this.nombre = nombre;
        this.precio = precio;
        this.medida = medida;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.existencia = existencia;
        Categoria_IDcategoria = categoria_IDcategoria;
        Artesano_IDartesano = artesano_IDartesano;
    }//constructor

    public productos() {
    }//constructor vacio

    public Long getiDProducto() {
        return iDProducto;
    }//getiDProducto

    public void setiDProducto(Long iDProducto) {
        this.iDProducto = iDProducto;
    }//setiDProducto

    public String getNombre() {
        return nombre;
    }//getNombre

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }//setNombre

    public Double getPrecio() {
        return precio;
    }//getPrecio

    public void setPrecio(Double precio) {
        this.precio = precio;
    }//setPrecio

    public Long getMedida() {
        return medida;
    }//getMedida

    public void setMedida(Long medida) {
        this.medida = medida;
    }//setMedida

    public String getDescripcion() {
        return descripcion;
    }//getDescripcion

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }//setDescripcion

    public String getImagen() {
        return imagen;
    }//getImagen

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }//setImagen

    public Long getExistencia() {
        return existencia;
    }//getExistencia

    public void setExistencia(Long existencia) {
        this.existencia = existencia;
    }//setExistencia

    public Long getCategoria_IDcategoria() {
        return Categoria_IDcategoria;
    }//getCategoria_IDcategoria

    public void setCategoria_IDcategoria(Long categoria_IDcategoria) {
        Categoria_IDcategoria = categoria_IDcategoria;
    }//setCategoria_IDcategoria

    public Long getArtesano_IDartesano() {
        return Artesano_IDartesano;
    }//getArtesano_IDartesano

    public void setArtesano_IDartesano(Long artesano_IDartesano) {
        Artesano_IDartesano = artesano_IDartesano;
    }//setArtesano_IDartesano



}//class productos
