export default class App{

	constructor(startComponent){
		this.startComponent = startComponent;
		console.log("Constructing App");
	}

	render(){
		const appMarkup = this.startComponent.render();
		document.getElementById("app").innerHTML = appMarkup;
	}

}