import Component from '../framework/Component';
import SearchTemplate from '../templates/search.html';

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
		console.log(document.getElementById("searchField").value);
	}

	render(){
		return SearchTemplate({'search': this.getEvent('search')});
	}
}

export default new Search();