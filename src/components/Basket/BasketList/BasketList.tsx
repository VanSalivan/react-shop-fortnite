// Dependencies
import React from 'react';

// Externals
import './BasketList.css';

// Types
import { IOrder } from '../../../types/IGoods';
import { BasketItem } from '../BasketItem/BasketItem';

interface IBasketListProps {
  order: IOrder[];
  handleBasketOpen: () => void;
}

const BasketList = ({ order, handleBasketOpen }: IBasketListProps) => {
  const totalPrice = order.reduce((sum, currentItem) => {
    return sum + currentItem.price! * currentItem.quantity;
  }, 0);

  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>
        Корзина
        <span className='secondary-content' onClick={handleBasketOpen}>
          <i className='material-icons'>close</i>
        </span>
      </li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.id} {...item} /> )
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}
      <li className='collection-item active'>Общая стоимость: {totalPrice} руб</li>
      <li className='collection-item active'><button className='btn-small'>Оформить</button></li>
    </ul>
  );
};

export { BasketList };
