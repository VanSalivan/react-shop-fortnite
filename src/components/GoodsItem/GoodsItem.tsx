import React from 'react';

// Externals
import './GoodsItem.css';
import { IGoods } from '../../types/IGoods';

interface IGoodsItemProps extends IGoods{
  addToBastek: (item:IGoods) => void
}

const GoodsItem = ({ id, name, description, price, full_background, addToBastek }: IGoodsItemProps) => {
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
        <button className='btn'
          onClick={() => addToBastek({ id, name, price })}>
          Купить
        </button>
        <span className='right' style={{fontSize:'1.8rem'}}>{price} руб</span>
      </div>
    </div>
  )
};



export { GoodsItem };
