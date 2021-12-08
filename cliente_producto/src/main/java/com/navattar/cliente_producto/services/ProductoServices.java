package com.navattar.cliente_producto.services;

import com.navattar.cliente_producto.models.productos;
import com.navattar.cliente_producto.interfaces.productoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class ProductoServices {
    private final productoRepository _productoRepository;

    @Autowired
    public ProductoServices(productoRepository _productoRepository) {
        this._productoRepository = _productoRepository;
    }//constructor

    public List<productos> getAllProductos(){
        return _productoRepository.findAll();
    }//getAllProductos


    public productos getProducto(Long IDproducto){
        return _productoRepository.findById(IDproducto).orElseThrow(()-> new IllegalStateException("El producto con el id [" + IDproducto + "] no existe."));

    }//getProducto

    public void deleteProducto(Long IDproducto){
        if (_productoRepository.existsById(IDproducto)) {
            _productoRepository.deleteById(IDproducto);
            }//if
        throw new IllegalStateException("El producto con el id ingresado no existe.");

    }//deleteProducto

    public void addProducto(productos producto){
        Optional<productos> prodByName = _productoRepository.findByName(producto.getNombre());
        if(prodByName.isPresent()){
            throw new IllegalStateException("El producto con el nombre ["+producto.getNombre()+"] ya existe.");
        }//if
        _productoRepository.save(producto);

    }//addProducto

@Transactional
    public void updateProductos(Long IDproducto, String nombre, Double precio, Long medida, String descripcion, String imagen, Long existencia, Long Categoria_IDcategoria) {
    productos producto = _productoRepository.findById(IDproducto).orElseThrow(() -> new IllegalStateException("El producto con ese id no existe."));
        if (nombre != null)
            if ((!nombre.isEmpty()) && !nombre.equals(producto.getNombre())) {
                producto.setNombre(nombre);
        }//nombre
        if ((precio > 0) && (!precio.equals(producto.getPrecio()))){
            producto.setPrecio(precio);
        }//precio
        if ((medida != null) && (!medida.equals(producto.getMedida()))){
            producto.setMedida(medida);
        }//medida
        if ((descripcion != null) && (!descripcion.equals(producto.getDescripcion()))) {
            producto.setDescripcion(descripcion);
        }//descripcion
        if ((imagen !=null) && (!imagen.equals(producto.getImagen()))){
            producto.setImagen(imagen);
        }//imagen
        if ((existencia > 0) && (!existencia.equals(producto.getExistencia()))){
            producto.setExistencia(existencia);
        }//existencia
        if ((Categoria_IDcategoria > 0) && (!Categoria_IDcategoria.equals(producto.getCategoria_IDcategoria()))){
            producto.setCategoria_IDcategoria(Categoria_IDcategoria);
        }//Categoria_IDcategoria


    }//updateProductos

}//class ProductoServices
