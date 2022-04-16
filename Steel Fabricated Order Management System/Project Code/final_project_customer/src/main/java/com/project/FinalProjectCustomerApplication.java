package com.project;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Id;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.project.etities.Category;
import com.project.etities.Customer;
import com.project.etities.Order;
import com.project.etities.Product;
import com.project.etities.Review;
import com.project.etities.Staff;
import com.project.services.CategoryServicesImpl;
import com.project.services.CustomerServicesImpl;
import com.project.services.ProductServicesImpl;
import com.project.services.StaffServicesImpl;

@SpringBootApplication
public class FinalProjectCustomerApplication {//implements CommandLineRunner
	
	@Autowired
	private CategoryServicesImpl catService;
	
	@Autowired
	private ProductServicesImpl proService;
	
	@Autowired 
	private CustomerServicesImpl customerService;
	
	@Autowired
	private StaffServicesImpl staffServices;
	public static void main(String[] args) {
		SpringApplication.run(FinalProjectCustomerApplication.class, args);
	}
	
	//@Override
	//public void run(String... args) throws Exception {
	//	Category cat = new Category("Utility", " ");
	//	System.out.println(catService.save(cat));
	//	Product product = new Product("Table",550, null, " 3 foots", 10, 1);
	//	System.out.println(proService.save(product));
	//	Category cat = catService.findById(1);
	//	List<Product> product = cat.getProductList();
	//	System.out.println(product);
		
	//	Customer cust=new Customer("Nikita", "Patil", "Maharashtra", "Shahada", "SitaRam Road", "425409", "9421535543", "nikitapatil@gmail.com", null, "nikita123", 1500);
	//	customerService.save(cust);
//		
//		System.out.println(customerService.findById(1));
		
//		
//		 Staff staff=new Staff("Milind","Ghumare","9552477431","milind@gmail.com","acb123",null);
//		 staffServices.save(staff);
//		 System.out.println(staffServices.findById(1));
		 
	//	List<Order> list = customerService.getOrders(2);
		 
	//	for (Order order : list) {
	//		System.out.println(order);
	//	}
		
//		Customer cust=customerService.findById(1);
//		System.out.println(customerService.findById(1));
//		List<Review> reviewList=cust.getReviews();
//	    reviewList.forEach(System.out::println);   
//		
//		
//		Product product=proService.findById(10);
//		System.out.println(proService.findById(10));
//		List<Review> reviewList1 = product.getReviews();
//	    reviewList1.forEach(System.out::println);
	   
	
//	}

}
