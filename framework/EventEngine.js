class EventEngine{

	register(events, componentName){
		if(!window.hasOwnProperty('AppEvents')){ window.AppEvents = {}; }
		if(!window.AppEvents.hasOwnProperty(componentName)){ window.AppEvents[componentName] = {}; }

		Object.keys(events).map( (event, i) => {
			window.AppEvents[componentName][event] = events[event];
		});
	}

}

export default new EventEngine();