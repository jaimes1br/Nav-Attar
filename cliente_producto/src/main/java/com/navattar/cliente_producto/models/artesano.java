package com.navattar.cliente_producto.models;

import com.navattar.cliente_producto.util.SHAUtil;

import javax.persistence.*;

@Entity
@Table(name = "artesano")
public class artesano {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "IDartesano", unique = true, nullable = false)
    private Long IDartesano;
    @Column(name = "nombre",nullable = false)
    private String nombre;
    @Column(name = "correo_electronico",nullable = false)
    private String correo_electronico;
    @Column(name = "telefono",nullable = false)
    private String telefono;
    @Column(name = "contrasena",nullable = false)
    private String contrasena;




    public artesano(Long IDartesano, String nombre, String correo_electronico, String contrasena, String telefono) {
        this.IDartesano = IDartesano;
        this.nombre = nombre;
        this.correo_electronico = correo_electronico;
        this.setContrasena(contrasena);
        this.telefono = telefono;
    }//constructor

    public artesano() {
    }//constructorVacio

    public Long getIDartesano() {
        return IDartesano;
    }

    public void setIDartesano(Long IDartesano) {
        this.IDartesano = IDartesano;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreo_electronico() {
        return correo_electronico;
    }

    public void setCorreo_electronico(String correo_electronico) {
        this.correo_electronico = correo_electronico;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = SHAUtil.createHash(contrasena);
    }

    public void setClearContrasena(String contrasena) {
        this.contrasena = SHAUtil.createHash(contrasena);
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
}//cliente