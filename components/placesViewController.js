module.exports = function(logic){

	function render(word){
		document.getElementById("main").innerHTML = +new Date();
		logic.get();
	}
	
	return {
		render: render
	};
};