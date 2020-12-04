const Post = require('../models/posts');

module.exports.home = function(req, res) {

//  Post.find({}, function(err, posts) {

//      res.render('home', {
//          title: "NOdeial | Home",
//          posts: posts
//      })
//  } )

    // populate the user of each post
  
 Post.find({}).populate('user').exec(function(err,posts){
     return res.render('home',{
         title: "Nodial | Home",
         posts: posts
     });
 })

}