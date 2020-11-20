module.exports.home = function(req, res) {
    res.render('home', {
        title: "Home Profile"
    })
}

module.exports.user = function(req, res) {
    res.render('user', {
        title: "User Profile"
    })
}    