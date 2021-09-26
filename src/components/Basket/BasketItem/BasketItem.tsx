// Dependencies
import React from 'react';
import { useDispatch } from 'react-redux';

// Externals
import './BasketItem.css';

//Redux
import { decQuantity, incQuantity, removeFromBasket } from '../../../store/basketSlice';

// Types
import { IOrder } from '../../../types/IGoods';


const BasketItem = ({ id, name, price, quantity}: IOrder) => {
  const dispatch = useDispatch();

  return (
    <li className='collection-item'>
      {name}
      <i className='material-icons basket-quantity' onClick={() => dispatch(decQuantity(id))}>
        remove
      </i>
      x{quantity}
      <i className='material-icons basket-quantity' onClick={() => dispatch(incQuantity(id))}>
        add
      </i>
      = {price! * quantity} руб
      <span className='secondary-content' onClick={() => dispatch(removeFromBasket(id))}>
        <i className='material-icons'>close</i>
      </span>
    </li>
  );
};

export { BasketItem };
