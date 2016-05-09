var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var jsonFile = require('jsonfile');
var favicon = require('serve-favicon');
var app = express();
var port = 7070;

app.use(express.static(__dirname+'/public'));
app.use(morgan('dev'));

//Configure body parse to enable get data from POST
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'applicatin/vnd.api+json'}));

//Added favicon, this somehow solves the absolute path error, don't know why
app.use(favicon(__dirname+'/favicon.ico'));

// ROUTES FOR OUR API
// =============================================================================
//var router = express.Router();
//app.use('/api', router);

app.get('/api/message',function(req,res){  
    res.sendFile(__dirname+'/foo.json'); 
})

app.get('*', function(req,res){
    res.sendFile('./public/index.html');
}); 
app.listen(port);
console.log("App listening port "+port);
