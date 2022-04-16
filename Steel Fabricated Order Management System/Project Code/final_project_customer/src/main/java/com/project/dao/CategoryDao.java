package com.project.dao;


import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.etities.Category;

@Repository
public interface CategoryDao extends JpaRepository<Category, Integer>{
	
	
	//Category findById(int id);
	List<Category> findAll();
	Category save(Category category);
	Category findByName(String name);
	void deleteById(int id);
	}

