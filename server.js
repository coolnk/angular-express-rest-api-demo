var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var port = 7070;

app.use(express.static(__dirname+'/public'));
app.use(morgan('dev'));

//Configure body parse to enable get data from POST
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'applicatin/vnd.api+json'}));

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();

//test the route to make sure evreything is going fine

router.get('/message', function(req,res){
    res.json({message: 'Welcome!, this message comes from the local api'});    
});

app.use('/api', router);

//Alternate method
app.get('/api/2',function(req,res){
    res.json({message: 'Welcome!, this is the second message'});
})

app.get('*', function(req,res){
    res.sendFile('./public/index.html');
}); 
app.listen(port);
console.log("App listening port "+port);
