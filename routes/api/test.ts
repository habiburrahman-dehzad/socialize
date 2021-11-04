import { Request, Response } from 'express';

import express from 'express';
import { check, validationResult } from 'express-validator';

const router = express.Router();

// const Todo = require('../../models/Todo');

// @route       GET api/test
// @desc        Get a test message
// @access      Public
router.get('/', async (req: Request, res: Response) => {
  res.send('Hello this is the test GET handler from Socialize server');
});

// @route       POST api/test
// @desc        Creates a new Todo with the given title
// @access      Public
router.post(
  '/',
  [check('title', 'Title is required').not().isEmpty()],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.json({ msg: 'Hello. Post accepted', body: req.body });
  }
);

export default router;
