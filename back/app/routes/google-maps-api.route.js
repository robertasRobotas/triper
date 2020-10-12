const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/getGeocode', (req, res) => {
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${res.body.location}&key=${process.env.GOOGLE_API_KEY}`,
    { method: 'GET' }
  ).then((res) => res.json());
});

module.exports = router;
