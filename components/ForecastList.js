import Component from '../framework/Component';
import Immutable from 'immutable';
import Day from './Day';

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
		var forecastData = this.getState().forecast || [];
		
		return "<div>"+forecastData.map(function(day){
			return (new Day(day)).render();
		}).join("")+"</div>";
	}
}