package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.dao.CategoryDao;
import com.project.dta.CategoryDto;
import com.project.etities.Category;

import com.project.services.CategoryServices;

@CrossOrigin
@RequestMapping("/categories")
@RestController()
public class CategoryController {

	
	@Autowired
	CategoryServices catService;
	
	@GetMapping("")
	public ResponseEntity<List<Category>> getCategories(){
		List<Category> categoryList = catService.findAll();
		if(categoryList ==  null) return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(categoryList);
	} 
	
	@PostMapping("")
	public ResponseEntity<?> save(@RequestBody Category category) {
		Category cat = catService.saveCategory(category);
		System.out.println(cat.toString());
		return ResponseEntity.ok(cat);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getById(@PathVariable("id") int id){
		Category category = catService.findById(id);
		System.out.println(category);
		return ResponseEntity.ok(category);
		
	}
	
	 @GetMapping("/nameof/{name}") public ResponseEntity<?>  deleteByName(@PathVariable("name") String name){
		 Category category = catService.findByName(name); 
		 catService.delete(category);
		 return ResponseEntity.ok("Data deleted successfully!");

		 
		

	}
	 
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteById(@PathVariable("id") int id){
		catService.deleteById(id);
		return ResponseEntity.ok("Data deleted successfully!");
	}
	
	
}
