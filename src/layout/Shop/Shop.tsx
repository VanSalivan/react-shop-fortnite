// Dependencies
import React, { useEffect, useState } from 'react';

// Externals
import './Shop.css';
import Spinner from '../../components/Spinner';
import GoodsList from '../../components/GoodsList';
import Cart from '../../components/Cart';

// API
import { API_KEY, API_URL } from '../../config';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([])

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
      <Cart quantity={order.length} />
      {loading ? <Spinner /> : <GoodsList goods={goods} />}
    </main>
  );
};

export { Shop };
