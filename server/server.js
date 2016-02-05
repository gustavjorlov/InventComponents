var express = require('express');
var app = express();

var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var dayIndex = 0;

app.use(express.static(__dirname + "/../"));

app.get("/forecast", function(req, res){
	console.log("responding to /forecast get request");
	dayIndex = (dayIndex > 5) ? 0 : 1+dayIndex;
	res.json({
		'forecast': [
			{
				'day': {
					'weekday': weekdays[dayIndex],
					'temp': Math.round((Math.random()-0.5)*50*10)/10,
					'wind': Math.round(Math.random()*4)
				}
			}
		]
	});
});

app.listen(1337, function(){
	console.log("Listening to port 1337");
});