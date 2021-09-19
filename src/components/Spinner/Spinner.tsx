// Dependencies
import React from 'react';

// Externals
import './Spinner.css';

const Spinner:React.FC = () => {
  return (
    <div className="spinner-wrap">
        <div className="spinner-body">
            <div></div>
            <div></div>
            <div><div></div></div>
            <div><div></div></div>
        </div>
    </div>
)};

export { Spinner };
