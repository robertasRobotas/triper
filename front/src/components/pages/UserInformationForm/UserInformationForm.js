import React, { useState } from 'react';
import { observer } from 'mobx-react';
import './UserInformationForm.css';
import { SelectItemsBar } from '../../organisms/';
import { favoriteSportInputs } from './FavoriteSportInputs';
import { CountrySelection } from '../../molecules';
const UserInformationForm = ({ history, location, rootModel }) => {
  const [city, setCity] = useState('');
  const [preferredSports, setPreferredSports] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    if (city && preferredSports.length) {
      rootModel.auth.user.saveCityToModel({ city });
      rootModel.auth.user.savePreferredSportsToModel({ preferredSports });
      rootModel.auth.user.sendAdditionalData({ history });
    }
  };

  return (
    <>
      <div className='formContainer'>
        <form>
          <div className='label'>City</div>
          <CountrySelection city={city} setCity={setCity} />
          <div className='label'>Favorite Sports</div>
          <SelectItemsBar
            items={favoriteSportInputs}
            setPreferredSports={setPreferredSports}
            preferredSports={preferredSports}
          />
          <div className='itemWrapper'>
            <button
              onClick={(e) => submit(e)}
              className='button'
              disabled={!(!!city && preferredSports.length > 0)}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default observer(UserInformationForm);
