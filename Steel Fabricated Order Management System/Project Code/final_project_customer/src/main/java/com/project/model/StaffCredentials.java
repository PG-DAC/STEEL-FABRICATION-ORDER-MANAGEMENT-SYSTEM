package com.project.model;

public class StaffCredentials {
private String mail;
private String password;

private String role;///////////////////////////////////////////M

public String getRole() {
	return role;
}
public void setRole(String role) {
	this.role = role;
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
public StaffCredentials() {
	super();
	// TODO Auto-generated constructor stub
}
public StaffCredentials(String mail, String password, String role) {
	super();
	this.mail = mail;
	this.password = password;
	this.role= role;
	
}


}
