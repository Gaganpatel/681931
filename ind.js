var express = require('express');
var fs = require('fs') ;
var bodyParser = require('body-parser'); 
var app = express();
var path = require('path');

var dataStore=require('nedb'),db = new dataStore({filename:'detail'});
db.loadDatabase();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.post('/Detail', function (req, res) {
	console.log(req.body.from1);
	console.log(req.body.to);
	console.log(req.body.date)
	console.log(req.body.arrival);
	console.log(req.body.departure);
	console.log(req.body.duration);
	console.log(req.body.price);
	console.log(req.body.airline);
	var air= 0;
		if(req.body.airline == 'Air India')
			air= 1;
		if(req.body.airline == 'Spice Jet')
			air= 2;
		if(req.body.airline == 'Indigo')
			air= 3;
		if(req.body.airline == 'Jet Airways')
			air= 4;
	console.log(air);
		
		db.insert({From:req.body.from1 , To:req.body.to ,date:req.body.date, Arrival:req.body.arrival,Departure:req.body.departure,Duration:req.body.duration,Price:req.body.price, Airline: air })
 
}); 

app.get('/getDetails',function(req,res){
	console.log(req.query);	
	console.log(req.query.from);	
	console.log(req.query.to);	
	
	var fromPlace= req.query.from;
	var toPlace = req.query.to
	db.find({From:fromPlace, To:toPlace },function(err,docs){
		console.log('start');		
		console.log(docs);
		res.send(docs);
	});
	
});      
		 
app.listen(process.env.PORT || 8080);