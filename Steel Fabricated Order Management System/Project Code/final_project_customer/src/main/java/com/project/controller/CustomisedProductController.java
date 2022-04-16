package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.dta.CustomisedProductInputDto;
import com.project.dta.ProductInputDto;
import com.project.etities.CustomisedProduct;
import com.project.etities.Product;
import com.project.services.CustomerServices;
import com.project.services.CustomisedProductServices;

@CrossOrigin
@RestController()
@RequestMapping("/custproducts")
public class CustomisedProductController {
	
	@Autowired
	CustomisedProductServices custProductService;
	@Autowired 
	CustomerServices custServices;
	
	
	@GetMapping("")
	public ResponseEntity<List<CustomisedProduct>> findAll(){
		List<CustomisedProduct> productList = custProductService.findAll();
		if(productList ==  null) return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(productList);
	} 
	
	@GetMapping("/{id}")
	public ResponseEntity<CustomisedProduct> findById(@PathVariable("id") int id){
		CustomisedProduct product = custProductService.findById(id);
	//	System.out.println(product);
		if(product == null) throw new RuntimeException("Customer not found");
		return ResponseEntity.ok(product);
	}
	
	@PostMapping("")
	public ResponseEntity<?> save(CustomisedProductInputDto custProductDto) {
		System.out.println(custProductDto);
		CustomisedProduct product = CustomisedProductInputDto.toEntity(custProductDto);
		product.setCust(custServices.findById(custProductDto.getCid()   )  );
		System.out.println(product);
		product = custProductService.saveProduct(product, custProductDto.getThumbnail());
		return ResponseEntity.ok(product);
	}

}
