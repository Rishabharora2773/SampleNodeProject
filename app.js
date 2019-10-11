var express = require('express');
var app = express();


var myLogger = function(req, res, next){
    console.log('Here is my logger!!');
    next();
};

var mymiddleware = function(req, res, next){
    //console.log('I am a middleware!');
    res.send('I am a middleware!');         
};

app.use(myLogger);
app.use(mymiddleware);

app.get('/', (req, res)=>{
    res.send('Welcome to the home page!');
});

app.listen(3000);