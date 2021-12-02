package com.navattar.producto_usuarios;

import com.navattar.producto_usuarios.modelos.usuarios;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class serviciosUsuarios {

    public final ArrayList<usuarios> lista = new ArrayList<>();

    public serviciosUsuarios (){
        lista.add(new usuarios(1, "Brandon", "Jaimes", "brandon.jaimes@gmail.com", "5543456234", "bran1234", 1));
        lista.add(new usuarios(2, "Ilan", "Del Carmen", "illan@mailfalso.com", "5544332211", "My_illan", 8));
        lista.add(new usuarios(3, "Pat", "Ella", "pat.ella@gmail.com","1122334455", "pat.to.happiness", 9));
        lista.add(new usuarios(4, "Daniel", "Gomez", "danny.phantom@gmail.com","5599668844","danny_PHA", 10));
        lista.add(new usuarios(5, "Mario", "Moreno","cantinfleando@hotmail.com","1111155555","Cantinflas", 2));
    }

    public List<usuarios> getUsuariosT(){
        return lista;
    }//getUsuariosT

    public usuarios getUsuario(Long idUsuarios){
        if(idUsuarios <= lista.size()){
            return lista.get(idUsuarios.intValue()-1);
        }//if >= size
        return new usuarios(0, "No existe", "No existe", "No existe", "No existe", "No existe", 0);
    }//getUsuario

    public boolean deleteUsuario(Long idUsuarios){
        boolean res = false;
        if (idUsuarios <= lista.size()) {
            lista.remove((idUsuarios.intValue()-1));
            res = true;
        }//if>= size
        return res;
    }//deleteUsuario

    public void updateUsuario(Long userId, String contrasenaOriginal, String nuevaContrasena){
        if (userId<= lista.size()){
            usuarios usuario = lista.get((userId.intValue()-1));
            if (usuario.getContrasena().equals(contrasenaOriginal)){
                usuario.setContrasena(nuevaContrasena);
            }//if original = nueva contrasena
        }//if idUsuario <= size
    }//updateusuario

    public void addUsuario(usuarios usuario){
        lista.add(usuario);
    }

}//Class serviciosUsuario