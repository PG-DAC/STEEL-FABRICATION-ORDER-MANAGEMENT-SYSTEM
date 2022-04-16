package com.project.services;

import java.util.List;


import com.project.etities.Order;
import com.project.etities.Product;

public interface OrderServices {
     Order save(Order order);
     List<Order> findByCId(int cid);
     Order cancelOrder(int oid);
	List<Order> findAll();
	Order findById(int oid);
	List<Order> findByStatus(String string);
	List<Order> findByStatusNot(String string);
	int getMinStaffId();
	List<Order> findByStaff(int id);
	
}
