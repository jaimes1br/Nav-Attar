package com.navattar.cliente_producto.filter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtFilter extends GenericFilterBean {

    @Override
    public void doFilter(ServletRequest request,
                         ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        HttpServletResponse httpServletResponse = (HttpServletResponse) response;

        String authHeader = httpServletRequest.getHeader("authorization"); //tomere el token

        //Este if va a detener que si el metodo de la consulta del POST,PUT,DELETE y GET se van
        //a detener, si no esta el token, en sesion entonces no puedo hacer nada

        if (    (httpServletRequest.getMethod().equals("POST")) ||
                (httpServletRequest.getMethod().equals("PUT"))||
                (httpServletRequest.getMethod().equals("DELETE"))||
                (httpServletRequest.getMethod().equals("GET")) ) {
            if  ( (authHeader== null ) || (! authHeader.startsWith("Bearer ")) ) {
                throw new ServletException("1. Invalid Token !");
            } // == null ! Bearer
            String token = authHeader.substring(7);
            try  {
                Claims claims = Jwts.parser().setSigningKey("Chingo-de-cheve-y-desmadre-No-pare-no-pare-no-pare-no-pare-NAVATTAR")
                        .parseClaimsJws(token).getBody();
                request.setAttribute( "claims", claims );
            }  catch ( SignatureException | MalformedJwtException e ) {
                throw new ServletException( "2. Invalid Token!" );
            }//catch
        }//POST - PUT - DELETE - GET
        chain.doFilter(httpServletRequest, httpServletResponse);
    }//doFilter

}//class JwFilter
