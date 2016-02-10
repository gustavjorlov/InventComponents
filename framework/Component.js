import Immutable from 'immutable';
import EventEngine from './EventEngine';
import EventEmitter from 'events';

export default class Component extends EventEmitter{

	constructor(state, name){
		super();
		this.state = Immutable.Map(state);
		this.name = name;

		// console.log("- Constructing " + this.name);
	}

	shouldUpdate(){
		return true;
	}

	/************* graphics *************/

	render(){
		console.log("Component " + this.name + " has not implemented render()");
		return "Component " + this.name + " has not implemented render()";
	}

	/************* data *************/

	setState(state){
		this.state = Immutable.Map(state);
		this.emit("dirty");
	}

	getState(){
		// console.log("Component " + this.name + " returning state");
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