package com.project.dta;

public class CategoryDto {
	String name;
	String details;
	public String getName() {
		return name;
	}
	
	public CategoryDto(String name, String details) {
		
		this.name = name;
		this.details = details;
	}

	public void setName(String name) {
		this.name = name;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	@Override
	public String toString() {
		return "CategoryDto [name=" + name + ", details=" + details + ", getName()=" + getName() + ", getDetails()="
				+ getDetails() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}
	
}
