package com.navattar.cliente_producto.services;

import com.navattar.cliente_producto.interfaces.clienteRepository;
import com.navattar.cliente_producto.models.cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class clienteServices {
    private final clienteRepository _clienteRepository;

    @Autowired
    public clienteServices(clienteRepository _clienteRepository) {
        this._clienteRepository = _clienteRepository;
    }//Constructor

    public List<cliente> getAllCliente(){
        return _clienteRepository.findAll();
    }//getAllCliente

    public cliente getCliente (Long IDusuario){
        return _clienteRepository.findById(IDusuario).orElseThrow(()-> new IllegalStateException("El cliente con el ID " + IDusuario + " no Existe"));
    }//getCliente



    public void deleteCliente(Long IDusuario){
        if (_clienteRepository.existsById(IDusuario)){
            _clienteRepository.deleteById(IDusuario);
        }//if
        else{
            throw new IllegalStateException("El cliente con el ID no Existe");
        }

    }//deleteCliente

    public void addCliente (cliente _cliente){
        Optional<cliente> prodByName = _clienteRepository.findByName(_cliente.getCorreo_electronico());
        if (prodByName.isPresent()){
            throw new IllegalStateException("El cliente con el correo [" + _cliente.getCorreo_electronico() + "ya existe.");
        }//if
        _clienteRepository.save(_cliente);
    }//addCliente

    @Transactional
    public void updateCliente(Long IDusuario, String nombre, String contrasena, String nuevaContrasena, String telefono){
        cliente _clientetemp = _clienteRepository.findById(IDusuario).orElseThrow(()-> new IllegalStateException("El cliente con el ID ["+IDusuario+"] No existe"));
        if (nombre != null)
            if ((!nombre.isEmpty()) && (!nombre.equals(_clientetemp.getNombre()))){
                _clientetemp.setNombre(nombre);
            }//nombre
        if (_clientetemp.getContrasena().equals(contrasena)){
            _clientetemp.setContrasena(nuevaContrasena);
        }//if contrasena => nuevaContrasena
        if (telefono != null)
            if ((!telefono.isEmpty()) && (!telefono.equals(_clientetemp.getTelefono()))){
                _clientetemp.setTelefono(telefono);
            }//telefono
    }

}//clienteServices
