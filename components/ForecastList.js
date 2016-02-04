import Component from '../framework/Component';
import Immutable from 'immutable';
import Forecast from '../templates/forecast.html';

class ForecastList extends Component{
	constructor(){
		super(null, "ForecastList");
		this.setState({
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
	}

	render(){
		return Forecast(this.getState());
	}
}

export default new ForecastList();