import React, { useState } from 'react';
import './PlacesSearchTools.css';

const PlacesSearchTools = ({
  getGeocode,
  getGeolocation,
  selectedPlace,
  setSelectedPlace,
  places,
  setPlaces,
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
          onClick={() =>
            getGeocode(locationInput).then((res) => {
              setSelectedPlace({
                lat: res.data.results[0].geometry.location.lat,
                lng: res.data.results[0].geometry.location.lng,
              });
            })
          }>
          go
        </button>
      </div>
      <button
        className='yourLocationButton'
        onClick={() =>
          getGeolocation().then((res) => {
            setSelectedPlace({
              lat: res.data.location.lat,
              lng: res.data.location.lng,
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
