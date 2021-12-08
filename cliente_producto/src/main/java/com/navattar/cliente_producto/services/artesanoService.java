package com.navattar.cliente_producto.services;

import com.navattar.cliente_producto.interfaces.artesanoRepository;
import com.navattar.cliente_producto.models.artesano;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class artesanoService {
    private final artesanoRepository _artesanoRepository;

    @Autowired
    public artesanoService(artesanoRepository _artesanoRepository) {
        this._artesanoRepository = _artesanoRepository;
    }//constructor

    public List<artesano> getAllCliente(){
        return _artesanoRepository.findAll();
    }//getAllCliente

    public artesano getCliente (Long IDusuario){
        return _artesanoRepository.findById(IDusuario).orElseThrow(()-> new IllegalStateException("El artesano con el ID " + IDusuario + " no Existe"));
    }//getArtesano

    public void deleteCliente(Long IDusuario){
        if (_artesanoRepository.existsById(IDusuario)){
            _artesanoRepository.deleteById(IDusuario);
        }//if
        else{
            throw new IllegalStateException("El artesano con el ID " + IDusuario + " no Existe");
        }
    }//deleteCliente

    public void addCliente (artesano _artesano){
        Optional<artesano> prodByName = _artesanoRepository.findByEmail(_artesano.getCorreo_electronico());
        if (prodByName.isPresent()){
            throw new IllegalStateException("El cliente con el correo [" + _artesano.getCorreo_electronico() + "ya existe.");
        }//if
        _artesanoRepository.save(_artesano);
    }//addCliente

    @Transactional
    public void updateCliente(Long IDusuario, String nombre, String contrasena, String nuevaContrasena, String telefono){
        artesano _clientetemp = _artesanoRepository.findById(IDusuario).orElseThrow(()-> new IllegalStateException("El cliente con el ID ["+IDusuario+"] No existe"));
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



}
