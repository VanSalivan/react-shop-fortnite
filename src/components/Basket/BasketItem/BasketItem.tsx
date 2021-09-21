// Dependencies
import React from 'react';

// Externals
import './BasketItem.css';

// Types
import { IOrder } from '../../../types/IGoods';

interface BasketItemProps extends IOrder {
  removeFromBasket: (id?: string) => void;
  inc: (itemId: string) => void;
  dec: (itemId: string) => void;
}

const BasketItem = ({ id, name, price, quantity, removeFromBasket, inc, dec }: BasketItemProps) => {
  return (
    <li className='collection-item'>
      {name}
      <i className='material-icons basket-quantity' onClick={() => dec(id!)}>
        remove
      </i>
      x{quantity}
      <i className='material-icons basket-quantity' onClick={() => inc(id!)}>
        add
      </i>
      = {price! * quantity} руб
      <span className='secondary-content' onClick={() => removeFromBasket(id)}>
        <i className='material-icons'>close</i>
      </span>
    </li>
  );
};

export { BasketItem };
