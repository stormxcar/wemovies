/*
 * @ (#) MovieDto.java 1.0 12/26/2024
 *
 * Copyright (c) 2024 IUH.All rights reserved
 */

package com.example.demo.models;

import lombok.Getter;
import lombok.Setter;

import java.time.Year;
import java.util.List;
import java.util.stream.Collectors;

/*
 * @description
 * @author : Nguyen Truong An
 * @date : 12/26/2024
 * @version 1.0
 */
@Getter
@Setter
public class MovieDto {
    private Long movieId;
    private String title;
    private String description;
    private Year releaseYear;
    private String thumbUrl;
    private Long countryId;
    private List<Long> movieTypeIds;
    private List<Long> categoryIds;

    // Constructor to convert Movie to MovieDto
    public MovieDto(Movie movie) {
        this.movieId = movie.getMovie_id();
        this.title = movie.getTitle();
        this.description = movie.getDescription();
        this.releaseYear = movie.getRelease_year();
        this.thumbUrl = movie.getThumb_url();
        this.countryId = movie.getCountry() != null ? movie.getCountry().getCountry_id() : null; // Assuming Country has a getCountryId method
        this.movieTypeIds = movie.getMovieTypes().stream()
                .map(movieType -> movieType.getMovie_type_id()) // Assuming MovieType has a getMovieTypeId method
                .collect(Collectors.toList());
        this.categoryIds = movie.getMovieCategories().stream()
                .map(category -> category.getCategory_id()) // Assuming Category has a getCategoryId method
                .collect(Collectors.toList());
    }

    // No need for additional getters and setters due to Lombok
}