import React, { useState, useEffect } from 'react';
import HorizontalMovies from './HorizontalMovies';
import GridMovies from './GridMovies';
import { fetchMovies } from '../services/api';

const ShowMovies = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const data = await fetchMovies(); // Lấy dữ liệu từ API
                setMovieList(data); // Giả sử `data` là một mảng các danh mục phim
                console.log("Movies:", data);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };
        getMovies();
    }, []);

    return (
        <div>
            <div>
                {/*<h1 className="text-green-500 font-bold">Thể loại</h1>*/}
                {movieList.length > 0 ? (
                    <div>
                        <HorizontalMovies title="Thịnh hành" movies={movieList} />
                    </div>
                ) : (
                    <p>Loading movies...</p>
                )}
            </div>
            <div>
                {/*<h1 className="text-green-500 font-bold">Phim mới | Phim lẻ</h1>*/}
                {movieList.length > 0 ? (
                    <div>
                       <GridMovies title="Phim mới | Phim lẻ" movies={movieList} />
                    </div>
                ) : (
                    <p>Loading movies...</p>
                )}
            </div>

        </div>
    );
};

export default ShowMovies;
