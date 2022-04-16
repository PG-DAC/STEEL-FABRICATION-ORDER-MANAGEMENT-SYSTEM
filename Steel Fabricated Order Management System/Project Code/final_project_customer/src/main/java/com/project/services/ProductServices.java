package com.project.services;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import com.project.etities.Category;
import com.project.etities.Product;
import com.project.etities.Staff;

public interface ProductServices {
	Product save(Product product);

	List<Product> findAll();
	
	Product findById(int id);
	
	List<Product> findByPriceBetween(double minPrice, double maxPrice);

	Product saveProduct(Product product, MultipartFile thumbnail);

	Double getAverageStar(int pid);


	void delete(Product product);
	 

	
}
