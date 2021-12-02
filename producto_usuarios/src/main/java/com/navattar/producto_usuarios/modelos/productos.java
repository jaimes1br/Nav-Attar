package com.navattar.producto_usuarios.modelos;

public class productos {
    private int idProducto;
    private String nombre;
    private float precio;
    private int medida;
    private String descripcion;
    private String imagen;
    private int existencia;
    private int Categoria_IDcategoria;
    private int Artesano_IDartesano;

    public productos(int idProducto, String nombre, float precio, int medida, String descripcion, String imagen, int existencia, int categoria_IDcategoria, int artesano_IDartesano) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.precio = precio;
        this.medida = medida;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.existencia = existencia;
        Categoria_IDcategoria = categoria_IDcategoria;
        Artesano_IDartesano = artesano_IDartesano;
    }//constructor

    public productos(){
    }

    public int getIdProducto() {
        return idProducto;
    }//getIdProducto

    public void setIdProducto(int idProducto) {
        this.idProducto = idProducto;
    }//setIdProducto

    public String getNombre() {
        return nombre;
    }//getNombre

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }//setNombre

    public float getPrecio() {
        return precio;
    }//getPrecio

    public void setPrecio(float precio) {
        this.precio = precio;
    }//setPrecio

    public int getMedida() {
        return medida;
    }//getMedida

    public void setMedida(int medida) {
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

    public int getExistencia() {
        return existencia;
    }//getExistencia

    public void setExistencia(int existencia) {
        this.existencia = existencia;
    }//setExistencia

    public int getCategoria_IDcategoria() {
        return Categoria_IDcategoria;
    }//getCategoria_IDcategoria

    public void setCategoria_IDcategoria(int categoria_IDcategoria) {
        Categoria_IDcategoria = categoria_IDcategoria;
    }//setCategoria_IDcategoria

    public int getArtesano_IDartesano() {
        return Artesano_IDartesano;
    }//getArtesano_IDartesano

    public void setArtesano_IDartesano(int artesano_IDartesano) {
        Artesano_IDartesano = artesano_IDartesano;
    }//setArtesano_IDartesano

}//Class productos
