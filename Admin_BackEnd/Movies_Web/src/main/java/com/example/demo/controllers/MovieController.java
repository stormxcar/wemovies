/*
 * @ (#) MovieController.java 1.0 12/23/2024
 *
 * Copyright (c) 2024 IUH.All rights reserved
 */

package com.example.demo.controllers;

import com.example.demo.models.*;
import com.example.demo.services.CategoryService;
import com.example.demo.services.CountryService;
import com.example.demo.services.MovieService;
import com.example.demo.services.MovieTypeSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

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

    @Autowired
    private CountryService countryService;

    @GetMapping
    public String listMovie(Model model) {
        model.addAttribute("movies", movieService.getAllMovies());
        model.addAttribute("movie", new Movie());
        model.addAttribute("countMovie", movieService.countMovies());
        model.addAttribute("categories", categoryService.getAllCategory());
        model.addAttribute("types", movieTypeSevice.getAllMovieTypes());
        model.addAttribute("countries", countryService.getAllCountries());
        return "admin/movies/list";
    }

    @PostMapping("/add")
    public String addMovie(@ModelAttribute("movie") Movie movie,
                           @RequestParam("countryId") Long countryId,
                           @RequestParam("movieTypeIds") List<Long> movieTypeIds,
                           @RequestParam("categoryIds") List<Long> categoryIds) {
        // Lấy quốc gia theo ID
        Country country = countryService.getCountryById(countryId);
        movie.setCountry(country);

        // Lấy các thể loại theo ID
        Set<MovieType> movieTypes = new HashSet<>();
        for (Long id : movieTypeIds) {
            MovieType movieType = movieTypeSevice.getMovieTypeById(id);
            movieTypes.add(movieType);
        }
        movie.setMovieTypes(movieTypes);

        // Lấy các danh mục theo ID
        Set<Category> categories = new HashSet<>();
        for (Long id : categoryIds) {
            Category category = categoryService.getCategoryById(id);
            categories.add(category);
        }
        movie.setMovieCategories(categories);

        // Lưu bộ phim
        movieService.saveMovie(movie);
        return "redirect:/admin/movies";
    }

    @GetMapping("/admin/api/{id}")
    @ResponseBody
    public ResponseEntity<MovieDto> editMovie(@PathVariable Long id) {
        Movie movie = movieService.getMovieById(id);
        MovieDto movieDto = new MovieDto(movie);
        return ResponseEntity.ok(movieDto);
    }
}
