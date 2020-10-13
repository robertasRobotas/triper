import React, { useState } from 'react';
import './PlacesSearchTools.css';

const PlacesSearchTools = ({ selectedPlace, places, setPlaces, place }) => {
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
          onClick={() =>
            place.getGeocodeByPlace(locationInput).then((res) => {
              place.setNewCurrentPlace({
                lat: res[0].geometry.location.lat,
                lng: res[0].geometry.location.lng,
              });
            })
          }>
          go
        </button>
      </div>
      <button
        className='yourLocationButton'
        onClick={() =>
          place.getUserLocation().then((res) => {
            place.setNewCurrentPlace({
              lat: res.lat,
              lng: res.lng,
            });
          })
        }>
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
