package com.project.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.etities.Review;
import com.project.services.ReviewServices;


@CrossOrigin
@RestController
@RequestMapping("/reviews")
public class ReviewController {
	
	@Autowired
	private ReviewServices reviewService;
	
	@PostMapping("/addreview")
	public ResponseEntity<HashMap<String, Object>> addReview(@RequestBody Review review ){
		System.out.println(review);
		Review newReview = reviewService.addReview(review);
		
		if (newReview == null) throw new RuntimeException("Something went wrong");
		HashMap<String, Object> ht = new HashMap<String, Object>();
		ht.put("status", new String("success"));
		ht.put("data", review);
		return ResponseEntity.ok(ht);
	}
	
	
	
}
