// Dependencies
import React from 'react';

// Externals
import './Cart.css';

interface ICartProps {
  quantity: number;
}

const Cart = ({ quantity }: ICartProps) => {
  return (
    <div className='cart blue darken-4 white-text'>
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  );
};

export { Cart };
