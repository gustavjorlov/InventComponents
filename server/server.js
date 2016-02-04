var express = require('express');

var app = express();

app.use(express.static(__dirname + "/../"));

app.get("/forecast", function(req, res){
	console.log("responding to /forecast get request");
	res.json({
		'forecast': [
			{
				'day': {
					'weekday': 'Monday',
					'temp': 21.2,
					'wind': 0.6
				}
			}, {
				'day': {
					'weekday': 'Tuesday',
					'temp': 23.4,
					'wind': 1.2
				}
			}
		]
	});
});

app.listen(1337, function(){
	console.log("Listening to port 1337");
});