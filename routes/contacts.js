const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { validationResult, check } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');

// @route   GET api/contacts
// @desc    GET all users contacts
// @access  Private (로그인해야하기때문)
router.get('/', auth, async (req, res) => {
  // moogoose 와 deal 위해 trycatch
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});

// @route   POST api/contacts
// @desc    Add new contacts
// @access  Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route   DELETE api/contacts:id
// @desc    Delete contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
