import VirtualDiff from './VirtualDiff';

export default class VirtualApp{

	constructor(startComponent){
		this.startComponent = startComponent;
		this.renderedMarkup = "";
		this.virtualDiff = new VirtualDiff();

		this.render();
		this.startComponent.on('dirty', this.render.bind(this));
		console.log("\n\t--> Construction Done <--\n\n");
	}

	render(){
		console.log("Rendering app again");
		const appMarkup = this.startComponent.render();
		this.virtualDiff.diff(appMarkup, this.renderedMarkup);
		if(appMarkup !== this.renderedMarkup){

			//TODO:
			//find which node is different.
			//find out the id for that div -> grab its contents and replace it in the DOM

			//maybe every component can have an id on the highest DOM node.
			// console.log(appMarkup);
			this.renderedMarkup = appMarkup;
			document.getElementById("app").innerHTML = appMarkup;
		}
	}

}