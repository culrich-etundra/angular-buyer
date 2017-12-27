angular.module('orderCloud')
	.controller('HomeCtrl', HomeController)
;

function HomeController(ocAppName, FeaturedProducts) {
	var vm = this;

	vm.featuredProducts = FeaturedProducts;

	vm.carousel = {
		Settings: {
			Interval: 5000,
			Active: 0,
			NoWrap: false
		},
		Slides: [
			{
				URL: 'assets/images/carousel1.jpg', 
				Title: ocAppName.Watch(),
				SubText: 'Welcome to the ' + ocAppName.Watch() + ' application',
				ID: 0
			}
		]
	};
}
