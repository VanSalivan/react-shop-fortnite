import React from 'react';

// Externals
import './GoodsItem.css';
import { IGoods } from '../../types/IGoods';

const GoodsItem = ({ name, description, price, full_background }: Partial<IGoods>) => {
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
        <button className='btn'>Купить</button>
        <span className='right' style={{fontSize:'1.8rem'}}>{price} руб</span>
      </div>
    </div>
  )
};



export { GoodsItem };
