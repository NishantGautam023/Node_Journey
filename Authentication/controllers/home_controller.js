module.exports.home = function(req, res) {
    return res.render('home', {
        title: "Home Page"
    })
}


module.exports.user = function(req, res) {
    return res.render('user', {
        title: "User Page"
    })
}