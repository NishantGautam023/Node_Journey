const express = require('express')
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose')

// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local_strategy');


// Reading through the POST requests
app.use(express.urlencoded({extended: true}));
// setting up the cookie parser
app.use(cookieParser());


app.use(express.static('./assets'))
app.use(expressLayouts);


// extract style  and scripts from sub-pages  into the layout
app.set('layout extractStyles', true)
app.set('layout extractScripts',true)

app.set('view engine', 'ejs')
app.set('views', './views')


// using the express-session for adding it as a middleware
app.use(session({
    name: "Nodeial",
    // TODO: Change the secret key beofre deployment in production  mode
    secret: "SomethingFromNothing",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60* 100)
    }
}));

// tell the app to use passport 
app.use(passport.initialize());
app.use(passport.session());


// use the router
app.use('/', require('./routes'));



app.listen(port, function(err) {
    if(err) {
        console.log(`There is a error on the server ${err}`)
        return;
    }
    console.log(`Server is running on port ${port}`)
})

