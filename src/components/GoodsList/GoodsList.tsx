// Dependencies
import React from 'react';
import { useSelector } from 'react-redux';

// Externals
import './GoodsList.css';
import GoodsItem from '../GoodsItem';

// Types

import { RootState } from '../../types/redux';


const GoodsList = () => {
  const { goods } = useSelector((state:RootState) => state.goods);
  if (!goods.length) {
    return <h3> Ничего нет </h3>;
  }

  return (
    <div className='goods'>
      {goods.map((item) => <GoodsItem key={item.id} {...item} />)}
    </div>
  );
};

export { GoodsList };
