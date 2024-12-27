import axios from 'axios';

// Cấu hình URL backend
// const API_BASE_URL = "http://localhost:8080/api/movies";

// Hàm lấy danh sách phim
// fetchMovies.js
export const fetchMovies = async () => {
    try {
        const response = await fetch("http://localhost:8080/api/movies");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch movies:", error.message);
        throw error;
    }
};

// hàm lấy danh mục
export const fetchCategories = async () => {
    try {
        const response = await fetch("http://localhost:8080/api/categories");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch categories:", error.message);
        throw error;
    }
};
