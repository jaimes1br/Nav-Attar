package com.navattar.cliente_producto.controller;


import com.navattar.cliente_producto.models.cliente;
import com.navattar.cliente_producto.services.clienteServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/registro")
@CrossOrigin("*")
public class registroController {
    private final clienteServices _clienteServices;

    @Autowired
    public registroController(clienteServices clienteServices) {
        _clienteServices = clienteServices;
    }//constructor

    @PostMapping
    public void  addCliente(@RequestBody cliente _cliente){
        _clienteServices.addCliente(_cliente);
    }//addCliente
}


