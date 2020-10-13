import React from 'react';
import './PlacesList.css';

const PlacesList = ({ place, setSelectedPlace }) => {
  return (
    <div
      className='placeSelectionButton'
      onClick={() =>
        setSelectedPlace({
          lat: place.lat,
          lng: place.lng,
        })
      }>
      {place.placeTitle}
    </div>
  );
};

export default PlacesList;
