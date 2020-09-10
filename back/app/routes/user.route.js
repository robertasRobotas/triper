const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/loginCheck');
const UserSchema = require('../models/user');

router.get('/getUser', isLoggedIn, (req, res) => {
  return res.status(200).json({ user: req.user });
});

router.get('/loginCheck', isLoggedIn, (req, res) => {
  return res.status(200).json({ message: 'ok' });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.clearCookie('connect.sid');
  res.status(200).json({ text: 'loggedOut' });
});

router.post('/addAdditionalData', isLoggedIn, async (req, res) => {
  const user = await UserSchema.findOne({ _id: req.user._id });
  user.preferredSports = req.body.preferredSports;
  user.city = req.body.city;
  user.save();

  return res.status(200).json({ message: 'ok' });
});

module.exports = router;
