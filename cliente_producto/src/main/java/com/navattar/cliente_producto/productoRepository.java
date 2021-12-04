package com.navattar.cliente_producto;

import com.navattar.cliente_producto.models.productos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface productoRepository extends JpaRepository <productos, Long> {
    @Query("SELECT p FROM productos p WHERE p.nombre=?1")
    Optional<productos> findByName(String name);

}//interface productoRepository
