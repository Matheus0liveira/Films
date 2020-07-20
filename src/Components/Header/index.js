import React from 'react';
import { RiMovie2Line } from 'react-icons/ri'

import { Link } from 'react-router-dom'
import './style.css'



function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>
          <RiMovie2Line className='icon-logo' />
          <h1> MOVIES</h1>
        </Link>
      </div>

    </header>
  );
}

export default Header;