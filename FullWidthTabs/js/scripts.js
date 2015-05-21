(function(window){
	var BASE_URL = 'http://lorempixel.com/350/200';

	function rando(limit){
		return Math.floor(Math.random() *limit
	)};

//alert(Math.floor(Math.random() *1000));

function randoImage(){
	return BASE_URL + "?" + rando(1000);
}

 $('img').attr('src', randoImage);
})(window);
