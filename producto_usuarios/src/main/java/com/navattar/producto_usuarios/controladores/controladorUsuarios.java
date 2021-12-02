package com.navattar.producto_usuarios.controladores;

import com.navattar.producto_usuarios.modelos.usuarios;
import com.navattar.producto_usuarios.serviciosUsuarios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
public class controladorUsuarios {

    private final serviciosUsuarios _serviciosUsuarios;

    @Autowired
    public controladorUsuarios(serviciosUsuarios _serviciosUsuarios) {
        this._serviciosUsuarios = _serviciosUsuarios;
    }//constructor

    @GetMapping
    public List<usuarios> getUsuariosT(){
        return _serviciosUsuarios.getUsuariosT();
    }//getUsuariosT




}//class controladorUsuarios
