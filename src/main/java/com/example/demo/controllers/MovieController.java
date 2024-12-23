/*
 * @ (#) MovieController.java 1.0 12/23/2024
 *
 * Copyright (c) 2024 IUH.All rights reserved
 */

package com.example.demo.controllers;

import com.example.demo.models.Category;
import com.example.demo.models.Movie;
import com.example.demo.services.CategoryService;
import com.example.demo.services.MovieService;
import com.example.demo.services.MovieTypeSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/*
 * @description
 * @author : Nguyen Truong An
 * @date : 12/23/2024
 * @version 1.0
 */
@Controller
@RequestMapping("/admin/movies")
public class MovieController {
    @Autowired
    private MovieService movieService;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private MovieTypeSevice movieTypeSevice;

    @GetMapping
    public String listMovie(Model model) {
        model.addAttribute("movies", movieService.getAllMovies());
        model.addAttribute("movie", new Movie());
        model.addAttribute("countMovie", movieService.countMovies());
        model.addAttribute("categories", categoryService.getAllCategory());
        model.addAttribute("types", movieTypeSevice.getAllMovieTypes());
        return "admin/movies/list";
    }
}
