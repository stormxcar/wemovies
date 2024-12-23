/*
 * @ (#) CountryRepositories.java 1.0 12/24/2024
 *
 * Copyright (c) 2024 IUH.All rights reserved
 */
package com.example.demo.repositories;

import com.example.demo.models.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
 * @description
 * @author : Nguyen Truong An
 * @date : 12/24/2024
 * @version 1.0
 */
@Repository
public interface CountryRepositories extends JpaRepository<Country, Long> {
}
