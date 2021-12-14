package com.navattar.cliente_producto.models;


//Datos del formulario de login que el usuario pone
public class LoginData {
    private final String email;
    private final String password;

    public LoginData(){
        this.email = "";
        this.password = "";
    }

    public LoginData(String email, String password) {
        this.email = email;
        this.password = password;
    }//constructor

    public String getEmail() {
        return email;
    }//getEmail

    public String getPassword() {
        return password;
    }//getPassword
}//LoginData

