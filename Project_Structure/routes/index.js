const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller')

router.get('/',homeController.home)

router.get('/user',homeController.user)

module.exports = router;
