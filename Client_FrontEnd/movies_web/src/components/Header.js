import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
   const [query , setQuery] = useState('');
   const [movies, setMovies] = useState([]);
   const [loading , setLoading] = useState(false);

   const navigate = useNavigate();

    const handleSearch = async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/api/movies/search/${query}`);

            // Kiểm tra phản hồi từ server
            if (!response.ok) {
                console.error('Failed to fetch data:', response.statusText);
                return;
            }

            // Kiểm tra nếu phản hồi có dữ liệu
            const textResponse = await response.text();
            if (textResponse) {
                const data = JSON.parse(textResponse); // Phân tích dữ liệu JSON

                // Kiểm tra xem có phim nào được tìm thấy không
                if (data.length === 0) {
                    console.log('Không tìm thấy phim nào.');
                }

                setMovies(data);
                navigate('/search', { state: { movies: data } });
            } else {
                console.error('Không có phản hồi từ server.');
            }
        } catch (error) {
            console.error("Error during fetch:", error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <header className="flex items-center justify-between bg-gray-800 p-4 text-white w-full">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="/">Movies</a>
                </div>

                {/* Thanh tìm kiếm */}
                <div className="flex items-center w-1/2">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Tìm kiếm phim..."
                        className="w-full px-4 py-2 rounded-l-lg focus:outline-none text-gray-800"
                    />
                    <button

                        onClick={handleSearch}
                        className="bg-blue-500 rounded-r-lg hover:bg-blue-600 w-[100px] py-2 text-center">
                        Tìm kiếm
                    </button>
                </div>

                {/* Ảnh đại diện */}
                {/*<div className="flex items-center">*/}
                {/*    <div className="hidden">*/}
                {/*        <img*/}
                {/*            src="https://via.placeholder.com/40"*/}
                {/*            alt="User Avatar"*/}
                {/*            className="rounded-full w-10 h-10"*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div className="flex flex-row gap-2 items-center">*/}
                {/*        <a href="http://localhost:3000/login" className="text-blue-600">Đăng nhập</a>*/}
                {/*        <a href="http://localhost:3000/signup">Đăng ký</a>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </header>
            {/*<ul>*/}
            {/*    {movies.length > 0 ? (*/}
            {/*        movies.map((movie) => <li key={movie.movieId}>{movie.title}</li>)*/}
            {/*    ) : (*/}
            {/*        <li>No movies found</li>*/}
            {/*    )}*/}
            {/*</ul>*/}

        </>
    );
}

export default Header;
