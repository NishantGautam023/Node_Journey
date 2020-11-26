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