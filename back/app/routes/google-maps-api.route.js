const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.post('/getGeocodeByPlace', (req, res) => {
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.location}&key=${process.env.GOOGLE_API_KEY}`,
    { method: 'GET' }
  ).then(async (response) => {
    return res.status(200).json({ response: await response.json() });
  });
});

router.post('/getGeolocation', (req, res) => {
  console.log('hit');
  fetch(
    `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.GOOGLE_API_KEY}`,
    { method: 'POST' }
  ).then(async (response) => {
    return res.status(200).json({ response: await response.json() });
  });
});

module.exports = router;
