package com.project.controller;

import java.util.HashMap;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.etities.Category;

import com.project.etities.Product;
import com.project.etities.Customer;

import com.project.etities.Staff;
import com.project.model.Credential;
import com.project.services.StaffServices;


//@CrossOrigin()
@CrossOrigin
@RestController
@RequestMapping("/staff")
public class StaffController {
	
	@Autowired
	private StaffServices staffService;
	
	@PostMapping("/login")
	public ResponseEntity<HashMap<String, Object>> authenticate(@RequestBody Credential cred){
		System.out.println(cred.getMail()+ cred.getPassword());
		Staff staff = staffService.authenticate(cred.getMail(), cred.getPassword());
		if (staff == null) throw new RuntimeException("Wrong email id or password");
		HashMap<String, Object> ht = new HashMap<String, Object>();
		ht.put("status", new String("success"));
		ht.put("data", staff);
		return ResponseEntity.ok(ht);
	}

	
	
	
	

	@PostMapping("")
	public ResponseEntity<Staff> save(@RequestBody Staff stf){
		Staff newStaff = staffService.save(stf);
		if(newStaff == null) throw new RuntimeException("Something went wrong");
		return ResponseEntity.ok(newStaff);
	}

	
	
	
	@GetMapping("")
	public ResponseEntity<List<Staff>> findAll(){

		List<Staff> staffList = staffService.findAll();
		if(staffList ==  null) return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(staffList);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteById(@PathVariable("id") int id){
		staffService.deleteById(id);
		return ResponseEntity.ok("Data deleted successfully!");
	}
	
	
	/*
	 * @GetMapping("/{role}") public List<Staff> findByRole(@PathVariable("role")
	 * String role){ List<Staff> staff = staffService.findByRole(role); return
	 * staff; }
	 */
	

	@GetMapping("/admin")
	public ResponseEntity<List<Staff>> findByAdmin() {
		 List<Staff> staff = staffService.findByRole("admin");
		 if(staff ==  null) return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(staff);
	}
	
	@GetMapping("/employee")
	public ResponseEntity<List<Staff>> findByEmployee() {
		 List<Staff> staff = staffService.findByRole("employee");
		 if(staff ==  null) return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(staff);
	}
	
	@GetMapping("/manager")
	public ResponseEntity<List<Staff>> findByManager() {
		 List<Staff> staff = staffService.findByRole("manager");
		 if(staff ==  null) return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(staff);
	}

		
//	
//	@GetMapping("/manager")
//	public List<Staff> findByManager() {
//		 List<Staff> staff = staffService.findByRole("manager");
//		return staff;
//	}
//	



}
/////////////////////////////////////////////////////////////////////////M
//delete staff
/*
@GetMapping("/mailof/{mail}") public ResponseEntity<?>  deleteByMail(@PathVariable("mail") String mail){
	Staff staff = staffService.findByMail(mail); //System.out.println(staff); 
	staffService.delete(staff);
	 return ResponseEntity.ok("Data deleted successfully!");
	*/ 
	// return ResponseEntity.ok(category);






// view customer











/*
 * @PostMapping("/staff/add") public ResponseEntity<?>
 * addStaffAsManager(@RequestBody Staff staff){ Staff newSatff =
 * staffService.addStaff(staff); if(newSatff!=null) return
 * ResponseEntity.ok("data added successfully!"); return ResponseEntity
 * .status(HttpStatus.FORBIDDEN) .body("Error Message"); }
 */

    			 




// view customer











/*
 * @PostMapping("/staff/add") public ResponseEntity<?>
 * addStaffAsManager(@RequestBody Staff staff){ Staff newSatff =
 * staffService.addStaff(staff); if(newSatff!=null) return
 * ResponseEntity.ok("data added successfully!"); return ResponseEntity
 * .status(HttpStatus.FORBIDDEN) .body("Error Message"); }
 */

    			 




