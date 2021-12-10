package com.navattar.cliente_producto;

import com.navattar.cliente_producto.models.cliente;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//pao
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.hamcrest.Matchers.containsString;


@SpringBootTest
@AutoConfigureMockMvc
class ClienteProductoApplicationTests {

	@Autowired
	private MockMvc mockMvc;
	/*
    @Test
    void contextLoads() {
    }*/

	//--------------------Pruebas Cliente------------------

	@Test
	public void TestGet() throws Exception{


			this.mockMvc.perform(get("/api/clientes"))
					.andDo(print())
					.andExpect(status().isOk())
					.andExpect(content().string(containsString("@gmail.com")));

			this.mockMvc.perform(get("/api/clientes/1"))
					.andDo(print())
					.andExpect(status().isOk())
					.andExpect(content().string(containsString("brandon.jaimes@gmail.com")));


		}//TestGet


	//@Test
	 public void TestDelete() throws Exception{
		this.mockMvc.perform(delete("/api/clientes/4")).andDo(print())
				.andExpect(status().isOk());
	}


	//@Test
	public void TestPOST() throws Exception{
		cliente _cliente = new cliente();
		_cliente.setCorreo_electronico("ilan@gmail.com");
		_cliente.setClearContrasena("Pa$$w0rd");
		this.mockMvc.perform(post("/api/users/")
				.contentType(MediaType.APPLICATION_JSON).
				content(asJSONString(_cliente)));
	} //TestPOST

	//@Test
	public void TestPut() throws Exception{

		this.mockMvc.perform(put("/api/users/1?currentPassword=juanitovive&password=holasoyjuanito")).andDo(print())
				.andExpect(status().isOk());

	}

	public static String asJSONString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}//asJSONString







}