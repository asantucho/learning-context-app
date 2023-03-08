import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container'>
        <span className='navbar-brand'>
          <h1>Navbar</h1>
        </span>
        <button className='btn btn-primary'>Log Out</button>
      </div>
    </nav>
  );
};

export default Navbar;
