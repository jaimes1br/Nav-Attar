package com.navattar.cliente_producto;

import com.fasterxml.jackson.databind.ObjectMapper;
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
//

	@Test
	public void TestGet() throws Exception{
		this.mockMvc.perform(get("/api/clientes/"))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect(content().string(containsString(".com")));

		this.mockMvc.perform(get("/api/clientes/1"))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect(content().string(containsString("brandon.jaimes@gmail.com")));

	}//TestGet


	@Test
	public void shouldReturn500Error() throws Exception{
		this.mockMvc.perform(get("/api/clientes/8")).
				andDo(print()).
				andExpect(status().is5xxServerError());
	}//shouldReturn500Error

	@Test
	public void TestPOST() throws Exception{
		cliente _cliente = new cliente();
		_cliente.setNombre("Eika");
		_cliente.setCorreo_electronico("eflores@idr.com");
		_cliente.setContrasena("Pa$$w0rd");
		_cliente.setTelefono("5588996644");
		this.mockMvc.perform(post("/api/clientes/").contentType(MediaType.APPLICATION_JSON).content(asJSONString(_cliente))).andExpect(status().isOk());
	}//TestPOST

	@Test
	public void TestDelete() throws Exception{
		this.mockMvc.perform( delete("/api/clientes/6")).andDo(print()).andExpect(status().isOk());
	}//TestDelete

	@Test
	public void TestPUT () throws Exception {
		cliente _cliente = new cliente();
		this.mockMvc.perform(put("/api/clientes/3?contrasena=Leonora7894!&nuevaContrasena=Leonora7895!")).andDo(print()).andExpect(status().isOk());
	}//TestPUT

	public static String asJSONString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}//asJSONString

}//class ClienteProductoApplicationTests
