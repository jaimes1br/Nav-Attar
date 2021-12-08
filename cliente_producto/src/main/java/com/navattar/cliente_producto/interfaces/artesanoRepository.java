package com.navattar.cliente_producto.interfaces;

import com.navattar.cliente_producto.models.artesano;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface artesanoRepository extends JpaRepository<artesano, Long> {
    @Query ("SELECT a FROM artesano a WHERE a.nombre=?1")
    Optional<artesano> findByName(String name);

    @Query("SELECT a FROM artesano a WHERE a.correo_electronico=?1")
    Optional<artesano> findByEmail(String email);
}
