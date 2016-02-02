// var apiClass = require('./components/api');
// var logicClass = require('./components/logic');

// var api = apiClass();
// var logic = logicClass(api);

// var forecastViewController = require('./components/forecastViewController')(logic);
// var placesViewController = require('./components/placesViewController');

import WeatherApp from './components/WeatherApp';
import App from './framework/App';

var app = new App(WeatherApp);
app.render();

// window.AppEvents = function(name){
// 	var args = name.split(".");
// 	switch(args[0]){
// 		case "FORECAST":
// 			forecastViewController.eventHandler(args);
// 			break;
// 		default:
// 			console.log("AppEvents", args);
// 	}
// 	renderApp();
// };

// function renderApp(){
// 	forecastViewController.render();
// }
