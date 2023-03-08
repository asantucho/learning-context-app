import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Movie = ({ movie }) => {
  const { user, toggleFavoriteMovieToUser } = useContext(UserContext);

  const isFavorite = user?.favorites?.includes(movie.id);

  return (
    <div className='card'>
      <img src={movie.imageUrl} alt={movie.title} className='card-img-top' />
      <div className='card-body'>
        <h4>{movie.title}</h4>
        {user?.id && (
          <button
            className={`btn ${
              isFavorite ? 'btn-success' : 'btn-outline-primary'
            }`}
            onClick={() => toggleFavoriteMovieToUser(movie.id)}
          >
            Favorite
          </button>
        )}
      </div>
    </div>
  );
};

export default Movie;
