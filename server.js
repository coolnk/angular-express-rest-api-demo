var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname+'/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'applicatin/vnd.api+json'}));

app.get('*', function(req,res){
    res.sendFile('./public/index.html');
})
app.listen(7070);
console.log("App listening on 7070");
