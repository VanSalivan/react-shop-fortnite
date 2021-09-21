// Dependencies
import React from 'react';

// Externals
import './BasketItem.css';

// Types
import { IOrder } from '../../../types/IGoods';

const BasketItem = ({ id, name, price, quantity }: IOrder) => {
  return (
    <li className='collection-item'>
      {name} x {quantity} = {price}
      <span className='secondary-content'>
        <i className='material-icons'>close</i>
      </span>
    </li>
  );
};

export { BasketItem };
