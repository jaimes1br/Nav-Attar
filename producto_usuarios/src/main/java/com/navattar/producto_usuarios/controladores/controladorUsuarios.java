package com.navattar.producto_usuarios.controladores;

import com.navattar.producto_usuarios.modelos.usuarios;
import com.navattar.producto_usuarios.serviciosUsuarios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping(path = "{idUsuario}")// /api/userios/1
    public usuarios getUsuario(@PathVariable("idUsuario") Long idUsuario){
        return _serviciosUsuarios.getUsuario(idUsuario);
    }//getUsuarios

    @DeleteMapping(path = "{idUsuario}")// /api/usuarios
    public void deleteUsuario (@PathVariable("idUsuario") Long idUsuario){
        _serviciosUsuarios.deleteUsuario(idUsuario);
    }//deleteUsuario

    @PutMapping(path ="{idUsuario}")
    public void updateUser(@PathVariable("idUsuario") Long idUsuario,
                           @RequestParam(required = true) String contrasenaOriginal, @RequestParam(required = false) String nuevaContrasena,
                           @RequestParam(required = false) String originalNombre, @RequestParam(required = false) String nuevoNombre,
                           @RequestParam(required = false) String originalTelefono, @RequestParam(required = false) String nuevoTelefono){
        _serviciosUsuarios.updateUsuario(idUsuario, contrasenaOriginal, nuevaContrasena, nuevoNombre, nuevoTelefono);
    }//updateUser

    @PostMapping
    public void addUsuarios(@RequestParam usuarios usuario){
        _serviciosUsuarios.addUsuario(usuario);
    }//addUsuarios

}//class controladorUsuarios
