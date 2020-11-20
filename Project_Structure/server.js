const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.static('./assets'));


app.use(expressLayouts);

// extract  style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// use the express router
app.use('/', require('./routes'));

app.set('view engine','ejs')
app.set('views', './views')

 


app.listen(port, (err) => {
    if(err){
        console.log(`There is an error ${err}`)
        return;
    }
    console.log(`The server is running successfully on port ${port}`)
})