const express = require('express')
const router = express.Router();

const homeController = require('../controllers/home_controller')

router.get('/', homeController.home)

router.use('/users', require('./users'))

// path and the router we using
router.use('/post', require('./post'));
// which results in like: every routes in the post router(post.js) will be mapped with routes
// /post then the router which we have given. 

module.exports = router;