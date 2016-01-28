var Forecast = require('./forecast.html');

module.exports = function forecastViewController(logic){

	function render(){
		var data = {
			'weather': 'nice', 
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
			],
			'events': "AppEvents('FORECAST.EVEN.MORE');"
		};

		document.getElementById("main").innerHTML = Forecast(data);
	}

	return {
		render: render
	};
};