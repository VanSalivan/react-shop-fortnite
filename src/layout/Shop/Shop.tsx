// Dependencies
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { fetchGoodsList } from '../../store/goodsSlice';
import { showTheBasket } from '../../store/basketSlice';
import { RootState } from '../../types/redux';

// Externals
import './Shop.css';
import Spinner from '../../components/Spinner';
import GoodsList from '../../components/GoodsList';
import BasketList from '../../components/Basket/BasketList';
import Cart from '../../components/Cart';
import Modal from '../../services/Modal';
import Alert from '../../components/Alert';



const Shop = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.goods);
  const { alertName } = useSelector((state: RootState) => state.alertMessage);
  const { order, isBasketOpen } = useSelector((state: RootState) => state.basket);
 
  const handleBasketOpen = () => dispatch(showTheBasket())

  useEffect(() => {
    dispatch(fetchGoodsList());
  }, []);

  return (
    <main className='container shop-content'>
      <Cart quantity={order.length} handleBasketOpen={handleBasketOpen} />
      { loading ? <Spinner /> : <GoodsList /> }
      { isBasketOpen && (
        <Modal>
          <BasketList order={order} handleBasketOpen={handleBasketOpen} />
        </Modal>
      )}
       {alertName && (
        <Modal>
          <Alert />
        </Modal>
      )}
    </main>
  );
};

export { Shop };
