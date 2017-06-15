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
				Title: 'Your place to purchase all restaurant equipment!',
				SubText: 'Includings parts and accessories',
				ID: 1
			},
			{
				URL: 'assets/images/carousel3.jpg',
				Title: 'All in one easy to access place!',
				SubText: 'Get started now!',
				ID: 2
			}
		]
	};
}
