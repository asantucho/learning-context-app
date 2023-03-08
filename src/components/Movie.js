import React from 'react';

const Movie = ({ movie }) => {
  console.log('Movie');
  const isFavorite = false;

  return (
    <div className='card'>
      <img src={movie.imageUrl} alt={movie.title} className='card-img-top' />
      <div className='card-body'>
        <h4>{movie.title}</h4>
        <button
          className={`btn ${
            isFavorite ? 'btn-success' : 'btn-outline-primary'
          }`}
        >
          Favorite
        </button>
      </div>
    </div>
  );
};

export default Movie;
