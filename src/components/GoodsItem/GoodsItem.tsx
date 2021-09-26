// Dependencies
import React from 'react';
import { useDispatch } from 'react-redux';

// Redux
import { addToBasket } from '../../store/basketSlice';
import { addAlertName } from '../../store/alertSlice';

// Externals
import './GoodsItem.css';
import { IGoods } from '../../types/IGoods';


const GoodsItem = ({ id, name, description, price, full_background }: IGoods) => {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, price }));
    dispatch(addAlertName(name));
  };

  return (
    <div className="card goods-card">
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className='btn' onClick={addItemToBasket}> Купить </button>
        <span className='right' style={{fontSize:'1.8rem'}}>{price} руб</span>
      </div>
    </div>
  )
};



export { GoodsItem };
