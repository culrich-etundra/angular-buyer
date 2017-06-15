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
			},
			{
				URL: 'assets/images/carousel2.jpg',
				Title: 'Mill Hardware - Worldwide Distributor of Replacement Parts',
				SubText: 'We supply high quality, reliable parts at extremely competitive prices.',
				ID: 1
			},
			{
				URL: 'assets/images/carousel3.jpg',
				Title: 'Start Purchasing Today!',
				SubText: 'In-stock orders placed by 3:30 P.M. ship the same day.',
				ID: 2
			}
		]
	};
}
