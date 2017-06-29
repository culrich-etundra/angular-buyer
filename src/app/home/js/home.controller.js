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
				SubText: 'Welcome to the ' + ocAppName.Watch() + ' store',
				ID: 0
			},
			{
				URL: 'assets/images/carousel2.jpg',
				Title: 'The place for all your restaurant equipment',
				SubText: 'Browse all equipment, including parts!',
				ID: 1
			},
			{
				URL: 'assets/images/carousel3.jpg',
				Title: 'Easy, quick and realiable online ordering!',
				SubText: 'Start your first order now!',
				ID: 2
			}
		]
	};
}