const express = require('express')
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');

// using the body-parser
const bodyParser = require('body-parser');



const app = express();
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose')

// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local_strategy');

// using mongo store as our persistant cookie
const MongoStore = require('connect-mongo')(session);

// using body-parser
app.use(bodyParser.urlencoded({
    extended: true
}))

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
// and mongo store is used to store the session cookie in the db. 
app.use(session({
    name: "Nodeial",
    // TODO: Change the secret key beofre deployment in production  mode
    secret: "SomethingFromNothing",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60* 100)
    },
    // mongo store is used here
    store: new MongoStore({
        mongooseConnection:db,
        autoRemove:'disabled'
    },
    // incase the connection is not established theere is a callback function
    function(err){
        console.log(err || 'connect-mongo setup ok');
        // either there is an error if no error then nothing shown.

    }
    )
}));

// tell the app to use passport 
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);


// use the router
app.use('/', require('./routes'));

// mam can i call u?i'll try finding the error first ok

app.listen(port, function(err) {
    if(err) {
        console.log(`There is a error on the server ${err}`)
        return;
    }
    console.log(`Server is running on port ${port}`)
})

