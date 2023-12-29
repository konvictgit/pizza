const express = require('express');
const app = express();
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const path = require('path');

const PORT = process.env.PORT || 3000


//Assest
app.use(express.static('public'));

// set template engine
app.use(expressLayout);
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')




app.get('/login', function(req,res){
    res.render('auth/login')
})

app.get('/register', function(req,res){
    res.render('auth/register')
})

app.get('/cart', function(req,res){
    res.render('customers/cart')
})

app.listen(PORT , () => {
    console.log(`listening on port ${PORT}`);
});