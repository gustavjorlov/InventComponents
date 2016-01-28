var forecastViewController = require('./js/forecastViewController');
var placesViewController = require('./js/placesViewController');
var apiClass = require('./js/api');
var logicClass = require('./js/logic');

var api = apiClass();
var logic = logicClass(api);

window.AppEvents = function(name){
	console.log(name);
};

forecastViewController(logic).render();