import Component from '../framework/Component';
import API from './Api';

export default class Search extends Component{
	constructor(){
		super(null, "Search");
		this.registerEvents({
			'search': this.search.bind(this),
			'reset': function(){
				console.log("resetting");
			}
		});
		
	}

	search(){
		var that = this;
		API.getNextForecast().then(function(response){
			console.log("success", response.forecast[0].day);
			that.emit("result", response);
		}, function(){
			console.log("error");
		});
		console.log(document.getElementById("searchField").value);
	}

	render(){
		return `
			<div>
				<input id="searchField" type="text" placeholder="Search for a city" />
				<button onClick='${this.getEvent("search")}'>Search</button>
			</div>
		`;
	}
}