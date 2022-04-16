package com.project.dta;

import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;

import com.project.etities.CustomisedProduct;
import com.project.etities.Product;

public class CustomisedProductInputDto {

	private int id;

	private double price;
	private MultipartFile thumbnail;
	
	private String description;
	private double budget;
	
	private int cid;
	
	
	
	public int getCid() {
		return cid;
	}



	public void setCid(int cid) {
		this.cid = cid;
	}



	public static CustomisedProduct toEntity(CustomisedProductInputDto dto) {
		CustomisedProduct entity = new CustomisedProduct();
		BeanUtils.copyProperties(dto, entity, "thumbnail");
		return entity;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public double getPrice() {
		return price;
	}



	public void setPrice(double price) {
		this.price = price;
	}



	public MultipartFile getThumbnail() {
		return thumbnail;
	}



	public void setThumbnail(MultipartFile thumbnail) {
		this.thumbnail = thumbnail;
	}



	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	public double getBudget() {
		return budget;
	}



	public void setBudget(double budget) {
		this.budget = budget;
	}
}
