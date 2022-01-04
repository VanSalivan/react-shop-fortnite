// Dependencies
import React from 'react';

// Externals
import './Footer.css';


const Footer:React.FC = () => {
  return (
    <footer className='page-footer blue-grey'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} Copyright Text
          <a className='grey-text text-lighten-4 right' href='https://github.com/VanSalivan/react-shop-fortnite'>Repositories</a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
