const express  = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assets'))
app.use(expressLayouts)


// extract the styles and scripts from sub pages in the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// set up the view engine
app.set('view engine', 'ejs')
app.set('views', './views')


// use express router
app.use('/', require('./routes'))




app.listen(port, (err) => {
    if(err) {
        console.log(`There is an err ${err}`)
        return;
    }
    console.log(`The server is running on port ${port}`)
} );
