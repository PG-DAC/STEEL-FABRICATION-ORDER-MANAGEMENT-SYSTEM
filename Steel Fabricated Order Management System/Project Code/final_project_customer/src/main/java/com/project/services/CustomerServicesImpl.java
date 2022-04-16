package com.project.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dao.CustomerDao;
import com.project.etities.Customer;
import com.project.etities.Order;
import com.project.etities.Product;

@Transactional
@Service
public class CustomerServicesImpl implements CustomerServices{

	
	@Autowired
	private CustomerDao customerDao;
	
	@Autowired
	private ProductServices productService;
	
	@Override
	public Customer save(Customer customer) {
		return customerDao.save(customer);
	
	}

	@Override
	public Customer findById(int id) {
	
		return customerDao.findById(id);
	}

	@Override
	public HashMap<String, Object> getOrders(int Cid) {
		Customer cust =  customerDao.findById(Cid);
		List<Order> list = cust.getOrders();
		List<Product> productList = new ArrayList<>();
		if (list != null) {
			for (Order order : list) {
				productList.add(order.getProduct());
			}
		}
		HashMap<String, Object> ht = new HashMap<String, Object>();
		if (list != null) {
			ht.put("Orders", list);
			ht.put("products", productList);
		} else {
			ht.put("Orders", 0);
			ht.put("product", 0);
		}
		return ht;
	}

	@Override
	public List<Customer> findAll() {
		List<Customer> custList = customerDao.findAll();
		return custList;
	}

	@Override
	public Customer findByMail(String email) {
		Customer cust = customerDao.findByMail(email);
		return cust;
	}

	@Override
	public Customer authenticate(String email, String password) {
		Customer cust = findByMail(email);
		if(cust == null) {
			return null;
		}
		if(cust.getPassword().equals(password)) return cust;
		else return null;
	}

	@Override
	public void addOrder(Order order) {
		int cid = order.getcId();
		Customer cust = findById(cid);
		cust.addOrder(order);
		System.out.println(cust.getOrders());
	}

	@Override
	public void transaction(int amount, int cid) {
		Customer cust = findById(cid);
		
		cust.setWalletBalance(cust.getWalletBalance() + amount);
		customerDao.save(cust);
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
