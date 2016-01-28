var forecastViewController = require('./forecastViewController');
var placesViewController = require('./placesViewController');
var apiClass = require('./api');
var logicClass = require('./logic');

var api = apiClass();
var logic = logicClass(api);

window.AppEvents = function(name){
	console.log(name);
};

forecastViewController(logic).render();