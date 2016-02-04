import Component from '../framework/Component';
import Search from './Search';
import ForecastList from './ForecastList';

class WeatherApp extends Component{
	constructor(){
		super(null, "WeatherApp");
	}

	render(){
		return "<div>"+Search.render()+"</div><div>"+ForecastList.render()+"</div>";
	}
}

export default new WeatherApp();