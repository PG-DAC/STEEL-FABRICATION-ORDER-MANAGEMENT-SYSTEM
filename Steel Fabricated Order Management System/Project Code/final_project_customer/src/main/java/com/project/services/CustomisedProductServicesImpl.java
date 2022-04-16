package com.project.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.project.utils.StorageService;
import com.project.dao.CustomisedProductDao;
import com.project.dao.ProductDao;
import com.project.etities.CustomisedProduct;
import com.project.etities.Product;

@Transactional
@Service
public class CustomisedProductServicesImpl implements CustomisedProductServices{
 
	@Autowired
	private CustomisedProductDao custProDao;
	
	@Autowired
	private StorageService storageService;
	
	
	@Override
	public CustomisedProduct save(CustomisedProduct product) {
	
		return custProDao.save(product);
	}

	@Override
	public List<CustomisedProduct> findAll() {
	
		return custProDao.findAll();
	}

	@Override
	public CustomisedProduct saveProduct(CustomisedProduct product, MultipartFile thumbnail) {
		String fileName = storageService.store(thumbnail);
		product.setThumbnail(fileName);
		return custProDao.save(product);	
	 
	}

	@Override
	public CustomisedProduct findById(int id) {
		 Optional<CustomisedProduct> p= custProDao.findById(id);
			CustomisedProduct product=p.orElse(null);
			return product;	
	
	}

}
