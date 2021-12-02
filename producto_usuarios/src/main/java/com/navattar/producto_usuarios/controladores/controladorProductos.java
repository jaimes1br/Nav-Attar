package com.navattar.producto_usuarios.controladores;


import com.navattar.producto_usuarios.modelos.productos;
import com.navattar.producto_usuarios.serviciosProductos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
public class controladorProductos {
    private final serviciosProductos _serviciosProductos;

    @Autowired
    public controladorProductos(serviciosProductos _serviciosProductos) {
        this._serviciosProductos = _serviciosProductos;
    }//constructor

    @GetMapping
    public List<productos> getProductosT (){
        return _serviciosProductos.get
    }

}
