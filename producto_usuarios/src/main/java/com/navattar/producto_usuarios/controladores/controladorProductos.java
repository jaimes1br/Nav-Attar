package com.navattar.producto_usuarios.controladores;


import com.navattar.producto_usuarios.modelos.productos;
import com.navattar.producto_usuarios.serviciosProductos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
public class controladorProductos {
    private final serviciosProductos _serviciosProductos;

    @Autowired
    public controladorProductos(serviciosProductos _serviciosProductos) {
        this._serviciosProductos = _serviciosProductos;
    }//constructor


    @GetMapping
    public List<productos> getProductosT (){
        return _serviciosProductos.getProductosT();
    }//getProductosT

    @GetMapping(path = "{idProducto}")// /api/producto/1
    public productos getProducto(@PathVariable("idProducto") Long idProducto){
        return _serviciosProductos.getProducto(idProducto);
    }//getProducto

    @DeleteMapping(path = "{idProducto}")// /api/productos
    public void deleteProducto (@PathVariable("idProducto") Long idProducto){
        _serviciosProductos.deleteProducto(idProducto);
    }//deleteProdcuto

    @PutMapping(path = "{idProducto}")
    public void updateProducto  (@PathVariable("idProducto") Long idProducto,
                                @RequestParam(required = false) String nombreProducto,
                                @RequestParam(required = false) float nuevoPrecio,
                                @RequestParam(required = false) int nuevaMedida,
                                @RequestParam(required = false) String nuevaDescripcion,
                                @RequestParam(required = false) String nuevaImagen,
                                @RequestParam(required = false) int existenciaActual,
                                @RequestParam(required = false) int actCategoria_IDcategoria){
        _serviciosProductos.updateProducto(idProducto, nombreProducto, nuevoPrecio, nuevaMedida, nuevaDescripcion, nuevaImagen, existenciaActual, actCategoria_IDcategoria);
    }//updateProducto

    @PostMapping
    public void addProducto (@RequestBody productos producto){
        _serviciosProductos.addProducto(producto);
    }

}
