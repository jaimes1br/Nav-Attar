package com.navattar.cliente_producto.controller;

import com.navattar.cliente_producto.models.productos;
import com.navattar.cliente_producto.services.ProductoServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.xml.transform.sax.SAXResult;
import java.util.List;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin("*")
public class productoController {

private final ProductoServices _productoServices;

    @Autowired
    public productoController(ProductoServices _productoServices) {
        this._productoServices = _productoServices;
    }//constructor

    @GetMapping
    public List<productos> getAllProductos(){return _productoServices.getAllProductos();}//getAllProductos

    @GetMapping(path="{id}")
    public productos getProducto(@PathVariable("id") Long id){return _productoServices.getProducto(id);}//getProducto

    @GetMapping("/cat")
    public List<productos> getProductosCategoria(@RequestParam(required = true) String categoria){

        return _productoServices.getProductosCategoria(categoria);}//getAllProductos


    @DeleteMapping(path = "{id}")
    public void deleteProducto(@PathVariable("id") Long id){
        _productoServices.deleteProducto(id);
    }//deleteProductos

    @PostMapping
    public void addProducto(@RequestBody productos producto){
        _productoServices.addProducto(producto);
    }//addProductos

    @PutMapping(path ="{IDproducto}")
    public void updateProducto(@PathVariable ("IDproducto") Long IDproducto,
                               @RequestParam (required = false) String nombre,
                               @RequestParam (required = false) Double precio,
                               @RequestParam (required = false) Long medida,
                               @RequestParam (required = false) String descripcion,
                               @RequestParam (required = false) String imagen,
                               @RequestParam (required = false) String categoria)
    {
        _productoServices.updateProductos(IDproducto, nombre, precio, medida, descripcion, imagen,categoria);
    }//updateProducto

}//class productoController
