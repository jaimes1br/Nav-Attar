package com.navattar.producto_usuarios.modelos;

public class usuarios {

    private int idUsuario;
    private String nombre;
    private String correo_electronico;
    private String telefono;
    private String contrasena;
    private int Ubicacion_IDubicacion;

    public usuarios(int idUsuario, String nombre, String correo_electronico, String telefono, String contrasena, int ubicacion_IDubicacion) {
        this.idUsuario = idUsuario;
        this.nombre = nombre;
        this.correo_electronico = correo_electronico;
        this.telefono = telefono;
        this.contrasena = contrasena;
        Ubicacion_IDubicacion = ubicacion_IDubicacion;
    }

    public usuarios(){
    }//Constructor vacio

    public int getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }

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

    public String getTelefono() {
        return telefono;
    }//getTelefono

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }//setTelefono

    public String getContrasena() {
        return contrasena;
    }//getContrasena

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }//setContrasena

    public int getUbicacion_IDubicacion() {
        return Ubicacion_IDubicacion;
    }//getUbicacion_IDubicacion

    public void setUbicacion_IDubicacion(int ubicacion_IDubicacion) {
        Ubicacion_IDubicacion = ubicacion_IDubicacion;
    }//setUbicacion_IDubicacion

}
