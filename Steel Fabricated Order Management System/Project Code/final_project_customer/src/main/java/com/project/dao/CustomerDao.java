package com.project.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.etities.Category;
import com.project.etities.Customer;

public interface CustomerDao extends JpaRepository<Customer, Integer>{
    
	Customer save(Customer customer);
	Customer findById(int id);
	List<Customer> findAll();
	Customer findByMail(String email);
}
