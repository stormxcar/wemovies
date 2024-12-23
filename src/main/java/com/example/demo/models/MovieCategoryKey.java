/*
 * @ (#) MovieCategoryKey.java 1.0 12/23/2024
 *
 * Copyright (c) 2024 IUH.All rights reserved
 */

package com.example.demo.models;

/*
 * @description
 * @author : Nguyen Truong An
 * @date : 12/23/2024
 * @version 1.0
 */
import jakarta.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;


@Embeddable
public class MovieCategoryKey implements Serializable {
    private Long movie_id;
    private Long category_id;

    // Getters and Setters, hashCode, equals methods
}
