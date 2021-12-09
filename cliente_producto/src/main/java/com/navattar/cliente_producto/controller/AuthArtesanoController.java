package com.navattar.cliente_producto.controller;


import com.navattar.cliente_producto.interfaces.artesanoRepository;
import com.navattar.cliente_producto.models.LoginData;
import com.navattar.cliente_producto.models.Token;
import com.navattar.cliente_producto.models.artesano;
import com.navattar.cliente_producto.util.SHAUtil;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import java.util.Calendar;
import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("/api/login/artesano")
@CrossOrigin("*")
public class AuthArtesanoController {
    private final artesanoRepository _artesanoRepository;


    public AuthArtesanoController(artesanoRepository artesanoRepository) {
        this._artesanoRepository = artesanoRepository;
    }

    @PostMapping
    public Token login(@RequestBody LoginData data) throws ServletException {
        Optional<artesano> userByEmail = _artesanoRepository.findByEmail(data.getEmail());
        if(userByEmail.isPresent()){
            if(SHAUtil.verifyHash(data.getPassword(), userByEmail.get().getContrasena())){
                return new Token(generateToken(data.getEmail()));
            }//ifVerifyHash
        }//if isPresent

        throw new ServletException("Invalid login. Please check your credentials.");

    }//login

    private String generateToken( String email )  {
        Calendar calendar = Calendar.getInstance();
        calendar.add( Calendar.HOUR,  10);
        String secret = "Chingo-de-cheve-y-desmadre-No-pare-no-pare-no-pare-no-pare-NAVATTAR";

        return Jwts.builder().setSubject( email ).claim( "role", "user" )
                .setIssuedAt( new Date() ).setExpiration(calendar.getTime() )
                .signWith( SignatureAlgorithm.HS256, secret ).compact();
    }//generateToken
}
