package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;

import com.project.etities.Product;
import com.project.etities.Review;

public interface ReviewDao extends JpaRepository<Review, Integer>{

	
	@Query("SELECT avg(star) from Review where p_id=(:pid) group by p_id")
    Double getAverageStar(@Param("pid") int pid);
	
	Review save(Review review);
}
