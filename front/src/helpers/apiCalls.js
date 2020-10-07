import axios from 'axios';

const getGeocode = (location) =>
  axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
  );

const getGeolocation = () =>
  axios.post(
    `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_GOOGLE_API_KEY}`
  );

export { getGeocode, getGeolocation };
