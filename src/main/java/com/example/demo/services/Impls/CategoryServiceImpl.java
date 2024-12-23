/*
 * @ (#) CategoryServiceImpl.java 1.0 12/23/2024
 *
 * Copyright (c) 2024 IUH.All rights reserved
 */

package com.example.demo.services.Impls;

import com.example.demo.models.MovieCategory;
import com.example.demo.repositories.CategoryRepository;
import com.example.demo.services.MovieCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/*
 * @description
 * @author : Nguyen Truong An
 * @date : 12/23/2024
 * @version 1.0
 */
@Service
public class CategoryServiceImpl implements MovieCategoryService {

    @Autowired
    private CategoryRepository categoryRepository;
    @Override
    public List<MovieCategory> getAllMovieCategory() {
        return categoryRepository.findAll();
    }

    @Override
    public MovieCategory getMovieCategoryById(Long id) {
        return categoryRepository.findById(id).orElse(null);
    }

    @Override
    public MovieCategory saveMovieCategory(MovieCategory category) {
        return categoryRepository.save(category);
    }

    @Override
    public void deleteMovieCategoryById(Long id) {
        MovieCategory movieCategory = getMovieCategoryById(id);
        categoryRepository.delete(movieCategory);
    }
}
