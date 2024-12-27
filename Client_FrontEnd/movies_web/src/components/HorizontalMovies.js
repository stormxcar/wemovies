import {useNavigate} from 'react-router-dom';

function HorizontalMovies({ title, movies }) {
    const navigate = useNavigate();
    // Kiểm tra nếu movies không phải là mảng hoặc là undefined, trả về mảng trống
    const validMovies = Array.isArray(movies) ? movies : [];

    const handleClickToDetail = (movieID) => {
        navigate(`/movie/${movieID}`);
    }

    return (
        <div className="my-6">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="flex overflow-x-scroll gap-4 border-2">
                {validMovies.length > 0 ? (
                    validMovies.map((movie, index) => (
                        <div key={index} className="min-w-[200px] bg-blue-400" onClick={() => handleClickToDetail(movie.movie_id)}>
                            <img
                                src={movie.thumb_url}
                                alt={movie.title}
                                className="rounded-lg w-full"
                            />
                            <h3 className="text-lg mt-2">{movie.title}</h3>
                            <h3>{movie.release_year}</h3>
                        </div>
                    ))
                ) : (
                    <p>No movies available</p> // Nếu không có phim, hiển thị thông báo
                )}
            </div>
        </div>
    );
}

export default HorizontalMovies;
