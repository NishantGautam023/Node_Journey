const express = require('express')
const port = process.env.PORT || 3000;
const app = express();
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);








// const expressLayouts = require('express-ejs-layouts');

// app.use(expressLayouts);

// use the router
app.use('/', require('./routes'));

app.set('view engine', 'ejs')
app.set('views', './views')



app.listen(port, function(err) {
    if(err) {
        console.log(`There is a error on the server ${err}`)
        return;
    }
    console.log(`Server is running on port ${port}`)
})
