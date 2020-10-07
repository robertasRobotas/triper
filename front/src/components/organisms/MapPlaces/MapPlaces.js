import React, { useState } from 'react';
import PlaceSelection from '../Molecules/PlaceSelection';
import AddPlaceSection from '../Molecules/AddPlaceSection';
import { getGeocode, getGeolocation } from '../../../helpers/apiCalls';

const MapPlaces = ({
  width,
  height,
  selectedPlace,
  setSelectedPlace,
  places,
  setPlaces,
}) => {
  return (
    <div
      className='places'
      style={{
        height: height,
        width: width,
        float: 'left',
      }}>
      <div className='placesPrimaryTitle'>Make a Route</div>
      <div className='placesSecondaryTitle'>Add place</div>
      <AddPlaceSection
        getGeocode={getGeocode}
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
        getGeolocation={getGeolocation}
        places={places}
        setPlaces={setPlaces}
      />
      {places.map((place) => (
        <PlaceSelection
          key={`${place.lat}${place.lng}`}
          place={place}
          setSelectedPlace={setSelectedPlace}
        />
      ))}
    </div>
  );
};

export default MapPlaces;
