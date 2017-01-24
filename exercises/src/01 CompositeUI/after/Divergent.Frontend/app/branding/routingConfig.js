(function () {

    angular.module('app.services')
        .config(['$stateProvider', '$locationProvider', '$logProvider',
        function ($stateProvider, $locationProvider, $logProvider) {

                $logProvider.debugEnabled(true);
                $locationProvider.html5Mode(false);

                var rootViews = {
                    '': {
                        templateUrl: '/app/branding/dashboard/dashboardView.html',
                        controller: 'dashboardController',
                        controllerAs: 'viewModel'
                    }
                };

                $stateProvider
                    .state('root', {
                        url: '',
                        views: rootViews
                    })
                    .state('dashboard', {
                        url: '/',
                        views: rootViews
                    })
                    .state('orders', {
                        url: '/orders',
                        views: {
                            '': {
                                templateUrl: '/app/branding/sales/orders/ordersView.html',
                                controller: 'ordersController',
                                controllerAs: 'viewModel'
                            }
                        }
                    });

            }]);
}())