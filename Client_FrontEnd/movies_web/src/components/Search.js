import React from "react";
import {useState } from "react";
import { Link,useParams, useLocation } from "react-router-dom";


function Search() {
    const location = useLocation();
    const {movies} = location.state || {};

    return (
        <div className="bg-gray-800 text-white py-4 mt-8 w-full">
            <div className="container mx-auto text-center">
                <ul>
                    {movies && movies.length > 0 && (
                        movies.map((movie) => <li key={movie.movieId}>{movie.title}</li>)
                    )
                    }
                    {!movies || movies.length === 0 && (
                        <li>No movies found</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Search;
