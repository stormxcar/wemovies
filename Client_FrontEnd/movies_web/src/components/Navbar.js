import React from "react";
import { fetchCategories } from "../services/api";
import {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        }
        getCategories();
    },[]);

    return (
        <nav className="bg-gray-700 text-white p-2 w-full">
            <ul className="flex justify-center gap-8">
                {categories.map((item, index) => (
                    <li key={index} className="cursor-pointer hover:text-blue-400 transition">
                        <Link to={`/category/${item.name}`}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
