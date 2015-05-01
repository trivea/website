var app = angular.module('clutch', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'homeController'
        })
        .state('product', {
            url: '/product',
            templateUrl: 'templates/product.html',
            controller: 'productController'
        })
        .state('shoppers', {
            url: '/shoppers',
            templateUrl: 'templates/shoppers.html',
            controller: 'shoppersController'
        })
        .state('retailers', {
            url: '/retailers',
            templateUrl: 'templates/retailers.html',
            controller: 'retailersController'
        })
        .state('details', {
            url: '/details',
            templateUrl: 'templates/details.html',
            controller: 'detailsController'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'templates/about.html',
            controller: 'aboutController'
        });

});