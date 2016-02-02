export default class Component{

	constructor(state, name){
		this.state = state;
		this.name = name;
	}

	render(){
		console.log("Component " + this.name + " rendering");
	}

	getState(){
		console.log("Component " + this.name + " returning state");
		return this.state;
	}

}