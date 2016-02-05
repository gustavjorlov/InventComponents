import WeatherApp from './components/WeatherApp';
import App from './framework/App';

render();

function render(){
	const appMarkup = WeatherApp.render();
	document.getElementById("app").innerHTML = appMarkup;
}

WeatherApp.on("dirty", render);