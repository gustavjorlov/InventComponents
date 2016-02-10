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
		// console.log("Rendering app again");
		const newMarkup = this.startComponent.render();
		
		this.virtualDiff.getDiff(this.renderedMarkup, newMarkup).then(function(diff){
			// console.log("diff", diff);
			// console.log(diff[0].item ? diff[0].item.rhs.$.key : "");
		}, function(){
			console.log("Diff failed, do full render");
		});
		if(newMarkup !== this.renderedMarkup){

			//TODO:
			//find which node is different.
			//find out the id for that div -> grab its contents and replace it in the DOM

			//maybe every component can have an id on the highest DOM node.
			// console.log(newMarkup);
			this.renderedMarkup = newMarkup;
			document.getElementById("app").innerHTML = newMarkup;
		}
	}

}