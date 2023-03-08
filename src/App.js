import React from 'react';
import UserContext from './context/UserContext';
import './styles/styles.css';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';

function App() {
  const user = {
    id: 1,
    name: 'Agustina',
    favorites: [1, 2, 3],
  };
  const data = { user };
  return (
    <div className='App'>
      <UserContext.Provider value={data}>
        <Navbar />
        <MovieList />
      </UserContext.Provider>
    </div>
  );
}

export default App;
