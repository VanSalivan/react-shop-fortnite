// Dependencies
import React from 'react';

// Externals
import './BasketItem.css';

// Types
import { IOrder } from '../../../types/IGoods';

interface BasketItemProps extends IOrder{
  removeFromBasket: (id?:string) => void
}


const BasketItem = ({ id, name, price, quantity, removeFromBasket }: BasketItemProps) => {
  return (
    <li className='collection-item'>
      {name} x {quantity} = {price! * quantity} руб
      <span className='secondary-content' onClick={() => removeFromBasket(id)}>
        <i className='material-icons'>close</i>
      </span>
    </li>
  );
};

export { BasketItem };
