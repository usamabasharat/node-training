const express = require('express');
const asyncHandler = require('express-async-handler');
const postCtrl = require('../controllers/posts.controller');

const router = express.Router();
module.exports = router;


router.post('/:id', asyncHandler(postCtrl.getPosts));
