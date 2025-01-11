import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HorizontalMovies from "./HorizontalMovies";

const DetailMovie = () => {
    const { id } = useParams(); // Lấy ID từ URL
    const [movieDetail, setMovieDetail] = useState(null);
    const [relatedMovies, setRelatedMovies] = useState([]);
    const {categoryName} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovieDetail = async () => {
            // Giả sử bạn có API lấy chi tiết phim bằng ID
            const response = await fetch(`http://localhost:8080/api/movies/${id}`);
            const data = await response.json();
            console.log('Movie detail:', data);
            setMovieDetail(data);

            if (data.movieCategories && data.movieCategories.length > 0) {
                const categoryId = data.movieCategories[0].category_id;
                console.log('Category ID:', categoryId)
                fetchRelatedMovies(categoryId);
            }
        };

        const fetchRelatedMovies = async (categoryId) => {
            // http://localhost:8080/api/movies/category/id/2
            const response = await fetch(`http://localhost:8080/api/movies/category/id/${categoryId}`);
            const data = await response.json();
            console.log('Related movies:', data)
            setRelatedMovies(Array.isArray(data) ? data : []);
        };

        fetchMovieDetail();
    }, [id]);

    if (!movieDetail) return <div>Loading...</div>;

    const episodeLinks = movieDetail.episodeLinks ? movieDetail.episodeLinks.split(',') : [];

    const convertToEmbedUrl = (url) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? `https://www.youtube.com/embed/${match[1]}` : url;
    };

    return (
        <div className="px-10 bg-gray-800">
            <div>
                <nav className="my-4">
                    <Link to="/" className="text-white">Movies</Link> {'>'}
                    <Link to={`/movies/${movieDetail.movieCategories[0]?.name.toLowerCase()}`} className="text-white">{movieDetail.movieCategories[0]?.name.toLowerCase()}</Link> {'>'}
                    <span className="text-blue-500">{movieDetail.title}</span>
                </nav>
            </div>
            <div className="flex flex-row w-full">
                <img src={movieDetail.thumb_url} alt={movieDetail.title} className="w-[20%] h-100 object-cover rounded-lg mr-3"/>
                <h1 className="text-3xl font-bold text-white">{movieDetail.title}</h1>
            </div>

            <div className="my-4">
                <h2 className="font-bold my-4 text-white">Nội dung chi tiết</h2>
                <h1 className="text-2xl mb-2 text-white">{movieDetail.title}</h1>
                <p className="text-white">{movieDetail.description}</p>
            </div>

            <div className="flex flex-col items-center gap-4">
                <div>
                    <h2 className="font-bold my-4 text-white">Trailer</h2>
                    <iframe
                        width="560"
                        height="315"
                        src={convertToEmbedUrl(movieDetail.trailer)}
                        // src="https://www.youtube.com/embed/6ApiubHgJP4"
                        title={movieDetail.title}
                        frameBorder="1"
                        allowFullScreen
                    ></iframe>
                </div>
                <div>
                    {episodeLinks.length > 0 ? (
                        episodeLinks.map((link, index) => (
                        <div key={index} className="my-2">
                            <h2 className="text-white">Tập {index + 1}</h2>
                            <iframe
                                width="615"
                                height="315"
                                src={link}
                                title={`${movieDetail.title} - Episode ${index + 1}`}
                                frameBorder="1"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))
                    ): (
                    <iframe
                        width="615"
                        height="315"
                        src={movieDetail.link}
                        title={movieDetail.title}
                        frameBorder="1"
                        allowFullScreen
                    ></iframe>
                        )}
                </div>
            </div>

            <div>
                <div>
                    <HorizontalMovies title={"Phim liên quan"} movies={relatedMovies} />
                </div>
                {/*<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">*/}
                {/*    {relatedMovies.map((movie, index) => (*/}
                {/*        <div key={index} className="w-30 h-60 bg-gray-200"*/}
                {/*             onClick={() => navigate(`/movie/${movie.movie_id}`)}>*/}
                {/*            <img src={movie.thumb_url} alt={movie.title}*/}
                {/*                 className="rounded mb-2 w-full h-[60%] flex-1 object-cover"/>*/}
                {/*            <h4 className="text-lg font-semibold flex-1">{movie.title}</h4>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default DetailMovie;
