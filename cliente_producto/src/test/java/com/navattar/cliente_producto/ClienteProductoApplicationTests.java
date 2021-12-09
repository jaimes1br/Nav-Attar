package com.navattar.cliente_producto;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.navattar.cliente_producto.models.artesano;
import com.navattar.cliente_producto.models.cliente;
import com.navattar.cliente_producto.models.productos;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class ClienteProductoApplicationTests {

	//Añadimos dependencias
	//comentamos los beans en la clase main
	//creamos un nuevo Set setClearContrasena (para evitar que encripte dos veces)


	@Autowired
	private MockMvc mockMvc;

	//@Test
	//void contextLoads() {
	//}

	//*******************************PRUEBAS CLIENTE ******************************
	@Test
	public void TestGetCliente() throws Exception{
		this.mockMvc.perform(get("/api/clientes/"))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect(content().string(containsString(".com")));

		this.mockMvc.perform(get("/api/clientes/1"))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect(content().string(containsString("brandon.jaimes@gmail.com")));

	}//TestGetCliente


	@Test
	public void shouldReturn500ErrorCliente() throws Exception{
		this.mockMvc.perform(get("/api/clientes/8")).
				andDo(print()).
				andExpect(status().is5xxServerError());
	}//shouldReturn500ErrorCliente

	@Test
	public void TestPOSTCliente() throws Exception{
		cliente _cliente = new cliente();
		_cliente.setNombre("Eika");
		_cliente.setCorreo_electronico("eflores@idr.com");
		_cliente.setContrasena("Pa$$w0rd");
		_cliente.setTelefono("5588996644");
		this.mockMvc.perform(post("/api/clientes/").contentType(MediaType.APPLICATION_JSON).content(asJSONString(_cliente))).andExpect(status().isOk());
	}//TestPOSTCliente

	@Test
	public void TestDeleteCliente () throws Exception{
		this.mockMvc.perform( delete("/api/clientes/6")).andDo(print()).andExpect(status().isOk());
	}//TestDeleteCliente

	@Test
	public void TestPUTCliente () throws Exception {
		cliente _cliente = new cliente();
		this.mockMvc.perform(put("/api/clientes/3?contrasena=Leonora7894!&nuevaContrasena=Leonora7895!")).andDo(print()).andExpect(status().isOk());
	}//TestPUTCliente

//*******************************FINALIZA PRUEBAS CLIENTE ******************************

	//*******************************PRUEBAS PRODUCTO ******************************

	@Test
	public void TestGETProducto() throws Exception{
//		this.mockMvc.perform(get("/api/productos"))
//				.andDo(print())
//				.andExpect(status().isOk())
//				.andExpect(content().json(asJSONString(getAllProductos)));

		this.mockMvc.perform(get("/api/productos/1"))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect(content().string(containsString("superhéroe")));

	}//TestGetProducto

	@Test
	public void shouldReturn500ErrorProducto() throws Exception{
		this.mockMvc.perform(get("/api/productos/8")).
				andDo(print()).
				andExpect(status().is5xxServerError());
	}//shouldReturn500ErrorProducto

	@Test
	public void TestPOSTProducto() throws Exception{
		productos _productos = new productos();
		_productos.setNombre("Cosita bonita");
		_productos.setPrecio(500.0);
		_productos.setMedida(25L);
		_productos.setDescripcion("Esta es una cosita bonita que puedes comprar");
		_productos.setImagen("Batman.jpg");
		_productos.setCategoria("Caricaturas");
		this.mockMvc.perform(post("/api/productos/")
				.contentType(MediaType.APPLICATION_JSON)
				.content(asJSONString(_productos))).andExpect(status().isOk());
	}//TestPOSTProducto

	@Test
	public void TestDeleteProducto () throws Exception{
		this.mockMvc.perform( delete("/api/productos/6")).andDo(print()).andExpect(status().isOk());
	}//TestDeleteProducto

	@Test
	public void TestPUTProducto () throws Exception {
		cliente _cliente = new cliente();
		this.mockMvc.perform(put("/api/productos/")).andDo(print()).andExpect(status().isOk());
	}//TestPUTProducto


//*******************************FINALIZA PRUEBAS PRODUCTO ******************************

	//*******************************PRUEBAS ARTESANO ******************************

	@Test
	public void TestGetArtesano() throws Exception{
		this.mockMvc.perform(get("/api/artesano/"))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect(content().string(containsString(".com")));

		this.mockMvc.perform(get("/api/artesano/1"))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect(content().string(containsString("paola.rod.quiroz@gmail.com")));

	}//TestGetCliente


	@Test
	public void shouldReturn500ErrorArtesano() throws Exception{
		this.mockMvc.perform(get("/api/artesano/8")).
				andDo(print()).
				andExpect(status().is4xxClientError());
	}//shouldReturn500ErrorCliente

	@Test
	public void TestPOSTArtesano() throws Exception{
		artesano _artesano = new artesano();
		_artesano.setNombre("Juan Carlos Valencia");
		_artesano.setCorreo_electronico("jc.valencia@gmail.com");
		_artesano.setContrasena("Leonora7894!");
		_artesano.setTelefono("5511223344");
		this.mockMvc.perform(post("/api/artesano/").contentType(MediaType.APPLICATION_JSON).
				content(asJSONString(_artesano))).andExpect(status().isOk());
	}//TestPOSTCliente

	@Test
	public void TestDeleteArtesano () throws Exception{
		this.mockMvc.perform( delete("/api/artesano/6")).andDo(print()).andExpect(status().isOk());
	}//TestDeleteCliente

	@Test
	public void TestPUTArtesano () throws Exception {
		//artesano _artesano = new artesano();
		this.mockMvc.perform(put("/api/artesano/1?contrasena=Leonora7894!&nuevaContrasena=ErikDPrueba!")).andDo(print()).andExpect(status().isOk());
	}//TestPUTCliente

	//*******************************FINALIZA PRUEBAS ARTESANO ******************************

	public static String asJSONString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}//asJSONString


}//class ClienteProductoApplicationTests
