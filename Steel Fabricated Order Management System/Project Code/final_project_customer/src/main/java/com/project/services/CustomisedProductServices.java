package com.project.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.project.etities.CustomisedProduct;
import com.project.etities.Product;


public interface CustomisedProductServices {
	
	CustomisedProduct save(CustomisedProduct product);

	List<CustomisedProduct> findAll();
	
	CustomisedProduct saveProduct(CustomisedProduct product, MultipartFile thumbnail);
	
	CustomisedProduct findById(int id);

}
