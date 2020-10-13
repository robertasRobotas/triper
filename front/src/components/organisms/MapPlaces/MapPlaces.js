import React, { useState } from 'react';
import { PlacesList, PlacesSearchTools } from '../../molecules';
import { getGeocode, getGeolocation } from '../../../helpers/apiCalls';
import './MapPlaces.css';

const MapPlaces = ({
  width,
  height,
  selectedPlace,
  setSelectedPlace,
  places,
  setPlaces,
  place,
  route,
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
      <PlacesSearchTools
        getGeocode={getGeocode}
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
        getGeolocation={getGeolocation}
        places={places}
        setPlaces={setPlaces}
        place={place}
      />
      {route.routeItems.map((place) => (
        <PlacesList
          key={`${place.lat}${place.lng}`}
          place={place}
          setSelectedPlace={setSelectedPlace}
        />
      ))}
    </div>
  );
};

export default MapPlaces;
