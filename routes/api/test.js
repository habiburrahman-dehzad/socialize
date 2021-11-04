const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// const Todo = require('../../models/Todo');

// @route       GET api/test
// @desc        Get a test message
// @access      Public
router.get('/', async (req, res) => {
  res.send('Hello this is the test GET handler from Socialize server');
});

// @route       POST api/test
// @desc        Creates a new Todo with the given title
// @access      Public
router.post(
  '/',
  [check('title', 'Title is required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.json({ msg: 'Hello. Post accepted', body: req.body });
  }
);

module.exports = router;
