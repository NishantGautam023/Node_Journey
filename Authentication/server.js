const express = require('express')
const port = process.env.PORT || 3000;
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assets'))
app.use(expressLayouts);


// extract style  and scripts from sub-pages  into the layout
app.set('layout extractStyles', true)
app.set('layout extractScripts',true)

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
