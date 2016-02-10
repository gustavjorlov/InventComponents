import Component from '../framework/Component';
import Search from './Search';
import ForecastList from './ForecastList';

class WeatherApp extends Component{
	constructor(){
		super(null, "WeatherApp");
		this.search = new Search();
		this.forecastList = new ForecastList();

		this.search.on("result", this.searchEvents.bind(this));
		this.forecastList.on("dirty", this.dirtydata.bind(this));
		this.forecastList.on("event", this.forecastListEvents.bind(this));
	}

	searchEvents(result){
		// console.log(result);
		this.forecastList.addForecast(result);
	}

	dirtydata(){
		// console.log("dirty");
		this.emit("dirty");
	}

	forecastListEvents(){

	}

	render(){
		return `
			<div id="${this.name}">
				<div><h1>Header</h1></div>
				${this.search.render()}
				${this.forecastList.render()}
			</div>`;
	}
}

export default new WeatherApp();