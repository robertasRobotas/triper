import React from 'react';
import './Button.css';

const Button = ({ changeMenuStatus, text, onClick }) => {
  return (
    <div onClick={onClick} className='buttonAtom'>
    {text}
    </div>
  );
};

export default Button;
