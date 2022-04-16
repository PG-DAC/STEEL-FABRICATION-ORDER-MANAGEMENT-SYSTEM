package com.project.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dao.OrderDao;
import com.project.etities.Order;
import com.project.etities.Product;

@Service
@Transactional
public class OrderServicesImpl implements OrderServices{

	@Autowired
	private OrderDao orderDao;
	
	
	@Override
	public Order save(Order order) {
		Order placedOrder = orderDao.save(order);
		return placedOrder;
	}


	@Override
	public Order cancelOrder(int oid) {
		Optional<Order> order = orderDao.findById(oid);
		Order newOrder = order.get();
		newOrder.setStatus("cancelled");
		newOrder = orderDao.save(newOrder);
		return newOrder;
	}


	@Override
	public List<Order> findAll() {
		// TODO Auto-generated method stub
		return orderDao.findAll();
	}


	@Override
	public Order findById(int id) {
		
		Optional<Order> ord=orderDao.findById(id);
		Order newOrder=ord.get();
		return newOrder;

	}


	@Override
	public List<Order> findByStatus(String string) {
		
		return orderDao.findByStatus(string);
	}


	@Override
	public List<Order> findByStatusNot(String string) {
		
		return orderDao.findByStatusNot(string);
	}


	@Override
	public int getMinStaffId() {
		System.out.println("min staff");
		System.out.println("Min staff :" + orderDao.getMinStaffId());
		return orderDao.getMinStaffId();
	}


	@Override
	public List<Order> findByStaff(int id) {
		System.out.print("inside service method"+id);
		List<Order> orders = orderDao.findByStaffId(id);
		System.out.println(orders);
		return orders;
	}

	@Override
	public List<Order> findByCId(int cid) {
		//List<Order> orders = orderDao.findById(cid);
		List<Order> orders = orderDao.findByStaffId(cid);
		System.out.println(orders);
		return orders;
	}


	
	
}
