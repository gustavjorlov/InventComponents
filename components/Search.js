import Component from '../framework/Component';
import SearchTemplate from '../templates/search.html';
import API from './Api';

class Search extends Component{
	constructor(){
		super(null, "Search");
		this.registerEvents({
			'search': this.search,
			'reset': function(){
				console.log("resetting");
			}
		});
	}

	search(){
		API.get().then(function(response){
			console.log("success", response);
		}, function(){
			console.log("error");
		});
		console.log(document.getElementById("searchField").value);
	}

	render(){
		return SearchTemplate({'search': this.getEvent('search')});
	}
}

export default new Search();