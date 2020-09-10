import React from 'react';
import './CountrySelection.css';
import { ValidationMessage } from '../../atoms';

const CountrySelection = ({ setCity, city }) => {
  return (
    <div className='countrySelectionWrapper'>
      <select
        onChange={(event) => setCity(event.target.value)}
        value={city}
        id='country'
        name='country'
        className='selectInput'>
        <option defaultValue hidden>
          Choose here
        </option>
        <option value='australia'>Australia</option>
        <option value='canada'>Canada</option>
        <option value='usa'>USA</option>
      </select>
      <ValidationMessage message={'Choose Country'} status={city} />
    </div>
  );
};

export default CountrySelection;
