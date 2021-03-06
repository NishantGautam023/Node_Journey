const User = require('../models/user')

module.exports.profile = function(req,res) {
    console.log(req.body);
    console.log(res.body);
    res.render('user_profile', {
        title: "User Profile"
    })
}

// Adding a SignIn action and rendering in to the Sign up page

module.exports.signIn = function(req,res) {

    if(req.isAuthenticated()) {
     return   res.redirect('/users/profile')
    }



   return  res.render('user_sign_in', {
        title: "Sign In "
    })
}

// Adding a SignIn action and rendering in to the Sign up page

module.exports.signUp = function(req,res) {

    if(req.isAuthenticated()) {
    return   res.redirect('/users/profile')
    }

  return  res.render('user_sign_up', {
        title: "Sign Up "
    })
}

// Get the Sign-up Data from the form action

module.exports.create = function(req,res) {
    console.log(req.body)
    console.log(req.body.password)
    console.log(req.body.confirmPassword)
   
    if (req.body.password != req.body.confirmPassword) {
        return res.redirect('back') // goes back to whichever page it came from
    }
                    
     User.findOne({email: req.body.email},function(err, user){
        // for error in one line because it is short 
        if(err){console.log(`Error in finding  user in signing up`); return}

    
    if(!user) {
        
        User.create(req.body, function(err, user){
            if(err){console.log(`Error in creating  user while signing up`); return }
            
            // if not user i.e if user is created and send it to sign-in page

            return res.redirect('/users/sign-in')
            
        })
    }    
    // if user is already present we redirect back to sign-in page
    else {
        return res.redirect('back')
    }
     })
    
}


// get the sign in session data
module.exports.createSession = function(req,res) {
    
    return res.redirect('/')
}

// for sign out 
module.exports.destroySession = function(req, res) {
    //1.log out of the pager
    //2. then redirect to the home page.
    req.logout();
    //1. this is given by passport to request
    return res.redirect('/')
}