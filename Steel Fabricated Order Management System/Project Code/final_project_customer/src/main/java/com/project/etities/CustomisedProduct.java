package com.project.etities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "customised_product")
public class CustomisedProduct {
	
	@Id
	@Column(name = "pid")
	private int id;
	

	private double price;
	
	private double budget;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "c_id")
	private Customer cust;
	
	public Customer getCust() {
		return cust;
	}

	public void setCust(Customer cust) {
		this.cust = cust;
	}

	//@Column(name="c_id")
	//private int cid;
	
	@Override
	public String toString() {
		return "CustomisedProduct [id=" + id + ", price=" + price + ", budget=" + budget + ", thumbnail=" + thumbnail
				+ ", description=" + description + "]";
	}

	public CustomisedProduct(int id, double price, double budget, String thumbnail, String description , int cid) {
		super();
		this.id = id;
		this.price = price;
		this.budget = budget;
		this.thumbnail = thumbnail;
		this.description = description;
		//this.cid=cid;
	}
 /*   public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}      */ 

	public CustomisedProduct()
    {
    	
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

	public double getBudget() {
		return budget;
	}

	public void setBudget(double budget) {
		this.budget = budget;
	}

	public String getThumbnail() {
		return thumbnail;
	}

	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	private String thumbnail;
	
	private String description;
	

}
