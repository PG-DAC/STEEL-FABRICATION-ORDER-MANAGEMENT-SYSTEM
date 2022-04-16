package com.project.model;

public class Credential {
	private String mail;
	private String password;
	
	
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
	public Credential() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Credential(String mail, String password) {
		this.mail = mail;
		this.password = password;
	}

	
	
}
