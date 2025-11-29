package com.example.ecommerce.service;


import com.example.ecommerce.model.Product;
import com.example.ecommerce.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository repo;

    @Cacheable(value = "products")
    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    @Cacheable(value = "product", key = "#id")
    public Product getProduct(Long id) {
        return repo.findById(id).orElse(null);
    }

    @CacheEvict(value = {"products"}, allEntries = true)
    @CachePut(value = "product", key = "#result.id")
    public Product addProduct(Product p) {
        return repo.save(p);
    }

    @CacheEvict(value = {"products"}, allEntries = true)
    @CachePut(value = "product", key = "#id")
    public Product updateProduct(Long id, Product p) {
        p.setId(id);
        return repo.save(p);
    }

    @CacheEvict(value = {"products", "product"}, allEntries = true)
    public void deleteProduct(Long id) {
        repo.deleteById(id);
    }
}
