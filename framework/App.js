export default class App{

	constructor(startComponent){
		this.startComponent = startComponent;
		console.log("\n\t--> Construction Done <--\n\n");

	}

	render(){
		const appMarkup = this.startComponent.render();
		document.getElementById("app").innerHTML = appMarkup;
	}

}