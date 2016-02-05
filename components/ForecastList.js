import Component from '../framework/Component';
import Immutable from 'immutable';
import Forecast from '../templates/forecast.html';

export default class ForecastList extends Component{
	constructor(){
		super(null, "ForecastList");
	}

	addForecast(state){
		this.setState({
			'forecast': (this.getState().forecast || []).concat(state.forecast[0])
		});
	}

	render(){
		return Forecast(this.getState());
	}
}