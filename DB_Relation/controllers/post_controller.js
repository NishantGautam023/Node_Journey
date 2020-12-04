// The post is belonging  to the post schema so importing it.
const Post = require('../models/posts')


module.exports.create = function(req,res) {
    // this post.create we will make from the data in the form 
    Post.create({   
        // the name of the form is content so the field in the post is also content.
        // directly saving the data coming form the form into the post.
        // also saving the user who is logged in
// We are creating an action to submit the data of the form and save in the database.

        content: req.body.content,
        user: req.user._id
        // then a call back function 
    }, function(err,post) {
        // catching the error and returning
       if(err) {
           
           console.log("error in creating post"); return}
    
        
       return res.redirect('back') // going back to the same page. 
        
       })

}