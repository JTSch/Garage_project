(document.body.onload = function() {

	setTimeout (function() {
		var preloader = document.getElementsByClassName("preloader")[0];
		if ( !preloader.classList.contains('done') ) {
			preloader.classList.add('done');
		}
	}, 1000);
}());