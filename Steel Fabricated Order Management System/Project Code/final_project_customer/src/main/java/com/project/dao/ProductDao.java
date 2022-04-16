package com.project.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.etities.Product;
import com.project.etities.Staff;

public interface ProductDao extends JpaRepository<Product, Integer>{
	Product save(Product product);
	
	List<Product> findByPriceBetween(double minPrice, double maxPrice);
	/////////////////////////////////////////////////////////////M
	//Product findById1(int p_id);
	
	
}
