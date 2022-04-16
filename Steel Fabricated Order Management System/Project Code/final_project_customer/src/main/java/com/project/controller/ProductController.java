package com.project.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.dta.ProductInputDto;//////////////////////////////////////////////////M
import com.project.dta.ProductUpdateDto;
import com.project.etities.Category;

import com.project.etities.Product;
import com.project.etities.Review;
import com.project.etities.Staff;
import com.project.services.CategoryServices;
import com.project.services.ProductServices;

@CrossOrigin
@RestController()
@RequestMapping("/products")
public class ProductController {
	
	@Autowired
	ProductServices productService;
	
	@Autowired
	CategoryServices catService;
	
	@GetMapping("")
	public ResponseEntity<List<Product>> findAll(){
		List<Product> productList = productService.findAll();
		if(productList ==  null) return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(productList);
	} 
	
	@GetMapping("/{id}")
	public ResponseEntity<Product> findById(@PathVariable("id") int id){
		Product product = productService.findById(id);
	//	System.out.println(product);
		if(product == null) throw new RuntimeException("Customer not found");
		return ResponseEntity.ok(product);
	}
	
	@GetMapping("/bycategory/{id}")
	public ResponseEntity<List<Product>> findByCategory(@PathVariable("id") int cid)
	{
		Category cat=catService.findById(cid);
		List<Product> productList=cat.getProductList();
	    System.out.println(Arrays.toString(productList.toArray()));
		if(productList==null)
			throw new RuntimeException("No product found");
		System.out.println(productList);
		return ResponseEntity.ok(productList);
	}
	@GetMapping("/price/{min}/{max}")
	public ResponseEntity<List<Product>> findByPriceRange(@PathVariable("id") double minPrice, @PathVariable("id") double maxPrice)
	{
	
		List<Product> productList=productService.findByPriceBetween(minPrice, maxPrice);
		if(productList==null)
			throw new RuntimeException("No product found");
		return ResponseEntity.ok(productList);
		
	}
	//comman controller
	@GetMapping("/reviews/{id}")
	public ResponseEntity<List<Review>> getReviews(@PathVariable("id") int pid)
	{
		Product product=productService.findById(pid);
		List<Review> reviewList=product.getReviews();
		if(reviewList==null)
			throw new RuntimeException("No reviews found");
		return ResponseEntity.ok(reviewList);
	}
	
	@PostMapping("/addreview")
	public ResponseEntity<Product> addReview(@RequestBody Review review ){
		System.out.println(review);
		Product product  = productService.findById(review.getpId());
		product.addReview(review);
		return ResponseEntity.ok(product);
	}
	
	
	@PostMapping("")
	public ResponseEntity<?> save(ProductInputDto productDto) {
		System.out.println(productDto);
		Product product = ProductInputDto.toEntity(productDto);
		System.out.println(product);
		product = productService.saveProduct(product, productDto.getThumbnail());
		return ResponseEntity.ok(product);
	}

	@GetMapping("/averagestar/{pid}")
    public Double getAverageStar(@PathVariable("pid") int pid)
    {
	        return productService.getAverageStar(pid);	
    }
	

	 @DeleteMapping("/delete/{p_id}") 
	 public ResponseEntity<?>  findById1(@PathVariable("p_id") int p_id){
		 Product product = productService.findById(p_id); 
		 productService.delete(product);
		 return ResponseEntity.ok("product  deleted successfully!");

	 }	 
		
	@PutMapping("/update/{pid}")
	public ResponseEntity<?> update( @RequestBody ProductUpdateDto proDto, @PathVariable("pid") int pid)
	{
		Product product=productService.findById(pid);
		product.setQty(ProductUpdateDto.getQty());
		product.setPrice(ProductUpdateDto.getPrice());
	    productService.save(product);
	    return ResponseEntity.ok(product);
	
	}
	


		 
		
	 
	}
	

	

