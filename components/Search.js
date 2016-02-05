import Component from '../framework/Component';
import SearchTemplate from '../templates/search.html';
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
		return SearchTemplate({'search': this.getEvent('search')});
	}
}