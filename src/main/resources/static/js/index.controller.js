(function() {
	app.controller('indexController', function($scope) {
		
		var vm=this;
		
	vm.slideIndex = 1;
	showDivs(vm.slideIndex);

	function plusDivs(n) {
		showDivs(vm.slideIndex += n);
	}

	function showDivs(n) {
		var i;
		vm.x = document.getElementsByClassName("mySlides");
		if (n > x.length) {
			vm.slideIndex = 1
		}
		if (n < 1) {
			vm.slideIndex = x.length
		}
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		vm.x[slideIndex - 1].style.display = "block";
	}});

})();