// Dependencies
import React, { useEffect } from 'react';

// Externals
import './Alert.css';

interface IAlertProps {
  name: string;
  closeAlert: () => void;
}

const Alert = ({ name = '', closeAlert }: IAlertProps) => {
  useEffect(() => {
    const timerid = setTimeout(closeAlert, 3000);

    return () => clearTimeout(timerid);
    // eslint-disable-next-line
  }, [name]);

  return (
    <div className='alert-container'>
      <div className='alert'>{name} добавлен в корзину</div>
    </div>
  );
};

export { Alert };
