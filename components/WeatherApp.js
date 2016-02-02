import Component from '../framework/Component';

import Search from './Search';
import ForecastList from './ForecastList';

class WeatherApp extends Component{
	constructor(){
		super(null, "WeatherApp");
	}

	render(){
		return Search.render() + ForecastList.render();
	}
}

export default new WeatherApp();