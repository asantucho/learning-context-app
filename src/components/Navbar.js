import React from 'react';

const Navbar = () => {
  const user = null;
  return (
    <nav className='navbar navbar-dark bg-dark mb-4'>
      <div className='container'>
        <span className='navbar-brand'>
          <h2>{user ? `Hello ${user.name}` : 'Welcome'}</h2>
        </span>
        {user ? (
          <button className='btn btn-primary'>Log Out</button>
        ) : (
          <button className='btn btn-primary'>Sign in</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
