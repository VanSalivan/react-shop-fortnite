// Dependencies
import React from 'react';

// Externals
import './Header.css';


const Header:React.FC = () => {
  return (
    <nav className='header__nav purple darken-3'>
      <div className='nav-wrapper'>
        <a href='/' className='brand-logo'>Fortnite Shop</a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li><a target="_blank" rel="noreferrer" href='https://github.com/VanSalivan/react-shop-fortnite'>Repositories</a></li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };
