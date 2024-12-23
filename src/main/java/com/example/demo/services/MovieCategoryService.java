/*
 * @ (#) CategoryService.java 1.0 12/23/2024
 *
 * Copyright (c) 2024 IUH.All rights reserved
 */
package com.example.demo.services;

import com.example.demo.models.MovieCategory;

import java.util.List;

/*
 * @description
 * @author : Nguyen Truong An
 * @date : 12/23/2024
 * @version 1.0
 */
public interface MovieCategoryService {
    List<MovieCategory> getAllMovieCategory();
    MovieCategory getMovieCategoryById(Long id);
    MovieCategory saveMovieCategory(MovieCategory category);
    void deleteMovieCategoryById(Long id);
}
