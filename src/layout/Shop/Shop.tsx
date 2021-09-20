// Dependencies
import React, { useEffect, useState } from 'react';

// Externals
import './Shop.css';
import Spinner from '../../components/Spinner';
import GoodsList from '../../components/GoodsList';
import Cart from '../../components/Cart';

// API
import { API_KEY, API_URL } from '../../config';

// Types
import { IGoods } from '../../types/IGoods';

interface IOrder extends IGoods {
  quantity: number;
}

const Shop = () => {
  const [goods, setGoods] = useState<IGoods[]>([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState<IOrder[]>([]);
  
  const addToBastek = (item: Partial<IOrder>) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      // Условие первого элемента
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    } else {
      // Если элемент уже есть в корзине
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return { ...orderItem, quantity: orderItem.quantity + 1 };
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      });
      const body = await response.json();

      body && setGoods(body.featured);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <main className='container shop-content'>
      <Cart quantity={order.length} />
      {loading ? (
        <Spinner />
      ) : (
        <GoodsList goods={goods} addToBastek={addToBastek} />
      )}
    </main>
  );
};

export { Shop };
