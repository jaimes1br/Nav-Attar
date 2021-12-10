package com.navattar.cliente_producto;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.navattar.cliente_producto.models.artesano;
import com.navattar.cliente_producto.models.cliente;
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
		this.mockMvc.perform(get("/api/productos"))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect(content().string(containsString(".jpg")));

		this.mockMvc.perform(get("/api/productos/1"))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect(content().string(containsString("Batman")));

	}//TestGetProducto


//*******************************FINALIZA PRUEBAS PRODUCTO ******************************

	//*******************************PRUEBAS ARTESANO ******************************

	@Test
	public void TestGetArtesano() throws Exception{
		this.mockMvc.perform(get("/api/artesano"))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect(content().string(containsString(".com")));

		this.mockMvc.perform(get("/api/artesano/1"))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect(content().string(containsString("paola.rod.quiroz@gmail.com")));

	}//TestGetArtesano


	@Test
	public void shouldReturn500ErrorArtesano() throws Exception{
		this.mockMvc.perform(get("/api/artesano/8")).
				andDo(print()).
				andExpect(status().is5xxServerError());
	}//shouldReturn500ErrorArtesano

	@Test
	public void TestPOSTArtesano() throws Exception{
		artesano _artesano = new artesano();
		_artesano.setNombre("Eika");
		_artesano.setCorreo_electronico("eflores@idr.com");
		_artesano.setTelefono("5588996644");
		_artesano.setContrasena("Pa$$w0rd");
		this.mockMvc.perform(post("/api/artesano/").contentType(MediaType.APPLICATION_JSON).content(asJSONString(_artesano))).andExpect(status().isOk());
	}//TestPOSTArtesano

	@Test
	public void TestDeleteArtesano () throws Exception{
		this.mockMvc.perform( delete("/api/artesano/6")).andDo(print()).andExpect(status().isOk());
	}//TestDeleteArtesano

	@Test
	public void TestPUTArtesano () throws Exception {
		artesano _artesano = new artesano();
		this.mockMvc.perform(put("/api/artesano/3?contrasena=Leonora7894!&nuevaContrasena=Leonora7895!")).andDo(print()).andExpect(status().isOk());
	}//TestPUTArtesano


	//*******************************FINALIZA PRUEBAS ARTESANO ******************************

	public static String asJSONString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}//asJSONString


}//class ClienteProductoApplicationTests
