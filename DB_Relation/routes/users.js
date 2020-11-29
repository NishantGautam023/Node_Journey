const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/user_controller')

router.get('/profile',passport.checkAuthentication, userController.profile);

router.get('/sign-in',userController.signIn);
router.get('/sign-up', userController.signUp);

// matching the users/create in the sign-up form 
router.post('/create', userController.create)

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), userController.createSession);

// for sign-out.
router.get('/sign-out',userController.destroySession)


module.exports = router;
