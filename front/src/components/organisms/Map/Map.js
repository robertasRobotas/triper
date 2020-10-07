import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import locationSign from '../../../assets/photos/locationSign.png';

const AnyReactComponent = () => (
  <img
    style={{ width: '30px', transform: 'translate(-50%, -100%)' }}
    src={locationSign}
    alt='location'
  />
);

const Map = ({ height, width, selectedPlace, setSelectedPlace }) => {
  const [zoom, setZoom] = useState(11);
  console.log(process.env.REACT_APP_GOOGLE_API_KEY);

  return (
    <div
      style={{
        height: height,
        width: width,
        background: 'purple',
        float: 'right',
      }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        center={selectedPlace}
        defaultZoom={zoom}
        onClick={(e) => {
          setSelectedPlace({ lat: e.lat, lng: e.lng });
        }}>
        <AnyReactComponent lat={selectedPlace.lat} lng={selectedPlace.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
