package com.project.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.etities.Order;

public interface OrderDao extends JpaRepository<Order, Integer>{

	List<Order> findByStatus(String string);

	List<Order> findByStatusNot(String string);
	
	List<Order> findByStaffId(int id);
	
	
	
//	@Query("SELECT o from Order o where c_id=(:cid)")
//    List<Order> findByCId(@Param("cid") int cid);
	//List<Order> findByCId(int cid);
	
	@Query(value="select staff_id from orders where status!='delivered' group by status order by count(staff_id) limit 1", nativeQuery = true)
	int getMinStaffId();
}
