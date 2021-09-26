// Dependencies
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { removeAlertName } from '../../store/alertSlice';
import { RootState } from '../../types/redux';

// Externals
import './Alert.css';

const Alert = () => {
  const { alertName: name } = useSelector((state: RootState) => state.alertMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(removeAlertName());
    }, 3000);

  }, [name]);

  return (
    <div className='alert-container'>
      <div className='alert'>{name} добавлен в корзину</div>
    </div>
  );
};

export { Alert };
