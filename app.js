import WeatherApp from './components/WeatherApp';
import VirtualApp from './framework/VirtualApp';

class App extends VirtualApp{

	constructor(startComponent){
		super(startComponent);
		this.startComponent = startComponent;
		console.log("\n\t--> App Done <--\n\n");
	}
}

var app = new App(WeatherApp);
	
// WeatherApp.on("dirty", render);