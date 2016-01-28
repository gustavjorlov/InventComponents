var Immutable = require('immutable');

module.exports = function(api){

	var state = Immutable.Map({'a': 'b'});

	function get(){
		return api.get(state.toJSON());
	}

	return {
		get: get
	};
};