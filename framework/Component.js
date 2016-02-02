export default class Component{

	constructor(state, name){
		this.state = state;
		this.name = name;
		console.log("Constructing " + this.name);
	}

	markup(){
		return "<div class='"+this.name+"'>"+this.name+"</div>";
	}

	render(){
		console.log("Component " + this.name + " rendering");
		return this.markup();
	}

	getState(){
		console.log("Component " + this.name + " returning state");
		return this.state;
	}

}