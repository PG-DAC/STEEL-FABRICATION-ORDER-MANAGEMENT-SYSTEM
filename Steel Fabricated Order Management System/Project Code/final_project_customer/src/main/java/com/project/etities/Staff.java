package com.project.etities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.beans.factory.annotation.Autowired;

@Entity
@Table(name="staff")
public class Staff {
	
	//one to many relation
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="staff_id")
	private int id;
	
	private String firstName;
	private String lastName;
	private String phone;
	private String mail;
	private String password;
	private String role;
	
	@Column(name = "created_timestamp", insertable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP) 
	private Date created_timestamp;
	
	 public int getStaff_id() {
		return id;
	}
	public void setStaff_id(int staff_id) {
		this.id = staff_id;
		System.out.print("staff is in setter method    ="+this.id);
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public Date getCreated_timestamp() {
		return created_timestamp;
	}
	public void setCreated_timestamp(Date created_timestamp) {
		this.created_timestamp = created_timestamp;
	}
	public Staff( String firstName, String lastName, String phone, String mail, String password,
			String role) {
	
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.mail = mail;
		this.password = password;
		this.role = role;
		
	}
	public Staff() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Staff [staff_id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", phone="
				+ phone + ", mail=" + mail + ", password=" + password + ", role=" + role + ", created_timestamp="
				+ created_timestamp + "]";
	}
	
	

}


