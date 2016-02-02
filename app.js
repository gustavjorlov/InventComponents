var apiClass = require('./js/api');
var logicClass = require('./js/logic');

var api = apiClass();
var logic = logicClass(api);

var forecastViewController = require('./js/forecastViewController')(logic);
var placesViewController = require('./js/placesViewController');



window.AppEvents = function(name){
	var args = name.split(".");
	switch(args[0]){
		case "FORECAST":
			forecastViewController.eventHandler(args);
			break;
		default:
			console.log("AppEvents", args);
	}
	renderApp();
};

function renderApp(){
	forecastViewController.render();
}

renderApp();