import React, { useState } from 'react';
import { Map, MapPlaces } from '../../organisms';
import Wrapper from '../../_hoc/Wrapper';
import RouteModel from '../../../store/RouteModel';

const Main = ({ history, location, rootModel }) => {
  const [selectedPlace, setSelectedPlace] = useState({
    lat: 59.95,
    lng: 30.33,
  });

  const [places, setPlaces] = useState([
    { lat: 59.95, lng: 40.33, title: 'aa' },
    { lat: 69.95, lng: 60.33, title: 'bb' },
    { lat: 79.95, lng: 40.33, title: 'cc' },
    { lat: 89.95, lng: 50.33, title: 'dd' },
    { lat: 59.95, lng: 30.33, title: 'ee' },
    { lat: 59.95, lng: 30.34, title: 'ff' },
  ]);
  return (
    <Wrapper history={history} rootModel={rootModel} location={location}>
      <MapPlaces
        width={'30%'}
        height={'calc(100vh - 4em)'}
        places={places}
        route={rootModel.appData.route}
        setPlaces={setPlaces}
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
        place={rootModel.appData.currentPlace}
      />
      <Map
        width={'70%'}
        height={'calc(100vh - 4em)'}
        place={rootModel.appData.currentPlace}
      />
    </Wrapper>
  );
};

export default Main;
