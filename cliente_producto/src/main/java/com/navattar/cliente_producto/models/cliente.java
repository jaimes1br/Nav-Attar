package com.navattar.cliente_producto.models;


import javax.persistence.*;

@Entity
@Table(name = "cliente")
public class cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IDusuario", unique = true, nullable = false)
    private Long IDusuario;


    private String nombre;
    private String apellido;
    private String correo_electronico;
    private String contrasena;
    private Long Ubicacion_IDubicacion;
    private String telefono;

    public cliente(Long IDusuario, String nombre, String apellido, String correo_electronico, String contrasena, Long ubicacion_IDubicacion, String telefono) {
        this.IDusuario = IDusuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo_electronico = correo_electronico;
        this.contrasena = contrasena;
        Ubicacion_IDubicacion = ubicacion_IDubicacion;
        this.telefono = telefono;
    }//Constructor

    public cliente() {
    }//Constructor vacio

    public Long getIDusuario() {
        return IDusuario;
    }//getIDusuario

    public void setIDusuario(Long IDusuario) {
        this.IDusuario = IDusuario;
    }//setIDusuario

    public String getNombre() {
        return nombre;
    }//getNombre

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }//setNombre

    public String getApellido() {
        return apellido;
    }//getApellido

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }//setApellido

    public String getCorreo_electronico() {
        return correo_electronico;
    }//getCorreo_electronico

    public void setCorreo_electronico(String correo_electronico) {
        this.correo_electronico = correo_electronico;
    }//setCorreo_electronico

    public String getContrasena() {
        return contrasena;
    }//getContrasena

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }//setContrasena

    public Long getUbicacion_IDubicacion() {
        return Ubicacion_IDubicacion;
    }//getUbicacion_IDubicacion

    public void setUbicacion_IDubicacion(Long ubicacion_IDubicacion) {
        Ubicacion_IDubicacion = ubicacion_IDubicacion;
    }//setUbicacion_IDubicacion

    public String getTelefono() {
        return telefono;
    }//getTelefono

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }//setTelefono


}//cliente
