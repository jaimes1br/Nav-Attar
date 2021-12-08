package com.navattar.cliente_producto.interfaces;

import com.navattar.cliente_producto.models.productos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface productoRepository extends JpaRepository <productos, Long> {
    @Query("SELECT p FROM productos p WHERE p.nombre=?1")
    Optional<productos> findByName(String name);

    @Query("SELECT p FROM productos p WHERE p.categoria=?1")
    List<productos> findByCategory(String category);
}//interface productoRepository
