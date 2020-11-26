const User = require('../models/user')

module.exports.profile = function(req,res) {
    res.render('user', {
        title: "User Profile"
    })
}

// Adding a SignIn action and rendering in to the Sign up page

module.exports.signIn = function(req,res) {
    res.render('user_sign_in', {
        title: "Sign In "
    })
}

// Adding a SignIn action and rendering in to the Sign up page

module.exports.signUp = function(req,res) {
    res.render('user_sign_up', {
        title: "Sign Up "
    })
}

// Get the Sign-up Data from the form action

module.exports.create = function(req,res) {
    //1. Read the body parameters the form one's(i.e name="")
    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back') // goes back to whichever page it came from
    }
    //2. if the passwords are same. Try to find user with the same email id
         // because the email has to be unique. 
    
    /* 2.1. use the  exported the user models to find it User.
     findone by email and then a callback function for err and user 
      as argument                         */
     User.findOne({email: req.body.email},function(err, user){
        // for error in one line because it is short :)
        if(err){console.log(`Error in finding  user in signing up`); return}

    // 2.2 if user is not found then we create a user object
    if(!user) {
        // pass the request body directly (name,email,password) and store it
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
    // TODO: Add later
}