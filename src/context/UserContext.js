import React, { createContext, useState } from 'react';

const UserContext = createContext();

const initialUser = { id: 1, name: 'Agustina', favorites: [1, 2] };

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  const login = () => {
    setUser(initialUser);
  };

  const logout = () => {
    setUser(null);
  };

  const toggleFavoriteMovieToUser = (movieId) => {
    const isFavorite = user.favorites.includes(movieId);
    const favorites = isFavorite
      ? user.favorites.filter((favMovieId) => favMovieId !== movieId)
      : [...user.favorites, movieId];

    setUser({
      ...user,
      favorites: favorites,
    });
  };

  const data = { user, login, logout, toggleFavoriteMovieToUser };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };

export default UserContext;
