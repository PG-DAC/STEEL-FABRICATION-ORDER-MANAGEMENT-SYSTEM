package com.project.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dao.ReviewDao;
import com.project.etities.Review;

@Transactional
@Service
public class ReviewServiceImpl implements ReviewServices{
	
	@Autowired
	private ReviewDao reviewDao;
	
	@Override
	public Review addReview(Review review) {
		Review reviewNew = reviewDao.save(review);
		return reviewNew;
	}

	

}
