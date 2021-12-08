package com.navattar.cliente_producto.models;

public class Token {
    private final String accessToken;

    public Token(String accessToken) {
        this.accessToken = accessToken;
    }//constructor

    public Token() {
        this.accessToken = "";
    }

    public String getAccessToken() {
        return accessToken;
    }//accessToken
}//Token

