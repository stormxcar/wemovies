/*
 * @ (#) CategoryController.java 1.0 12/23/2024
 *
 * Copyright (c) 2024 IUH.All rights reserved
 */

package com.example.demo.controllers;

import com.example.demo.models.MovieCategory;
import com.example.demo.services.MovieCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

/*
 * @description
 * @author : Nguyen Truong An
 * @date : 12/23/2024
 * @version 1.0
 */
@Controller
@RequestMapping("/admin/categories")
public class MovieCategoryController {
    @Autowired
    private MovieCategoryService movieCategoryService;

    @GetMapping
    public String categoryList(Model model) {
        model.addAttribute("categories",movieCategoryService.getAllMovieCategory());
        return "/admin/categories/list";
    }
    @GetMapping("/add")
    public String showAddForm(Model model) {
        model.addAttribute("category",new MovieCategory());
        return "/admin/categories/add";
    }
    @GetMapping("/edit/{id}")
    public String showEditCategoryForm(@PathVariable("id") Long id, Model model) {
        MovieCategory category = movieCategoryService.getMovieCategoryById(id);
        if (category != null) {
            model.addAttribute("category", category);
            return "admin/categories/edit";
        }
        return "redirect:/admin/categories";
    }
    @PostMapping("/edit")
    public String editCategory(MovieCategory category) {
        movieCategoryService.saveMovieCategory(category);
        return "redirect:/admin/categories";
    }
    @GetMapping("/delete/{id}")
    public String deleteCategory(@PathVariable("id") Long id) {
        movieCategoryService.deleteMovieCategoryById(id);
        return "redirect:/admin/categories";
    }
}
