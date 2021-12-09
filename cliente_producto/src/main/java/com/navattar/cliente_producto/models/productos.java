package com.navattar.cliente_producto.models;

import javax.persistence.*;

@Entity
@Table(name ="productos")
public class productos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="IDproducto")

        private Long IDproducto;
        private String nombre;
        private Double precio;
        private Long medida;
        private String descripcion;
        private String imagen;
        private String categoria;


    public productos(Long IDProducto, String nombre, Double precio, Long medida, String descripcion, String imagen,String categoria  ) {
        this.IDproducto = IDProducto;
        this.nombre = nombre;
        this.precio = precio;
        this.medida = medida;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.categoria = categoria;

    }//constructor

    public productos() {
    }//constructor vacio

    public Long getIDproducto() {
        return IDproducto;
    }//getiDProducto

    public void setIDproducto(Long IDproducto) {
        this.IDproducto = IDproducto;
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

    public String getCategoria() {
        return categoria;
    }//getCategoria

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }//setCategoria

}//class productos
