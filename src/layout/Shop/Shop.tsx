// Dependencies
import React from 'react';
import Spinner from '../../components/Spinner';

// Externals
import './Shop.css';

const API_KEY = process.env.REACT_APP_API_KEY;

const Shop: React.FC = () => {
  return (
    <main className='container shop-content'>
      <Spinner />
    </main>
  );
};

export { Shop };
