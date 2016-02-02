module.exports = function(){
	function get(resource){
		console.log("API getting ", resource);
	}

	return {
		get: get
	};
};