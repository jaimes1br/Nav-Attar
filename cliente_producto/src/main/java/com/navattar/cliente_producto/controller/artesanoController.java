package com.navattar.cliente_producto.controller;


import com.navattar.cliente_producto.models.artesano;
import com.navattar.cliente_producto.services.artesanoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/artesano")
@CrossOrigin("*")
public class artesanoController {

    private final artesanoService _artesanoService;

    @Autowired
    public artesanoController(artesanoService artesanoService) {
        this._artesanoService = artesanoService;
    }

    @GetMapping
    public List<artesano> getAllCliente(){
        return _artesanoService.getAllCliente();
    }//getAllCliente

    @GetMapping (path = "{IDusuario}")
    public artesano getCliente(@PathVariable("IDusuario") Long IDusuario){
        return _artesanoService.getCliente(IDusuario);
    }//getCliente

    @DeleteMapping (path = "{IDusuario}")
    public void deleteCliente(@PathVariable("IDusuario") Long IDusuario){
        _artesanoService.deleteCliente(IDusuario);
    }//deleteCliente

    @PostMapping
    public void  addCliente(@RequestBody artesano _artesano){
        _artesanoService.addCliente(_artesano);
    }//addCliente

    @PutMapping (path = "{IDusuario}")
    public void updateCliente(@PathVariable("IDusuario") Long IDusuario,
                              @RequestParam(required = false) String nombre,
                              @RequestParam(required = true) String contrasena,
                              @RequestParam(required = false) String nuevaContrasena,
                              @RequestParam(required = false) String telefono){
        _artesanoService.updateCliente(IDusuario, nombre, contrasena, nuevaContrasena, telefono);
    }//updateProducto
}
