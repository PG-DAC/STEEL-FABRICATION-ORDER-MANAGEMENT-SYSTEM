package com.project.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.etities.Category;
import com.project.etities.Customer;
import com.project.etities.Staff;


public interface StaffDao extends JpaRepository<Staff, Integer>{
	
	
	Staff save(Staff staff);
	Staff findById(int id);
	Staff findByMail(String mail);
	List<Staff> findByRole(String role);///////////////////////////////////////////////////M
	

}
