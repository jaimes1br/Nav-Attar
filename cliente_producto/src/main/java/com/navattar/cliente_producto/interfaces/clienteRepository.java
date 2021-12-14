package com.navattar.cliente_producto.interfaces;

import com.navattar.cliente_producto.models.cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface clienteRepository extends JpaRepository<cliente, Long> {
    @Query ("SELECT c FROM cliente c WHERE c.nombre=?1")
    Optional<cliente> findByName(String name);

    @Query("SELECT c FROM cliente c WHERE c.correo_electronico=?1")
    Optional<cliente> findByEmail(String email);
}
