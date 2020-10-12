import React, { useState } from 'react';
import './PlacesSearchTools.css';

const PlacesSearchTools = ({
  getGeocode,
  getGeolocation,
  selectedPlace,
  setSelectedPlace,
  places,
  setPlaces,
  x,
}) => {
  const [locationInput, setLocationInput] = useState('');

  return (
    <div className='addPlaceButtonWrapper'>
      <div>
        <input
          className='typePlaceInput'
          onChange={(e) => setLocationInput(e.target.value)}
          placeholder='type a place'
        />
        <button
          className='typePlaceButton'
          onClick={() => x.setUserLocationByGeocode(locationInput)}>
          go
        </button>
      </div>
      <button
        className='yourLocationButton'
        onClick={() => x.setUserLocationByGeocode()}>
        your place
      </button>
      <button
        className='addPlaceButton'
        onClick={() =>
          setPlaces([
            ...places,
            {
              lat: selectedPlace.lat,
              lng: selectedPlace.lng,
              title: `${selectedPlace.lat}  ${selectedPlace.lng}`,
            },
          ])
        }>
        Add place to Route
      </button>
    </div>
  );
};

export default PlacesSearchTools;
