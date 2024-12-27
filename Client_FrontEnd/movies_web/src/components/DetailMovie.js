import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailMovie = () => {
    const { id } = useParams(); // Lấy ID từ URL
    const [movieDetail, setMovieDetail] = useState(null);

    useEffect(() => {
        const fetchMovieDetail = async () => {
            // Giả sử bạn có API lấy chi tiết phim bằng ID
            const response = await fetch(`http://localhost:8080/api/movies/${id}`);
            const data = await response.json();
            setMovieDetail(data);
        };

        fetchMovieDetail();
    }, [id]);

    if (!movieDetail) return <div>Loading...</div>;

    return (
        <div className="movie-detail">
            <h1 className="text-3xl font-bold">{movieDetail.title}</h1>
            <img src={movieDetail.thumb_url} alt={movieDetail.title} className="w-full rounded-lg" />
            <p>{movieDetail.description}</p>
            <div>
                <iframe
                    width="560"
                    height="315"
                    src={movieDetail.link}
                    title={movieDetail.title}
                    frameBorder="1"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default DetailMovie;
