var express = require('express');
var	bodyparser = require('body-parser');
var	request = require('request'); 

var app = express();

app.set('port', process.env.PORT || 5000); 

//Process the body of requests
app.use(bodyparser.urlencoded({extended: false});
app.use(bodyparser.json());

//Routes

app.get('/', function(req,res){
	res.send("Hi, Im a chatbot"); 
})

//Facebook
app.get('/webhook/', function(req, res){
	if (req.query['hub.verify_token'] === 'chatbot'){
		res.send(req.query['hub.challenge'])
	}
	res.send('Wrong Token'); 
})

app.listen(app.get('port'), function(){
	console.log("running: port")
})

