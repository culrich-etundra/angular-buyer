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
				Title: 'Order all your restaurant supplies in one easy place!',
				SubText: 'Includes equipment and parts for commercial kitchens.',
				ID: 1
			},
			{
				URL: 'assets/images/carousel3.jpg',
				Title: 'View and manage your orders!',
				SubText: 'Start your first order now!',
				ID: 2
			}
		]
	};
}
