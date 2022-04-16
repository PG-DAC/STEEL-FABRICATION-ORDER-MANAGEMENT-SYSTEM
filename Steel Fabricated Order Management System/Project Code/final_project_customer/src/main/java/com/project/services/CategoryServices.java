package com.project.services;


import java.util.List;

import com.project.etities.Category;
import com.project.etities.Order;

public interface CategoryServices {
	Category save(Category category);
	Category findById(int id);
	List<Category> findAll();
	Category saveCategory(Category category);
	Category findByName(String name);
	void delete(Category catg);
	void deleteById(int id);
	
}
