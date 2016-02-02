var Immutable = require('immutable');

module.exports = function(api){

	var state = Immutable.Map({
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
		'events': "AppEvents('FORECAST.ADD');"
	});

	function addForecast(singleForecast){
		var singleForecast = {
			'day': {
				'weekday': 'Wednesday',
				'temp': 17.4,
				'wind': 0.0
			}
		};
		state = state.updateIn(['forecast'], forecastList => forecastList.concat(singleForecast));
	}

	function getState(){
		return state;
	}

	return {
		getState: getState,
		addForecast: addForecast
	};
};