import request from 'superagent';

export default (function(){
	function getNextForecast(){
		return _sendRequest("/forecast");
	}

	function _sendRequest(endpoint){
		return new Promise(function(resolve, reject){
			request.get("http://localhost:1337"+endpoint).end(function(err, res){
				if(err){ reject(err); }else{
					resolve(res.body);
				}
			});
		});
	}

	return {
		getNextForecast: getNextForecast
	};
}());