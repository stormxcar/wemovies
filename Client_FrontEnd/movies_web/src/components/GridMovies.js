import React from "react";

function GridMovies({ title, movies }) {
    return (
        <div className="my-6">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map((movie, index) => (
                    <div key={index} className="border-2">
                        <img
                            src={movie.thumb_url}
                            alt={movie.title}
                            className="rounded-lg w-full"
                        />
                        <h3 className="text-lg mt-2">{movie.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GridMovies;
