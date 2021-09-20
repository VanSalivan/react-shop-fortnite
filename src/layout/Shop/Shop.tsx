// Dependencies
import React, { useEffect, useState } from 'react';

// Externals
import './Shop.css';
import Spinner from '../../components/Spinner';
import GoodsList from '../../components/GoodsList';

// API
import { API_KEY, API_URL } from '../../config';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((body) => {
        body.featured && setGoods(body.featured);
        setLoading(false);
      });
  }, []);

  return (
    <main className='container shop-content'>
      {loading ? <Spinner /> : <GoodsList goods={goods} />}
    </main>
  )
};

export { Shop };
