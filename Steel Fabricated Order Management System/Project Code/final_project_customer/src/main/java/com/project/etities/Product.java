package com.project.etities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "products")
public class Product {
	
	@Id
	@Column(name = "p_id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String name;
	private double price;
	private String thumbnail;
	private String details;
	private int qty;
	
	@Column(name = "cat_id")
	private int catId;
	
	@Column(name = "created_timestamp", insertable = false, updatable = false)
	private String createdTimeStamp;
	
	@OneToMany(mappedBy = "pId", fetch = FetchType.EAGER)
	private List<Review> reviews;
	
	public Product() {
		this.reviews=new ArrayList<Review>();
		
	}
	public Product(String name, double price, String thumbnail, String details, int qty, int catId) {
		super();
		this.name = name;
		this.price = price;
		this.thumbnail = thumbnail;
		this.details = details;
		this.qty = qty;
		this.catId = catId;
		this.reviews=new ArrayList<Review>();
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
	public String getThumbnail() {
		return thumbnail;
	}
	public void setThumbnail(String thumbnail) {
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
	public int getCatId() {
		return catId;
	}
	public void setCatId(int catId) {
		this.catId = catId;
	}
	public String getCreatedTimeStamp() {
		return createdTimeStamp;
	}
	public void setCreatedTimeStamp(String createdTimeStamp) {
		this.createdTimeStamp = createdTimeStamp;
	}
	public List<Review> getReviews() {
		return reviews;
	}
	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}
	
	public void addReview(Review review) {
		reviews.add(review);
	}
	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", price=" + price + ", thumbnail=" + thumbnail + ", details="
				+ details + ", qty=" + qty + ", catId=" + catId + ", createdTimeStamp=" + createdTimeStamp + "]";
	}
	
	
	
}
