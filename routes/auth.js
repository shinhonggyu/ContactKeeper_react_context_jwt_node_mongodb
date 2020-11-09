const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    GET logged in user
// @access  Private 로그인된 유저를 얻어오기때문
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// @route   POST api/auth
// @desc    Auth user & get Token
// @access  Public
router.post('/', (req, res) => {
  res.send('Log in user');
});

module.exports = router;
