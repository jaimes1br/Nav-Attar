package com.navattar.cliente_producto.models;


import com.navattar.cliente_producto.util.SHAUtil;

import javax.persistence.*;

@Entity
@Table(name = "cliente")
public class cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "IDusuario", unique = true, nullable = false)
    private Long IDusuario;
    @Column(name = "nombre",nullable = false)
    private String nombre;
    @Column(name = "correo_electronico",nullable = false)
    private String correo_electronico;
    @Column(name = "contrasena",nullable = false)
    private String contrasena;
    @Column(name = "telefono",nullable = false)
    private String telefono;

    public cliente(Long IDusuario, String nombre, String correo_electronico, String contrasena,String telefono) {
        this.IDusuario = IDusuario;
        this.nombre = nombre;
        this.correo_electronico = correo_electronico;
        this.setContrasena(contrasena);
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
        this.contrasena = SHAUtil.createHash(contrasena);
    }//setContrasena

    public void setClearContrasena(String contrasena) {
        this.contrasena = contrasena;
    }//setClearContrasena

    public String getTelefono() {
        return telefono;
    }//getTelefono

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }//setTelefono


}//cliente
