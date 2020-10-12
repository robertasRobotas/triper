import { types, flow } from 'mobx-state-tree';
import axios from 'axios';

const Place = types
  .model('Route', {
    id: types.maybeNull(types.string),
    placeTitle: types.maybeNull(types.string),
    placeDescription: types.maybeNull(types.string),
    lat: types.maybeNull(types.number),
    lng: types.maybeNull(types.number),
  })
  .actions((self) => ({
    setUserLocationByGeocode: flow(function* setUserLocationByGeocode(
      location
    ) {
      try {
        yield axios
          .post(
            `${process.env.REACT_APP_SERVER_HOST}/googleMaps/getGeocodeByPlace`,
            {
              location: location,
            }
          )
          .then((res) => {
            console.log('res', res);
          });
      } catch (error) {
        console.log(error);
      }
    }),
    setNewCurrentPlace({ lat, lng }) {
      self.lat = lat;
      self.lng = lng;
      self.id = `${lat}${lng}`;
      self.placeTitle = undefined;
      self.placeDescription = undefined;
    },
  }));

export { Place };
