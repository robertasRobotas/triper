import React from 'react';
import Router from './router';
import RootModel from './store/RootModel';
import { onSnapshot } from 'mobx-state-tree';

const rootModel = RootModel.create({
  auth: {},
  appData: {
    currentPlace: { lat: 59.95, lng: 30.33, id: `59.9530.33` },
    route: {
      id: 'asdasdasd',
      routeName: 'add your Route name',
      routeDescription: 'awesome description',
      routeCategory: 'trip',
      routeItems: [
        { lat: 59.95, lng: 40.33, placeTitle: 'xcxcxc' },
        { lat: 69.95, lng: 60.33, placeTitle: 'sdsd' },
        { lat: 79.95, lng: 40.33, placeTitle: 'wewecc' },
        { lat: 89.95, lng: 50.33, placeTitle: 'bfgvsdc' },
        { lat: 59.95, lng: 30.33, placeTitle: 'lklo' },
        { lat: 59.95, lng: 30.34, placeTitle: 'asdasd' },
      ],
    },
  },
});
rootModel.auth.getUserData();

onSnapshot(rootModel, (snapshot) => console.log('snapshot', snapshot));
const App = () => {
  return (
    <>
      <Router rootModel={rootModel} />
    </>
  );
};

export default App;
