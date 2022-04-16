package com.project.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dao.StaffDao;
import com.project.etities.Category;
import com.project.etities.Customer;
import com.project.etities.Staff;

@Transactional
@Service
public class StaffServicesImpl implements StaffServices {
    @Autowired
	private StaffDao staffDao;
	
	@Override
	public Staff save(Staff staff) {
		
		return staffDao.save(staff);
	}

	@Override
	public Staff findById(int id) {
		
		return staffDao.findById(id);
		
	}
	@Override
	public Staff authenticate(String mail, String password) {
	Staff staff=staffDao.findByMail(mail);
	

	if(staff!=null&&staff.getPassword().equals(password))
		return staff ;
	return null;
	}
	@Override
	public Staff addStaff(Staff satff) {
		
		return staffDao.save(satff);
	}

	//delete by mail
	 @Override public Staff findByMail(String mail) {
		 Staff staff = staffDao.findByMail(mail);
		 if(mail!=null)
			return staff;
		 return null;
	 
}
	 @Override
	public void delete(Staff stf) {
		 staffDao.delete(stf);
		
	}
	 
	
	@Override
	public List<Staff> findByRole(String role) {
		return staffDao.findByRole(role);
	}
			
		

	@Override
	public List<Staff> findAll() {
	
		return staffDao.findAll();
	}

	@Override
	public void deleteById(int id) {
		staffDao.deleteById(id);
		
	}

}
