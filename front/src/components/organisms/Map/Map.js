import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import locationSign from '../../../assets/photos/locationSign.png';
import { observer } from 'mobx-react';

const AnyReactComponent = () => (
  <img
    style={{ width: '30px', transform: 'translate(-50%, -100%)' }}
    src={locationSign}
    alt='location'
  />
);

const Map = ({ height, width, place }) => {
  const [zoom, setZoom] = useState(11);

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
        center={{ lat: place.lat, lng: place.lng }}
        defaultZoom={zoom}
        onClick={(e) => {
          place.setNewCurrentPlace({
            lat: e.lat,
            lng: e.lng,
          });
        }}>
        <AnyReactComponent lat={place.lat} lng={place.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default observer(Map);
