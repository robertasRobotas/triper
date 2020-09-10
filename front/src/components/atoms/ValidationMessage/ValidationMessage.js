import React from 'react';
import './ValidationMessage.css';

const ValidationMessage = ({ message, status }) => {
  return (
    <div className={status ? 'validated general' : 'notValidated general'}>
      {message}
    </div>
  );
};

export default ValidationMessage;
