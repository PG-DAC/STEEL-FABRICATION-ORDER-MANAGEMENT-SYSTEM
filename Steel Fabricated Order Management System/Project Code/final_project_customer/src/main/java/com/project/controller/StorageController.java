package com.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.utils.StorageServiceImpl;

@CrossOrigin
@RestController()
@RequestMapping("/storage")
public class StorageController {
	@Autowired
	private StorageServiceImpl storService;
	
	
	@GetMapping("/{filename}")
	public ResponseEntity<Resource> loadFile(@PathVariable("filename") String filename){
		System.out.println("request recieved");
		Resource file = storService.load(filename);
		return ResponseEntity.ok(file);
}
}