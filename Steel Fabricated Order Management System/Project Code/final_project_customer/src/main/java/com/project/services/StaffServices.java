package com.project.services;

import java.util.List;


import com.project.etities.Category;
import com.project.etities.Customer;
import com.project.etities.Staff;

public interface StaffServices {
	Staff save(Staff staff);
	Staff findById(int id);
	
	
    
	void deleteById(int id);

	Staff authenticate(String mail,String password);
	Staff addStaff(Staff satff);
	List<Staff> findAll();
	List<Staff>  findByRole(String role);
	
	

	Staff findByMail(String mail);
	void delete(Staff stf);



}
