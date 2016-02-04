import request from 'superagent';

export default (function(){
	function get(resource){
		return new Promise(function(resolve, reject){
			request.get("http://localhost:1337/forecast").end(function(err, res){
				if(err){ reject(err); }else{
					resolve(res.body);
				}
			});
		});
	}

	return {
		get: get
	};
}());