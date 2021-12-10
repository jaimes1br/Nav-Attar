package com.navattar.cliente_producto.controller;


import com.navattar.cliente_producto.models.cliente;
import com.navattar.cliente_producto.services.clienteServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clientes")
@CrossOrigin("*")
public class clienteController {

    private final clienteServices _clienteServices;

    @Autowired
    public clienteController(clienteServices _clienteServices) {
        this._clienteServices = _clienteServices;
    }//constructor

    @GetMapping
    public List<cliente> getAllCliente(){
        return _clienteServices.getAllCliente();
    }//getAllCliente

    @GetMapping (path = "{IDusuario}")
    public cliente getCliente(@PathVariable("IDusuario") Long IDusuario){
        return _clienteServices.getCliente(IDusuario);
    }//getCliente

    @DeleteMapping (path = "{IDusuario}")
    public void deleteCliente(@PathVariable("IDusuario") Long IDusuario){
        _clienteServices.deleteCliente(IDusuario);
    }//deleteCliente

    @PostMapping
    public void  addCliente(@RequestBody cliente _cliente){
        _clienteServices.addCliente(_cliente);
    }//addCliente

    @PutMapping (path = "{IDusuario}")
    public void updateCliente(@PathVariable("IDusuario") Long IDusuario,
                              @RequestParam(required = false) String nombre,
                              @RequestParam(required = true) String contrasena,
                              @RequestParam(required = true) String nuevaContrasena,
                              @RequestParam(required = true) String telefono){
        _clienteServices.updateCliente(IDusuario, nombre, contrasena,  nuevaContrasena, telefono);
    }//updateProducto
}//clienteController
