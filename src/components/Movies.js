import React from 'react';
import { movies } from '../data';



const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => (
          <div>
            <h2>{movie.title}</h2>
            <h3>{movie.director}</h3>
            <h3>{movie.time}</h3>
            <ul>
              {movie.genres.map(genre => (
                <li>
                  {genre}
                </li>
              ))
            }</ul>
          </div>))}
        ))}
    </div>
  );
};

export default Movies;
