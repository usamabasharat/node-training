const express = require('express');
const postsRoutes = require('./posts.route');

const router = express.Router();
module.exports = router;

router.use('/posts', postsRoutes);

