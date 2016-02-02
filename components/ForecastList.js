import Component from '../framework/Component';

class ForecastList extends Component{
	constructor(){
		super(null, "ForecastList");
	}

	render(){
		return "ForecastList";
	}
}

export default new ForecastList();