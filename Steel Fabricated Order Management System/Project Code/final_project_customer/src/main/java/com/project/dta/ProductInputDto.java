package com.project.dta;

import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;

import com.project.etities.Product;

public class ProductInputDto {

	
	private int id;
	private String name;
	private double price;
	private MultipartFile thumbnail;
	private int catId;
	private String details;
	private int qty;
	
	
	public int getCatId() {
		return catId;
	}


	public void setCatId(int catId) {
		this.catId = catId;
	}


	
	
	
	public static Product toEntity(ProductInputDto dto) {
		Product entity = new Product();
		BeanUtils.copyProperties(dto, entity, "thumbnail");
		return entity;
	}


	@Override
	public String toString() {
		return "ProductInputDto [id=" + id + ", name=" + name + ", price=" + price + ", thumbnail=" + thumbnail
				+ ", details=" + details + ", qty=" + qty + "]";
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
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


	public String getDetails() {
		return details;
	}


	public void setDetails(String details) {
		this.details = details;
	}


	public int getQty() {
		return qty;
	}


	public void setQty(int qty) {
		this.qty = qty;
	}
}
