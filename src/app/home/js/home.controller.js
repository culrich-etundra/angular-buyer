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
				Title: 'Ordering made easy, all in one place!',
				SubText: 'Including parts and accessories',
				ID: 1
			},
			{
				URL: 'assets/images/carousel3.jpg',
				Title: 'Orders placed before 3pm, ship same day!',
				SubText: 'Start your first order NOW!',
				ID: 2
			}
		]
	};
}
