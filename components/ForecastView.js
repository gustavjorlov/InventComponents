var Forecast = require('../templates/forecast.html');
import Component from '../framework/Component';

import Search from './Search';
import ForecastList from './ForecastList';

export default class ForecastView extends Component{
	constructor(time){
		super({'time': time}, "ForecastView");
		console.log("Constructing ForecastView with " + time);
	}

	render(){
		return "ForecastView";
	}
}

// module.exports = function forecastViewController(logic){

// 	function render(){
// 		var data = logic.getState();

// 		document.getElementById("main").innerHTML = Forecast(data.toJSON());
// 	}

// 	function eventHandler(args){
// 		console.log("forecastViewController.eventHandler()", args);
// 		switch(args[1]){
// 			case "ADD": 
// 				addForecast();
// 				break;
// 			default:
// 				console.log("No handling for that");
// 		}
// 	}

// 	function addForecast(){
// 		console.log(document.getElementById("day").value);
// 		logic.addForecast();
// 	}

// 	return {
// 		render: render,
// 		eventHandler: eventHandler
// 	};
// };