import Component from '../framework/Component';

export default class Day extends Component{

	constructor(state){
		super(state, "Day");
		this.state = state.day;
	}

	render(){
		return `<div class='day' key='${this.state.weekday+this.state.temp+this.state.wind}'>
					<h2>${this.state.weekday}</h2>
					<p>${this.state.temp}</p>
					<p>${this.state.wind}</p>
				</div>`;
	}
}