import Immutable from 'immutable';
import EventEngine from './EventEngine';

export default class Component{

	constructor(state, name){
		this.state = Immutable.Map(state);
		this.name = name;
		this.dirty = false;

		console.log("- Constructing " + this.name);
	}

	shouldUpdate(){
		return true;
	}

	/************* graphics *************/

	render(){
		console.log("Component " + this.name + " has not implemented render()");
		this.dirty = false;
		return "Component " + this.name + " has not implemented render()";
	}

	/************* data *************/

	setState(state){
		this.state = Immutable.Map(state);
	}

	getState(){
		console.log("Component " + this.name + " returning state");
		return this.state.toJSON();
	}

	/************* events *************/

	registerEvents(events){
		EventEngine.register(events, this.name);
	}


	getEvent(key){
		return "AppEvents."+this.name+"."+key+"();";
	}

}