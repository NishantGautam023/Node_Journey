const express = require('express');
const router = express.Router();
const passport = require('passport');

// import the controller to get the action
const postController = require('../controllers/post_controller')
// now we can access all the action that are exported in this post_controller.

// Since we put the method = post in the form so
router.post('/create',passport.checkAuthentication, postController.create)


// exporting it 

module.exports = router;